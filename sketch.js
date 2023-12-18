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

let questionList = ["Which of these is your favourite genre of music?", "Question 2", "Question 3", "Question 4"];
let choice1list = ["Pop, rock, indie or alternative", "A", "B", "E"];
let choice2list = ["Hip-hop, rap, R&B or soul", "B", "E", "G"];
let choice3list = ["Dance", "E", "G", "A"];
let choice4list = ["Country", "G", "A", "B"];

let question1songs = [["'Daylight' by Shinedown", "'Anti-Hero' by Taylor Swift", "'Flowers' by Miley Cyrus", "'Run Away to Mars' by TALK", "'Dial Drunk' by Noah Kahan & Post Malone"], ["'Creepin' by Metro Boomin, The Weeknd & 21 Savage", "'Kill Bill' by SZA", "'Players' by Coi Leray", "'Sure Thing' by Miguel", "'Paint The Town Red' by Doja Cat"], ["'I'm Good (Blue)' by David Guetta & Bebe Rexha'", "'Whitney' by Rêve", "'Bloody Mary' by Lady Gaga", "'TRUSTFALL' by P!nk", "'Next To You' by Loud Luxury & DVBBS ft. Kane Brown"], ["'Take My Name' by Parmalee", "'Thank God' by Kane Brown & Katelyn Brown", "'Last Night' by Morgan Wallen", "'Fast Car' by Luke Combs", "'Need A Favor' by Jelly Roll"]]

let choice1songs = [question1songs[0]];
let choice2songs = [question1songs[1]];
let choice3songs = [question1songs[2]];
let choice4songs = [question1songs[3]];
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

let total1selected = 0;
let total2selected = 0;
let total3selected = 0;
let total4selected = 0;

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

    backNextSize = 2*startText.size;
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
  
  mobile();
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

    backNextSize = 2*startText.size;
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

  mobile();
  
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

  question(questionText) {
    noStroke();
    fill(colours[questionScreen-1]);
    textSize((questionWidth + questionHeight)/15);
    
    rect(this.questionX, this.questionY, this.questionWidth, this.questionHeight);
    fill("white");
    text(questionText, this.questionX, this.questionY + this.lower, this.questionWidth, this.questionHeight);
  }

  choice1(choice1text) {
    fill(colours[questionScreen-1]);
    textSize((choicesWidth + choicesHeight)/15);

    if (choice2selected || choice3selected || choice4selected) {
      fill(180);
    }

    rect(this.choices1and3x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice1text, this.choices1and3x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice2(choice2text) {
    fill(colours[questionScreen-1]);

    if (choice1selected || choice3selected || choice4selected) {
      fill(180);
    }

    rect(this.choices2and4x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice2text, this.choices2and4x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice3(choice3text) {
    fill(colours[questionScreen-1]);

    if (choice1selected || choice2selected || choice4selected) {
      fill(180);
    }

    rect(this.choices1and3x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice3text, this.choices1and3x, this.choices3and4y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice4(choice4text) {
    fill(colours[questionScreen-1]);

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

    // even though they look the same, this keeps the rectangle from staying black on mobile after clicking once
    if (mobile()) {
      if (touches.length > 0) {
        if (touches[touches.length-1].x >= this.backX && touches[touches.length-1].x <= this.backX + this.backNextWidth && touches[touches.length-1].y >= this.backNextY && touches[touches.length-1].y <= this.backNextY + this.backNextHeight) {
          fill("black");
          rect(this.backX, this.backNextY, this.backNextWidth, this.backNextHeight);
          fill("white");
        }
  
        else {
          fill("white");
          rect(this.backX, this.backNextY, this.backNextWidth, this.backNextHeight);
          fill("black");
        }
      }

      else {
        fill("white");
        rect(this.backX, this.backNextY, this.backNextWidth, this.backNextHeight);
        fill("black");
      }
    }

    else {
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
    }

    noStroke();
    text("BACK", this.backX, this.backNextY + this.lower, this.backNextWidth, this.backNextHeight);
  }

  next() {
    stroke("black");

    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
    if (mobile()) {
      if (touches.length > 0) {
        if (touches[touches.length-1].x >= this.nextX && touches[touches.length-1].x <= this.nextX + this.backNextWidth && touches[touches.length-1].y >= this.backNextY && touches[touches.length-1].y <= this.backNextY + this.backNextHeight && !(choice1selected || choice2selected || choice3selected || choice4selected)) {
          fill("black");
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
    if (total1selected > 0) {
      total1selected--;
    }

    else if (total2selected > 0) {
      total2selected--;
    }

    else if (total3selected > 0) {
      total3selected--;
    }

    else if (total4selected > 0) {
      total4selected--;
    }

    questionScreen--;
  }

  if (mouseX >= question.nextX && mouseX <= question.nextX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0 && (choice1selected || choice2selected || choice3selected || choice4selected)) {
    if (choice1selected) {
      total1selected++;
    }
    
    else if (choice2selected) {
      total2selected++;
    }

    else if (choice3selected) {
      total3selected++;
    }

    else if (choice4selected) {
      total4selected++;
    }
    
    questionScreen++;
  }

  if (mouseX >= question.nextX && mouseX <= question.nextX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0 && !(choice1selected || choice2selected || choice3selected || choice4selected) && !mobile()) {
    alert("Please select an option.");
  }

  if (questionScreen > 0) {
    for (let currentQuestion of questionsArray) {
      currentQuestion.choiceSelected();
    }
  }
}

function mouseReleased() {
  if (mouseX >= question.backX && mouseX <= question.backX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0 && mobile()) {
    questionScreen += 0.5;
  }
}

function mobile() {
  return /Android | BlackBerry | IE Mobile | iPad | iPhone | iPod | Linux | Opera Mini | webOS/i.test(navigator.userAgent);
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
  
  question.question(questionList[questionScreen-1]);
  question.choice1(choice1list[questionScreen-1]);
  question.choice2(choice2list[questionScreen-1]);
  question.choice3(choice3list[questionScreen-1]);
  question.choice4(choice4list[questionScreen-1]);
  question.back();
  question.next();
}