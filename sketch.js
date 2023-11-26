// CS30 Major Project
// Gabe PausJenssen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Changes to proposal.md must be discussed with Mr. Schellenberg

let questionScreen = "Start";
let colours = ["red", "blue", "green", "purple"];
let songs = [];

let startText;
let startRect;

let firstQuestion;

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
    text(someText, this.questionX, this.questionY, this.questionWidth, this.questionHeight);
  }

  choice1text(someText) {
    text(someText, this.choices1and3x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
  }

  choice2text(someText) {
    text(someText, this.choices2and4x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
  }

  choice3text(someText) {
    text(someText, this.choices1and3x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
  }

  choice4text(someText) {
    text(someText, this.choices2and4x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
  }

  backText() {
    fill("black");
    text("BACK", this.backX, this.backNextY, this.backNextWidth, this.backNextHeight);
  }

  nextText() {
    text("NEXT", this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,

    size: map(5, 0, 100, 0, width),
    lower: map(75.5, 0, 100, 0, height),
    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    button: "START",
  };

  startRect = {
    x: map(35, 0, 100, 0, width),
    y: map(75, 0, 100, 0, height),
    w: map(30, 0, 100, 0, width),
    h: map(10, 0, 100, 0, height),
  };
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);

  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,

    size: map(5, 0, 100, 0, width),
    lower: map(75.5, 0, 100, 0, height),
    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    button: "START",
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
}

function start() {
  textAlign(CENTER, CENTER);
  textSize(startText.size);

  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h) {
    fill("black");
    text(startText.description, startText.x, startText.y, startText.w, startText.h);
    rect(startRect.x, startRect.y, startRect.w, startRect.h);
    fill("white");
    text(startText.button, startRect.x, startText.lower, startRect.w, startRect.h);
  }

  else {
    fill("white");
    rect(startRect.x, startRect.y, startRect.w, startRect.h);
    fill("black");
    text(startText.description, startText.x, startText.y, startText.w, startText.h);
    text(startText.button, startRect.x, startText.lower, startRect.w, startRect.h);
  }
}

function question1() {
  clear();
  let firstQuestion = new Question;
  fill(colours[0]);
  
  firstQuestion.questionRect();
  firstQuestion.choice1rect();
  firstQuestion.choice2rect();
  firstQuestion.choice3rect();
  firstQuestion.choice4rect();
  firstQuestion.backRect();
  firstQuestion.nextRect();
  
  firstQuestion.questionText("Which is your favourite genre of music?");
  firstQuestion.choice1text("YO");
  firstQuestion.choice2text("YO");
  firstQuestion.choice3text("YO");
  firstQuestion.choice4text("YO");
  firstQuestion.backText();
  firstQuestion.nextText();
}

function questions() {
  question1();
}