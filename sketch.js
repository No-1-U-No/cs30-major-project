// CS30 Major Project
// Gabe PausJenssen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Changes to proposal.md must be discussed with Mr. Schellenberg

let question = "Start";

let songs = [];

let question1;

class Layout {
  constructor() {
    this.questionX = width/4;
    this.questionY = map(5, 0, 100, 0, height);
    this.questionWidth = width/2;
    this.questionHeight = height/4;

    this.gap = map(2.5, 0, 100, 0, width);

    this.choicesWidth = width/4 - map(2.5, 0, 100, 0, width);
    this.choicesHeight = height/8;

    this.choices1and3x = width/4;
    this.choices2and4x = width/2 + map(2.5, 0, 100, 0, width);

    this.choices1and2y = height/4 + 2*map(2.5, 0, 100, 0, width);
    this.choices3and4y = height/4 + height/8 + 3*map(2.5, 0, 100, 0, width);

    this.choicesWidth = width/4 - map(2.5, 0, 100, 0, width);
    this.choicesHeight = height/8;
  }

  question() {
    noStroke();
    fill("red");
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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("whitesmoke");
  question1 = new Layout;
  question1.question();
  question1.choice1();
  question1.choice2();
  question1.choice3();
  question1.choice4();
}