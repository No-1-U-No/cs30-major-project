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

  clear();
  questionsArray.splice(0, questionsArray.length);
  createQuestions();
  questions();

  if (choice1selected) {
    question.choice1selected();
  }
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

  questionRect() {
    noStroke();
    textSize(this.questionSize);
    rect(this.questionX, this.questionY, this.questionWidth, this.questionHeight);
  }

  choice1rect() {
    rect(this.choices1and3x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
  }

  choice2rect() {
    rect(this.choices2and4x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
  }

  choice3rect() {
    rect(this.choices1and3x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
  }

  choice4rect() {
    rect(this.choices2and4x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
  }

  backRect() {
    noFill();
    stroke("black");
    rect(this.backX, this.backNextY, this.backNextWidth, this.backNextHeight);
  }

  nextRect() {
    // needs modifying
    // if (mouseX >= this.nextX && mouseX <= this.nextX + this.backNextWidth && mouseY >= this.backNextY && mouseY <= this.backNextY + this.backNextHeight && (choice1selected || choice2selected || choice3selected || choice4selected)) {
    //   fill("black");
    //   this.nextRect();
    //   fill("white");
    //   this.nextText();
    // }

    rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
  }

  questionText(someText) {
    noStroke();
    fill("white");
    text(someText, this.questionX, this.questionY + this.lower, this.questionWidth, this.questionHeight);
  }

  choice1text() {
    text(choices[0], this.choices1and3x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice2text() {
    text(choices[1], this.choices2and4x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice3text() {
    text(choices[2], this.choices1and3x, this.choices3and4y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice4text() {
    text(choices[3], this.choices2and4x, this.choices3and4y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  backText() {
    fill("black");
    text("BACK", this.backX, this.backNextY + this.lower, this.backNextWidth, this.backNextHeight);
  }

  nextText() {
    text("NEXT", this.nextX, this.backNextY + this.lower, this.backNextWidth, this.backNextHeight);
  }

  choice1selected() {
    if (mouseX >= this.choices1and3x && mouseX <= this.choices1and3x + this.choicesWidth && mouseY >= this.choices1and2y && mouseY <= this.choices1and2y + this.choicesHeight) {
      choice1selected = true;
    }

    if (choice1selected) {
      noStroke();
      fill(200);
      this.choice2rect();
      this.choice3rect();
      this.choice4rect();

      fill("white");
      textSize(this.questionSize);
      this.choice2text(choices[1]);
      this.choice3text(choices[2]);
      this.choice4text(choices[3]);

      strokeWeight(5);
      stroke("black");
      this.nextRect();

      noStroke();
      fill("black");
      this.nextText();
    }
  }
}

function mousePressed() {
  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h && questionScreen === "Start") {
    questionScreen = 1;
  }

  // needs modifying
  if (questionScreen !== "Start") {
    for (let currentQuestion of questionsArray) {
      currentQuestion.choice1selected();
    }
  }
}

function start() {
  textAlign(CENTER, CENTER);
  textSize(startText.size);
  
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
}

function createQuestions() {
  for (let i = 0; i < 20; i++) {
    question = new Question;
    questionsArray.push(question);
  }
}

function questions() {
  clear();
  fill(colours);
  choices = ["G", "A", "B", "E"];
  
  question.questionRect();
  question.choice1rect();
  question.choice2rect();
  question.choice3rect();
  question.choice4rect();
  question.backRect();
  question.nextRect();
  
  question.questionText("Which is your favourite genre of music?");
  question.choice1text(choices[0]);
  question.choice2text(choices[1]);
  question.choice3text(choices[2]);
  question.choice4text(choices[3]);
  question.backText();
  question.nextText();
}