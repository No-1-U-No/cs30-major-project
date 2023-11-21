// CS30 Major Project
// Gabe PausJenssen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Changes to proposal.md must be discussed with Mr. Schellenberg

class Layout {
  constructor() {
    this.questionX = width/2 - this.size;
    this.questionY = height/2 - this.size;
    this.size = map(50, 0, 100, 0, width);
  }

  question() {
    square(this.x, this.y, this.size);
  }
}

let songs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function question1() {
  
}