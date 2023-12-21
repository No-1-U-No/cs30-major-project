// CS30 Major Project
// Gabe PausJenssen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Changes to proposal.md must be discussed with Mr. Schellenberg

let questionScreen = 0;
let colours = ["red", "blue", "green", "purple"];

let questionList = ["Which of these is your favourite genre of music?", "Which kind of love song is your favourite?", "How did you feel after your last breakup?", "How do you like to listen to music?", "Which is your favourite Midnights song?", `Which is your favourite ${"Midnights".italics()} song?`];
let choice1list = ["Pop, rock, indie or alternative", "Songs about a significant other", "I accepted that we weren't meant to be", "Radio", "Anti-Hero"];
let choice2list = ["Hip-hop, rap, R&B or soul", "Songs about family and/or friends", "I wish we were still together", "Streaming", "Lavender Haze"];
let choice3list = ["Dance", "Self-love songs", "I was disappointed and upset", "Concerts and live performances", "Karma"];
let choice4list = ["Country", "Songs about someone who loves me when I don't love myself as much", "I've never had a breakup :)", "I don't really listen to music", "I prefer other Taylor Swift songs"];

let question1songs = [["'Daylight' by Shinedown", "'Anti-Hero' by Taylor Swift", "'Flowers' by Miley Cyrus", "'Run Away to Mars' by TALK", "'Dial Drunk' by Noah Kahan & Post Malone"], ["'Creepin' by Metro Boomin, The Weeknd & 21 Savage", "'Kill Bill' by SZA", "'Players' by Coi Leray", "'Sure Thing' by Miguel", "'Paint The Town Red' by Doja Cat"], ["'I'm Good (Blue)' by David Guetta & Bebe Rexha'", "'Whitney' by Rêve", "'Bloody Mary' by Lady Gaga", "'TRUSTFALL' by P!nk", "'Next To You' by Loud Luxury & DVBBS ft. Kane Brown"], ["'Take My Name' by Parmalee", "'Thank God' by Kane Brown & Katelyn Brown", "'Last Night' by Morgan Wallen", "'Fast Car' by Luke Combs", "'Need A Favor' by Jelly Roll"]];
let question2songs = [["'Flowers Need Rain' by Preston Pablo & Banx & Ranx", "'Until I Found You' by Stephen Sanchez", "'Take My Name' by Parmalee", "'Die For You' by The Weeknd", "'Thank God' by Kane Brown & Katelyn Brown'"], ["'I Like You (A Happier Song) by Post Malone & Doja Cat", "'How Do I Say Goodbye' by Dean Lewis", "'Waffle House' by Jonas Brothers", "'Fast Car' by Luke Combs", "'In The Stars' by Benson Boone"], ["'Victoria's Secret' by Jax", "'Made You Look' by Meghan Trainor", "'Who I Am' by Wyn Starks", "'Single Soon' by Selena Gomez", "'Keep Going Up' by Timbaland, Nelly Furtado & Justin Timberlake"], ["'Daylight' by Shinedown", "'Love Me Like I Am' by for KING & COUNTRY & Jordin Sparks", "'Nobody Gets Me' by SZA", "'Thank God I Do' by Lauren Daigle", "'Dial Drunk' by Noah Kahan & Post Malone"]];
let question3songs = [["'Seeing Someone Else' by Ingrid Andress", "'mine' by Kelly Clarkson", "'Wish You The Best' by Lewis Capaldi", "'I Don't Miss You' by JP Saxe", "'Single Soon' by Selena Gomez"], ["'Forget Me' by Lewis Capaldi", "'Love Again' by The Kid LAROI", "'Nobody Gets Me' by SZA", "'I'll Be Waiting' by Cian Ducrot", "'bad idea right?' by Olivia Rodrigo"], ["'Miss You' by Oliver Tree & Robin Schulz", "'Kill Bill' by SZA", "'Last Night' by Morgan Wallen", "'That's Not How This Works' by Charlie Puth ft. Dan + Shay", "'Jaded' by Miley Cyrus"], []];
let question4songs = [["'Forget Me' by Lewis Capaldi", "'Eyes Closed' by Ed Sheeran", "'A Symptom Of Being Human' by Shinedown", "'Waffle House' by Jonas Brothers", "'Mona Lisa' by Dominic Fike"], ["'Creepin' by Metro Boomin, The Weeknd & 21 Savage", "'Flowers' by Miley Cyrus", "'Kill Bill' by SZA", "'Escapism.' by RAYE & 070 Shake", "'Players' by Coi Leray"], ["'I'm Good (Blue)' by David Guetta & Bebe Rexha", "'Unholy' by Sam Smith & Kim Petras", "'Jaded' by Miley Cyrus", "'Cruel Summer' by Taylor Swift", "'vampire' by Olivia Rodrigo"], []];
let question5songs = [["'Anti-Hero' by Taylor Swift"], ["'Lavender Haze' by Taylor Swift"], ["'Karma' by Taylor Swift"], ["'Cruel Summer' by Taylor Swift", "'The Alcott' by The National ft. Taylor Swift", "'Is It Over Now?' by Taylor Swift"]];
let question6songs = [[], [], [], []];
let question7songs = [[], [], [], []];
let question8songs = [[], [], [], []];
let question9songs = [[], [], [], []];
let question10songs = [[], [], [], []];
let question11songs = [[], [], [], []];
let question12songs = [[], [], [], []];
let question13songs = [[], [], [], []];
let question14songs = [[], [], [], []];
let question15songs = [[], [], [], []];
let question16songs = [[], [], [], []];
let question17songs = [[], [], [], []];
let question18songs = [[], [], [], []];
let question19songs = [[], [], [], []];
let question20songs = [[], [], [], []];

let choice1songs = [question1songs[0], question2songs[0], question3songs[0], question4songs[0], question5songs[0], question6songs[0], question7songs[0], question8songs[0], question9songs[0], question10songs[0], question11songs[0], question12songs[0], question13songs[0], question14songs[0], question15songs[0], question16songs[0], question17songs[0], question18songs[0], question19songs[0], question20songs[0]];
let choice2songs = [question1songs[1], question2songs[1], question3songs[1], question4songs[1], question5songs[1], question6songs[1], question7songs[1], question8songs[1], question9songs[1], question10songs[1], question11songs[1], question12songs[1], question13songs[1], question14songs[1], question15songs[1], question16songs[1], question17songs[1], question18songs[1], question19songs[1], question20songs[1]];
let choice3songs = [question1songs[2], question2songs[2], question3songs[2], question4songs[2], question5songs[2], question6songs[2], question7songs[2], question8songs[2], question9songs[2], question10songs[2], question11songs[2], question12songs[2], question13songs[2], question14songs[2], question15songs[2], question16songs[2], question17songs[2], question18songs[2], question19songs[2], question20songs[2]];
let choice4songs = [question1songs[3], question2songs[3], question3songs[3], question4songs[3], question5songs[3], question6songs[3], question7songs[3], question8songs[3], question9songs[3], question10songs[3], question11songs[3], question12songs[3], question13songs[3], question14songs[3], question15songs[3], question16songs[3], question17songs[3], question18songs[3], question19songs[3], question20songs[3]];

let questionsArray = [];
let userChoices = [];

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
    console.log(total1selected, total2selected, total3selected, total4selected);
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
    textSize((questionWidth + questionHeight)/15);
    noStroke();
    
    if (questionScreen % 4 === 1) {
      fill(colours[0]);
    }

    else if (questionScreen % 4 === 2) {
      fill(colours[1]);
    }

    else if (questionScreen % 4 === 3) {
      fill(colours[2]);
    }

    else {
      fill(colours[3]);
    }
    
    rect(this.questionX, this.questionY, this.questionWidth, this.questionHeight);
    fill("white");
    text(questionText, this.questionX, this.questionY + this.lower, this.questionWidth, this.questionHeight);
  }

  choice1(choice1text) {
    textSize((choicesWidth + choicesHeight)/15);
    
    if (questionScreen % 4 === 1) {
      fill(colours[0]);
    }

    else if (questionScreen % 4 === 2) {
      fill(colours[1]);
    }

    else if (questionScreen % 4 === 3) {
      fill(colours[2]);
    }

    else {
      fill(colours[3]);
    }

    if (choice2selected || choice3selected || choice4selected) {
      fill(180);
    }

    rect(this.choices1and3x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice1text, this.choices1and3x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice2(choice2text) {
    
    if (questionScreen % 4 === 1) {
      fill(colours[0]);
    }

    else if (questionScreen % 4 === 2) {
      fill(colours[1]);
    }

    else if (questionScreen % 4 === 3) {
      fill(colours[2]);
    }

    else {
      fill(colours[3]);
    }

    if (choice1selected || choice3selected || choice4selected) {
      fill(180);
    }

    rect(this.choices2and4x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice2text, this.choices2and4x, this.choices1and2y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice3(choice3text) {
    
    if (questionScreen % 4 === 1) {
      fill(colours[0]);
    }

    else if (questionScreen % 4 === 2) {
      fill(colours[1]);
    }

    else if (questionScreen % 4 === 3) {
      fill(colours[2]);
    }

    else {
      fill(colours[3]);
    }

    if (choice1selected || choice2selected || choice4selected) {
      fill(180);
    }

    rect(this.choices1and3x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
    fill("white");
    text(choice3text, this.choices1and3x, this.choices3and4y + this.lower, this.choicesWidth, this.choicesHeight);
  }

  choice4(choice4text) {
    
    if (questionScreen % 4 === 1) {
      fill(colours[0]);
    }

    else if (questionScreen % 4 === 2) {
      fill(colours[1]);
    }

    else if (questionScreen % 4 === 3) {
      fill(colours[2]);
    }

    else {
      fill(colours[3]);
    }

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

  if (mouseX >= question.nextX && mouseX <= question.nextX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0) {
    if (choice1selected) {
      userChoices.push(choice1songs[questionScreen-1]);
      total1selected++;
      questionScreen++;
    }
    
    else if (choice2selected) {
      userChoices.push(choice2songs[questionScreen-1]);
      total2selected++;
      questionScreen++;
    }

    else if (choice3selected) {
      userChoices.push(choice3songs[questionScreen-1]);
      total3selected++;
      questionScreen++;
    }

    else if (choice4selected) {
      userChoices.push(choice4songs[questionScreen-1]);
      total4selected++;
      questionScreen++;
    }
    
    else if (!mobile()) {
      alert("Please select an option.");
    }
  }

  if (questionScreen > 0) {
    for (let currentQuestion of questionsArray) {
      currentQuestion.choiceSelected();
    }
  }
}

function mouseReleased() {
  if (mouseX >= question.backX && mouseX <= question.backX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0 && mobile()) {
    // following if statements incorrect
    if (choice1selected) {
      choice1selected += 0.5;
    }

    else if (choice2selected) {
      choice2selected += 0.5;
    }

    else if (choice3selected) {
      choice3selected += 0.5;
    }

    else if (choice4selected) {
      choice4selected += 0.5;
    }

    questionScreen += 0.5;
  }
}

function mobile() {
  return /Android | BlackBerry | CPU | IE Mobile | Intel | iPad | iPhone | iPod | Linux | Macintosh | Opera Mini | webOS/i.test(navigator.userAgent);
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