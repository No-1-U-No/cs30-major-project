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

let startText;
let startRect;

class Question {
  constructor() {
    if (width > height) {
      this.questionX = map(25, 0, 100, 0, width);
      this.questionWidth = map(50, 0, 100, 0, width);

      this.choices1and3x = map(25, 0, 100, 0, width);
      this.choicesWidth = map(22.5, 0, 100, 0, width);

      this.backX = map(25, 0, 100, 0, width);
      this.backNextWidth = map(20, 0, 100, 0, width);
    }

    else {
      this.questionX = map(5, 0, 100, 0, width);
      this.questionWidth = map(90, 0, 100, 0, width);

      this.choices1and3x = map(5, 0, 100, 0, width);
      this.choicesWidth = map(42.5, 0, 100, 0, width);
      
      this.backX = map(5, 0, 100, 0, width);
      this.backNextWidth = map(40, 0, 100, 0, width);
    }

    this.questionY = map(5, 0, 100, 0, height);
    this.questionHeight = map(25, 0, 100, 0, height);

    this.choices2and4x = map(52.5, 0, 100, 0, width);

    this.choices1and2y = map(35, 0, 100, 0, height);
    this.choices3and4y = map(62.5, 0, 100, 0, height);
    this.choicesHeight = map(22.5, 0, 100, 0, height);

    this.nextX = map(55, 0, 100, 0, width);

    this.backNextY = map(90, 0, 100, 0, height);
    this.backNextHeight = map(7.5, 0, 100, 0, height);

    this.lower = map(0.5, 0, 100, 0, height);
  }

  questionRect() {
    noStroke();
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
    textSize(this.backNextHeight);
    text("BACK", this.backX, this.backNextY + this.lower, this.backNextWidth, this.backNextHeight);
  }

  nextText() {
    text("NEXT", this.nextX, this.backNextY + this.lower, this.backNextWidth, this.backNextHeight);
  }

  choice1selected() {
    if (mouseX >= this.choices1and3x && mouseX <= this.choices1and3x + this.choicesWidth && mouseY >= this.choices1and2y && mouseY <= this.choices1and2y + this.choicesHeight) {
      stroke(200);
      fill(200);
      this.choice2rect();
      this.choice3rect();
      this.choice4rect();

      fill("white");
      textSize(startText.buttonSize);
      this.choice2text(choices[1]);
      this.choice3text(choices[2]);
      this.choice4text(choices[3]);

      strokeWeight(5);
      stroke("black");
      this.nextRect();

      strokeWeight(1);
      fill("black");
      textSize(this.backNextHeight);
      this.nextText();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  colours = random(["red", "blue", "green", "purple"]);

  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,

    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    descriptionSize: map(5, 0, 100, 0, width),
    button: "START",
    buttonSize: map(10, 0, 100, 0, height),
    
    lower: map(75.5, 0, 100, 0, height),
  };

  startRect = {
    x: map(35, 0, 100, 0, width),
    y: map(75, 0, 100, 0, height),
    w: map(30, 0, 100, 0, width),
    h: map(10, 0, 100, 0, height),
  };

  createQuestions();
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);

  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,

    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    descriptionSize: map(5, 0, 100, 0, width),
    button: "START",
    buttonSize: map(10, 0, 100, 0, height),
    
    lower: map(75.5, 0, 100, 0, height),
  };

  startRect = {
    x: map(35, 0, 100, 0, width),
    y: map(75, 0, 100, 0, height),
    w: map(30, 0, 100, 0, width),
    h: map(10, 0, 100, 0, height),
  };
}

function draw() {
  background("whitesmoke");
  start();

  if (questionScreen !== "Start") {
    questions();
  }
}

function mousePressed() {
  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h && questionScreen === "Start") {
    questionScreen = 1;
  }

  // needs modifying
  for (let item of questionsArray) {
    item.choice1selected();
    noLoop();
  }
}

function start() {
  textAlign(CENTER, CENTER);
  textSize(startText.descriptionSize);

  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h) {
    fill("black");
    text(startText.description, startText.x, startText.y, startText.w, startText.h);
    rect(startRect.x, startRect.y, startRect.w, startRect.h);
    fill("white");
    textSize(startText.buttonSize);
    text(startText.button, startRect.x, startText.lower, startRect.w, startRect.h);
  }

  else {
    fill("white");
    rect(startRect.x, startRect.y, startRect.w, startRect.h);
    fill("black");
    text(startText.description, startText.x, startText.y, startText.w, startText.h);
    textSize(startText.buttonSize);
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