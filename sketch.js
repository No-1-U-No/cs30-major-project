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
    this.space = map(2.5, 0, 100, 0, width);

    this.questionX = width/4;
    this.questionY = map(5, 0, 100, 0, height);
    this.questionWidth = width/2;
    this.questionHeight = height/4;

    this.choices1and3x = width/4;
    this.choices2and4x = width/2 + map(2.5, 0, 100, 0, width);

    this.choices1and2y = height/4 + 2*map(2.5, 0, 100, 0, width);
    this.choices3and4y = 3*height/8 + 3*map(2.5, 0, 100, 0, width);

    this.choicesWidth = width/4 - map(2.5, 0, 100, 0, width);
    this.choicesHeight = height/8;

    this.backX = width/4;
    this.nextX = width/2 + 2*map(2.5, 0, 100, 0, width);

    this.backNextY = map(90, 0, 100, 0, height);
    this.backNextWidth = width/5;
    this.backNextHeight = height/16;
  }

  question() {
    noStroke();
    rect(this.questionX, this.questionY, this.questionWidth, this.questionHeight);
  }

  choice1() {
    rect(this.choices1and3x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
  }

  choice2() {
    rect(this.choices2and4x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
  }

  choice3() {
    rect(this.choices1and3x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
  }

  choice4() {
    rect(this.choices2and4x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
  }

  back() {
    fill("black");
    rect(this.backX, this.backNextY, this.backNextWidth, this.backNextHeight);
  }

  next() {
    rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
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
    lower: 0.75*height + height/200,
    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    button: "START",
  };

  startRect = {
    x: width/2 - map(30, 0, 100, 0, width)/2,
    y: 0.75*height,
    w: map(30, 0, 100, 0, width),
    h: height/10,
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
    lower: 0.75*height + height/200,
    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    button: "START",
  };

  startRect = {
    x: width/2 - map(30, 0, 100, 0, width)/2,
    y: 0.75*height,
    w: map(30, 0, 100, 0, width),
    h: height/10,
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
  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h) {
    questionScreen = 1;
  }
}

function start() {
  let startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,

    size: map(5, 0, 100, 0, width),
    lower: 0.75*height + height/200,
    description: "Welcome! After answering these questions, I will tell you what 2023 song is your jam! Have fun!",
    button: "START",
  };

  let startRect = {
    x: width/2 - map(30, 0, 100, 0, width)/2,
    y: 0.75*height,
    w: map(30, 0, 100, 0, width),
    h: height/10,
  };

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
  
  firstQuestion.question();
  firstQuestion.choice1();
  firstQuestion.choice2();
  firstQuestion.choice3();
  firstQuestion.choice4();
  firstQuestion.back();
  firstQuestion.next();
}

function questions() {
  question1();
}