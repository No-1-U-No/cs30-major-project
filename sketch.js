// CS30 Major Project
// Gabe PausJenssen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Changes to proposal.md must be discussed with Mr. Schellenberg

let questionScreen = 0;

let questionsArray = [];

let colours = ["red", "blue", "green", "purple"];

let questionsList = ["Which of these is your favourite genre of music?", "Question 2", "Question 3", "Question 4"];
let choice1list = ["G", "A", "B", "E"];
let choice2list = ["A", "B", "E", "G"];
let choice3list = ["B", "E", "G", "A"];
let chocie4list = ["E", "G", "A", "B"];

let choice1songs = [["G", "A"], ["B, E"]];
let choice2songs = ["B", "E"];
let choice3songs = ["G", "A"];
let choice4songs = ["B", "E"];
let songs = [choice1songs, choice2songs, choice3songs, choice4songs]; //possibly incorporate 2D array here???

let startText;

let question;

let questionX, questionY, questionWidth, questionHeight;

let choices1and3x, choices2and4x;
let choices1and2y, choices3and4y;
let choicesWidth, choicesHeight;

let backX, nextX;
let backNextY, backNextWidth, backNextHeight;
let backNextSize;

let lower;

let choice1selected, choice2selected, choice3selected, choice4selected;

function setup() {
  createCanvas(windowWidth, windowHeight);

  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,
    size: map(5, 0, 100, 0, width),
    description: "Welcome! This quiz will tell you what 2023 song is your jam. Have fun! Press Enter to begin.",
    lower: map(75.5, 0, 100, 0, height),
  };

  if (width > height) {
    questionX = map(25, 0, 100, 0, width);
    questionWidth = map(50, 0, 100, 0, width);

    choices1and3x = map(25, 0, 100, 0, width);
    choicesWidth = map(22.5, 0, 100, 0, width);

    backX = map(25, 0, 100, 0, width);
    backNextWidth = map(20, 0, 100, 0, width);

    backNextSize = 0.75*startText.size;
  }

  else {
    questionX = map(5, 0, 100, 0, width);
    questionWidth = map(90, 0, 100, 0, width);

    choices1and3x = map(5, 0, 100, 0, width);
    choicesWidth = map(42.5, 0, 100, 0, width);
    
    backX = map(5, 0, 100, 0, width);
    backNextWidth = map(40, 0, 100, 0, width);

    backNextSize = 1.5*startText.size;
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
  backNextSize = 0.75*startText.size;

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
    description: "Welcome! This quiz will tell you what 2023 song is your jam. Have fun! Press Enter to begin.",
    lower: map(75.5, 0, 100, 0, height),
  };

  if (width > height) {
    questionX = map(25, 0, 100, 0, width);
    questionWidth = map(50, 0, 100, 0, width);

    choices1and3x = map(25, 0, 100, 0, width);
    choicesWidth = map(22.5, 0, 100, 0, width);

    backX = map(25, 0, 100, 0, width);
    backNextWidth = map(20, 0, 100, 0, width);

    backNextSize = 0.75*startText.size;
  }

  else {
    questionX = map(5, 0, 100, 0, width);
    questionWidth = map(90, 0, 100, 0, width);

    choices1and3x = map(5, 0, 100, 0, width);
    choicesWidth = map(42.5, 0, 100, 0, width);
    
    backX = map(5, 0, 100, 0, width);
    backNextWidth = map(40, 0, 100, 0, width);

    backNextSize = 1.5*startText.size;
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

  if (questionScreen > 0) {
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
    
    this.backNextSize = backNextSize;
  }

  questionRect(questionText) {
    noStroke();
    fill(colours[questionScreen-1]);
    textSize(100 - questionText.length);
    rect(this.questionX, this.questionY, this.questionWidth, this.questionHeight);
    
    fill("white");
    text(questionText, this.questionX, this.questionY + this.lower, this.questionWidth, this.questionHeight);
  }

  choice1(choice1text) {
    fill(colours[questionScreen-1]);
    textSize(75 - choice1text.length);

    if (choice2selected || choice3selected || choice4selected) {
      fill(180);
    }

    rect(this.choices1and3x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice1text, this.choices1and3x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice2(choice2text) {
    fill(colours[questionScreen-1]);
    textSize(75 - choice2text.length);
    
    if (choice1selected || choice3selected || choice4selected) {
      fill(180);
    }

    rect(this.choices2and4x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice2text, this.choices2and4x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice3(choice3text) {
    fill(colours[questionScreen-1]);
    textSize(75 - choice3text.length);
    
    if (choice1selected || choice2selected || choice4selected) {
      fill(180);
    }

    rect(this.choices1and3x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice3text, this.choices1and3x, this.choices3and4y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice4(choice4text) {
    fill(colours[questionScreen-1]);
    textSize(75 - choice4text.length);

    if (choice1selected || choice2selected || choice3selected) {
      fill(180);
    }

    rect(this.choices2and4x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice4text, this.choices2and4x, this.choices3and4y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  back() {
    textSize(this.backNextSize);
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
    //need to work around here for mobile friendliness
    stroke("black");

    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
    // Detects if on mobile, but I read that it may get discontinued soon?
    // Need to change to detect touches x and y inside array
    if (/Android | BlackBerry | IE Mobile | iPad | iPhone | iPod | Linux | Opera Mini | webOS/i.test(navigator.userAgent)) {
      if (touches.length > 0 && (choice1selected || choice2selected || choice3selected || choice4selected)) {
        fill("black");
        rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
        fill("white");
      }

      else if (touches.length > 0 && !(choice1selected || choice2selected || choice3selected || choice4selected)) {
        fill("red");
        rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
        fill("white");
      }

      else {
        fill("white");
        rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
        fill("black");
      }
    }
    
    else {
      if (mouseX >= this.nextX && mouseX <= this.nextX + this.backNextWidth && mouseY >= this.backNextY && mouseY <= this.backNextY + this.backNextHeight && (choice1selected || choice2selected || choice3selected || choice4selected)) {
        fill("black");
        rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
        fill("white");
      }
  
      else if (mouseX >= this.nextX && mouseX <= this.nextX + this.backNextWidth && mouseY >= this.backNextY && mouseY <= this.backNextY + this.backNextHeight && !(choice1selected || choice2selected || choice3selected || choice4selected)) {
        if (mouseIsPressed) {
          fill("red");
        }
  
        rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
        fill("white");
      }
  
      else {
        fill("white");
        rect(this.nextX, this.backNextY, this.backNextWidth, this.backNextHeight);
        fill("black");
      }
    }
    
    noStroke();
    text("NEXT", this.nextX, this.backNextY + this.lower, this.backNextWidth, this.backNextHeight);
  }

  choiceSelected() {
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

function keyPressed() {
  if (keyCode === ENTER && questionScreen === 0) {
    questionScreen++;
  }
}

function mousePressed() {
  if (mouseX >= question.backX && mouseX <= question.backX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0) {
    questionScreen--;
  }

  if (mouseX >= question.nextX && mouseX <= question.nextX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0 & (choice1selected || choice2selected || choice3selected || choice4selected)) {
    questionScreen++;
  }

  if (questionScreen > 0) {
    for (let currentQuestion of questionsArray) {
      currentQuestion.choiceSelected();
    }
  }
}

function start() {
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(startText.size);
  text(startText.description, startText.x, startText.y, startText.w, startText.h);
}

function createQuestions() {
  for (let i = 0; i < 20; i++) {
    question = new Question;
    questionsArray.push(question);
  }
}

function questions() {
  clear();
  
  question.questionRect(questionsList[questionScreen-1]);
  question.choice1(choice1list[questionScreen-1]);
  question.choice2(choice2list[questionScreen-1]);
  question.choice3(choice3list[questionScreen-1]);
  question.choice4(chocie4list[questionScreen-1]);
  question.back();
  question.next();
}