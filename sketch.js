// CS30 Major Project
// Gabe PausJenssen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Changes to proposal.md must be discussed with Mr. Schellenberg

let questionScreen = "Start";

let songs = [];
let questionsArray = [];

let colours;
let question;
let choices;

let questionX, questionWidth, choices1and3x, choicesWidth, backX, backNextWidth, questionSize;

let questionY, questionHeight, choices2and4x, choices1and2y, choices3and4y, choicesHeight, nextX, backNextY, backNextHeight, lower;

let choice1selected, choice2selected, choice3selected, choice4selected;

let startText;
let startRect;

function setup() {
  createCanvas(windowWidth, windowHeight);

  colours = random(["red", "blue", "green", "purple"]);

  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,

    size: map(5, 0, 100, 0, width),
    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    button: "START",
    
    lower: map(75.5, 0, 100, 0, height),
  };

  startRect = {
    x: map(35, 0, 100, 0, width),
    y: map(75, 0, 100, 0, height),
    w: map(30, 0, 100, 0, width),
    h: map(10, 0, 100, 0, height),
  };

  if (width > height) {
    questionX = map(25, 0, 100, 0, width);
    questionWidth = map(50, 0, 100, 0, width);

    choices1and3x = map(25, 0, 100, 0, width);
    choicesWidth = map(22.5, 0, 100, 0, width);

    backX = map(25, 0, 100, 0, width);
    backNextWidth = map(20, 0, 100, 0, width);

    questionSize = 0.75*startText.size;
  }

  else {
    questionX = map(5, 0, 100, 0, width);
    questionWidth = map(90, 0, 100, 0, width);

    choices1and3x = map(5, 0, 100, 0, width);
    choicesWidth = map(42.5, 0, 100, 0, width);
    
    backX = map(5, 0, 100, 0, width);
    backNextWidth = map(40, 0, 100, 0, width);

    questionSize = 2*startText.size;
  }

  questionY = map(5, 0, 100, 0, height);
  questionHeight = map(25, 0, 100, 0, height);

  choices2and4x = map(52.5, 0, 100, 0, width);

  choices1and2y = map(35, 0, 100, 0, height);
  choices3and4y = map(62.5, 0, 100, 0, height);
  choicesHeight = map(22.5, 0, 100, 0, height);

  nextX = map(55, 0, 100, 0, width);

  backNextY = map(90, 0, 100, 0, height);
  backNextHeight = map(7.5, 0, 100, 0, height);

  lower = map(0.5, 0, 100, 0, height);
  
  createQuestions();

  choice1selected = false;
  choice2selected = false;
  choice3selected = false;
  choice4selected = false;
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);

  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,

    size: map(5, 0, 100, 0, width),
    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    button: "START",
    
    lower: map(75.5, 0, 100, 0, height),
  };

  startRect = {
    x: map(35, 0, 100, 0, width),
    y: map(75, 0, 100, 0, height),
    w: map(30, 0, 100, 0, width),
    h: map(10, 0, 100, 0, height),
  };

  if (width > height) {
    questionX = map(25, 0, 100, 0, width);
    questionWidth = map(50, 0, 100, 0, width);

    choices1and3x = map(25, 0, 100, 0, width);
    choicesWidth = map(22.5, 0, 100, 0, width);

    backX = map(25, 0, 100, 0, width);
    backNextWidth = map(20, 0, 100, 0, width);

    questionSize = 0.75*startText.size;
  }

  else {
    questionX = map(5, 0, 100, 0, width);
    questionWidth = map(90, 0, 100, 0, width);

    choices1and3x = map(5, 0, 100, 0, width);
    choicesWidth = map(42.5, 0, 100, 0, width);
    
    backX = map(5, 0, 100, 0, width);
    backNextWidth = map(40, 0, 100, 0, width);

    questionSize = 2*startText.size;
  }

  questionY = map(5, 0, 100, 0, height);
  questionHeight = map(25, 0, 100, 0, height);

  choices2and4x = map(52.5, 0, 100, 0, width);

  choices1and2y = map(35, 0, 100, 0, height);
  choices3and4y = map(62.5, 0, 100, 0, height);
  choicesHeight = map(22.5, 0, 100, 0, height);

  nextX = map(55, 0, 100, 0, width);

  backNextY = map(90, 0, 100, 0, height);
  backNextHeight = map(7.5, 0, 100, 0, height);

  lower = map(0.5, 0, 100, 0, height);

  questionsArray.splice(0, questionsArray.length);
  createQuestions();
}

function draw() {
  background("whitesmoke");
  start();

  if (questionScreen !== "Start") {
    questions();
  }
}

class Question {
  constructor() {
    this.questionX = questionX;
    this.questionWidth = questionWidth;

    this.choices1and3x = choices1and3x;
    this.choicesWidth = choicesWidth;

    this.backX = backX;
    this.backNextWidth = backNextWidth;

    this.questionY = questionY;
    this.questionHeight = questionHeight;

    this.choices2and4x = choices2and4x;

    this.choices1and2y = choices1and2y;
    this.choices3and4y = choices3and4y;
    this.choicesHeight = choicesHeight;

    this.nextX = nextX;

    this.backNextY = backNextY;
    this.backNextHeight = backNextHeight;

    this.lower = lower;

    this.questionSize = questionSize;
  }

  questionRect(questionText) {
    noStroke();
    fill(colours);
    textSize(this.questionSize);
    rect(this.questionX, this.questionY, this.questionWidth, this.questionHeight);
    
    fill("white");
    text(questionText, this.questionX, this.questionY + this.lower, this.questionWidth, this.questionHeight);
  }

  choice1(choice1text) {
    if (choice2selected || choice3selected || choice4selected) {
      fill(180);
    }

    else {
      fill(colours);
    }

    rect(this.choices1and3x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice1text, this.choices1and3x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice2(choice2text) {
    if (choice1selected || choice3selected || choice4selected) {
      fill(180);
    }

    else {
      fill(colours);
    }

    rect(this.choices2and4x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice2text, this.choices2and4x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice3(choice3text) {
    if (choice1selected || choice2selected || choice4selected) {
      fill(180);
    }

    else {
      fill(colours);
    }

    rect(this.choices1and3x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice3text, this.choices1and3x, this.choices3and4y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice4(choice4text) {
    if (choice1selected || choice2selected || choice3selected) {
      fill(180);
    }

    else {
      fill(colours);
    }

    rect(this.choices2and4x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice4text, this.choices2and4x, this.choices3and4y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  back() {
    stroke("black");

    if (mouseX >= this.backX && mouseX <= this.backX + this.backNextWidth && mouseY >= this.backNextY && mouseY <= this.backNextY + this.backNextHeight) {
      fill("black");
      rect(this.backX, this.backNextY, this.backNextWidth, this.backNextHeight);
      fill("white");
    }

    else {
      fill("white");
      rect(this.backX, this.backNextY, this.backNextWidth, this.backNextHeight);
      fill("black");
    }

    noStroke();
    text("BACK", this.backX, this.backNextY + this.lower, this.backNextWidth, this.backNextHeight);
  }

  next() {
    stroke("black");

    if (mouseX >= this.nextX && mouseX <= this.nextX + this.backNextWidth && mouseY >= this.backNextY && mouseY <= this.backNextY + this.backNextHeight && (choice1selected || choice2selected || choice3selected || choice4selected)) {
      fill("black");
      rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
      fill("white");
    }

    else {
      fill("white");
      rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
      fill("black");
    }

    noStroke();
    text("NEXT", this.nextX, this.backNextY + this.lower, this.backNextWidth, this.backNextHeight);
  }

  choiceSelected() {
    if (questionScreen !== "Start") {
      if (mouseX >= this.choices1and3x && mouseX <= this.choices1and3x + this.choicesWidth && mouseY >= this.choices1and2y && mouseY <= this.choices1and2y + this.choicesHeight) {
        choice1selected = true;
        choice2selected = false;
        choice3selected = false;
        choice4selected = false;
      }
  
      else if (mouseX >= this.choices2and4x && mouseX <= this.choices2and4x + this.choicesWidth && mouseY >= this.choices1and2y && mouseY <= this.choices1and2y + this.choicesHeight) {
        choice1selected = false;
        choice2selected = true;
        choice3selected = false;
        choice4selected = false;
      }
  
      else if (mouseX >= this.choices1and3x && mouseX <= this.choices1and3x + this.choicesWidth && mouseY >= this.choices3and4y && mouseY <= this.choices3and4y + this.choicesHeight) {
        choice1selected = false;
        choice2selected = false;
        choice3selected = true;
        choice4selected = false;
      }
  
      else if (mouseX >= this.choices2and4x && mouseX <= this.choices2and4x + this.choicesWidth && mouseY >= this.choices3and4y && mouseY <= this.choices3and4y + this.choicesHeight) {
        choice1selected = false;
        choice2selected = false;
        choice3selected = false;
        choice4selected = true;
      }

      else {
        choice1selected = false;
        choice2selected = false;
        choice3selected = false;
        choice4selected = false;
      }
    }
  }
}

function mousePressed() {
  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h && questionScreen === "Start") {
    questionScreen = 1;
  }

  for (let currentQuestion of questionsArray) {
    currentQuestion.choiceSelected();
  }
}

function start() {
  textAlign(CENTER, CENTER);
  textSize(startText.size);
  
  // clean up
  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h) {
    fill("black");
    text(startText.description, startText.x, startText.y, startText.w, startText.h);
    stroke("black");
    rect(startRect.x, startRect.y, startRect.w, startRect.h);
    noStroke();
    fill("white");
    text(startText.button, startRect.x, startText.lower, startRect.w, startRect.h);
  }

  else {
    fill("white");
    stroke("black");
    rect(startRect.x, startRect.y, startRect.w, startRect.h);
    noStroke();
    fill("black");
    text(startText.description, startText.x, startText.y, startText.w, startText.h);
    text(startText.button, startRect.x, startText.lower, startRect.w, startRect.h);
  }

  // cleaned-up version may start like this:
  // fill("black");
  // text(startText.description, startText.x, startText.y, startText.w, startText.h);
  // stroke("black");

  // if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h) {
  //   rect(startRect.x, startRect.y, startRect.w, startRect.h);
  // }
}

function createQuestions() {
  for (let i = 0; i < 20; i++) {
    question = new Question;
    questionsArray.push(question);
  }
}

function questions() {
  clear();
  
  question.questionRect("Which is your favourite genre of music?");
  question.choice1("G");
  question.choice2("A");
  question.choice3("B");
  question.choice4("E");
  question.back();
  question.next();
}