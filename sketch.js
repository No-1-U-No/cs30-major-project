// CS30 Major Project
// Gabe PausJenssen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Changes to proposal.md must be discussed with Mr. Schellenberg

let screenBrightness;
let questionScreen = "Start";
let colours = ["red", "blue", "green", "purple"];
let songs = [];

let firstQuestion;

class Layout {
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
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  preference();
}

function preference() {
  let screenBrightness = prompt("Do you want to take this quiz in light mode or dark mode?");

  if (screenBrightness === "l") {
    background("whitesmoke");
  }

  else {
    background(0);
  }
}

function question1() {
  let firstQuestion = new Layout;
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