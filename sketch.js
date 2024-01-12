// Capstone Coding Project
// Gabe PausJenssen
// January 16, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const TOTAL_QUESTIONS = 20;

let questionScreen = 0;
let mostSelected = 0;
let colours = ["red", "blue", "green", "purple"];

let questionList = ["How do you like to listen to music the most?", "When do you like to listen to music the most?", "What kind of instrument do you play?", "How do you feel about singing?", "Where do most of your favourite artists originate?", "Which decade of music is your favourite?", "Which of these is your favourite genre of music?", "Which of these is your favourite genre of music?", "Which movie soundtrack has the best songs?", "Which kind of love song is your favourite?", "How did you feel after your last breakup?", "What are your opinions on music and TikTok?", "Pick a Midnights song", "Pick a Harry's House song", "Pick a timeless song", "Pick a boy band", "Pick a Canadian superstar", "Which 2023 song do you find the most overplayed?", "Which of those songs can you not get enough of?", "Are you excited to see your result?"];
let choice1list = ["Radio", "Waking up in the morning", "Brass", "I love singing, and I can do it well!", "Canada", "'60s or '70s", "Pop or rock", "Hip-hop or rap", "Top Gun: Maverick", "Songs about a significant other", "I accepted that we weren't meant to be", "I'm all for TikTokers' songs!", "Anti-Hero", "As It Was", "\"Best of My Love\" by the Emotions", "BTS", "Avril Lavigne", "\"Creepin'\" by Metro Boomin, The Weeknd & 21 Savage", "Creepin'", "I need to see it asap!!!"];
let choice2list = ["Streaming", "Whenever I need a short break", "Chordophone", "I love singing, even though I kind of stink", "Nigeria", "'80s or '90s", "Indie or alternative", "R&B or soul", "Spider-Man: Across the Spider-Verse", "Songs about family and/or friends", "I wish we were still together", "I love seeing old songs go viral!", "Lavender Haze", "Late Night Talking", "\"Blue (Da Ba Dee)\" by Eiffel 65", "*NSYNC", "Justin Bieber", "\"Flowers\" by Miley Cyrus", "Flowers", "I'm so excited!"];
let choice3list = ["Concerts and live performances", "Whenever I need a positivity booster", "Percussion", "Sometimes I hate the way my voice sounds", "South Korea", "2000s or 2010s", "Dance or electronic", "Afrobeats", "Barbie", "Self-love songs", "I was disappointed and upset", "TikTok ruins songs", "Karma", "Satellite", "\"I Don't Wanna Know\" by Mario Winans ft. Enya & P. Diddy", "One Direction", "Shawn Mendes", "\"Kill Bill\" by SZA", "Kill Bill", "Yesss! Tell me the truth!"];
let choice4list = ["Movies", "Falling asleep at night", "Woodwind", "I'm better at rapping", "UK", "2020s", "Country", "K-Pop", "Trolls Band Together", "Songs about someone who loves me when I don't love myself as much", "I've never had a breakup :)", "I prefer organic hits", "I prefer indie Taylor", "Ehhh... I prefer Niall", "Don't know any of those, but I like older songs", "I much prefer girl groups", "The Weeknd", "\"Calm Down\" by Rema & Selena Gomez", "Calm Down", "I doubt it'll be correct, but sure"];

let question1songs = ["\"Forget Me\" by Lewis Capaldi", "\"Daylight\" by David Kushner", "\"Fast Car\" by Luke Combs", "\"Dance the Night\" by Dua Lipa"];
let question2songs = ["\"Unstoppable\" by Sia", "\"Lil Boo Thang\" by Paul Russell", "\"Flowers\" by Miley Cyrus", "\"Thank God I Do\" by Lauren Daigle"];
let question3songs = ["\"Lil Boo Thang\" by Paul Russell", "\"Thank God I Do\" by Lauren Daigle", "\"Kill Bill\" by SZA", "\"Lavender Haze\" by Taylor Swift"];
let question4songs = ["\"Dance the Night\" by Dua Lipa", "\"What the Hell Are We Dying For?\" by Shawn Mendes", "\"Jaded\" by Miley Cyrus", "\"Mona Lisa\" by Dominic Fike"];
let question5songs = ["\"Die for You\" by The Weeknd", "\"Calm Down\" by Rema & Selena Gomez", "\"Cupid\" by FIFTY FIFTY", "\"As It Was\" by Harry Styles"];
let question6songs = ["\"Until I Found You\" by Stephen Sanchez", "\"Forget Me\" by Lewis Capaldi", "\"Unstoppable\" by Sia", "\"Daylight\" by David Kushner"];
let question7songs = ["\"Jaded\" by Miley Cyrus", "\"The Alcott\" by The National ft. Taylor Swift", "\"I'm Good (Blue)\" by David Guetta & Bebe Rexha", "\"Fast Car\" by Luke Combs"];
let question8songs = ["\"Mona Lisa\" by Dominic Fike", "\"Kill Bill\" by SZA", "\"Calm Down\" by Rema & Selena Gomez", "\"Cupid\" by FIFTY FIFTY"];
let question9songs = ["\"I Ain't Worried\" by OneRepublic", "\"Mona Lisa\" by Dominic Fike", "\"Dance the Night\" by Dua Lipa", "\"Better Place\" by *NSYNC"];
let question10songs = ["\"Until I Found You\" by Stephen Sanchez", "\"Fast Car\" by Luke Combs", "\"I'm Good (Blue)\" by David Guetta & Bebe Rexha", "\"Thank God I Do\" by Lauren Daigle"];
let question11songs = ["\"Flowers\" by Miley Cyrus", "\"Forget Me\" by Lewis Capaldi", "\"What the Hell Are We Dying For?\" by Shawn Mendes", "\"Heaven\" by Niall Horan"];
let question12songs = ["\"Daylight\" by David Kushner", "\"Unstoppable\" by Sia", "\"Anti-Hero\" by Taylor Swift", "\"Heaven\" by Niall Horan"];
let question13songs = ["\"Anti-Hero\" by Taylor Swift", "\"Lavender Haze\" by Taylor Swift", "\"Karma\" by Taylor Swift", "\"The Alcott\" by The National ft. Taylor Swift"];
let question14songs = ["\"As It Was\" by Harry Styles", "\"Late Night Talking\" by Harry Styles", "\"Satellite\" by Harry Styles", "\"Heaven\" by Niall Horan"];
let question15songs = ["\"Lil Boo Thang\" by Paul Russell", "\"I'm Good (Blue)\" by David Guetta & Bebe Rexha", "\"Creepin'\" by Metro Boomin, The Weeknd & 21 Savage", "\"Lavender Haze\" by Taylor Swift"];
let question16songs = ["\"Seven\" by Jung Kook & Latto", "\"Better Place\" by *NSYNC", "\"As It Was\" by Harry Styles", "\"Cupid\" by FIFTY FIFTY"];
let question17songs = ["\"I'm a Mess\" by Avril Lavigne with YUNGBLUD", "\"Creepin'\" by Metro Boomin, The Weeknd & 21 Savage", "\"What the Hell Are We Dying For?\" by Shawn Mendes", "\"Die for You\" by The Weeknd"];
let question18songs = ["\"Die for You\" by The Weeknd", "\"Jaded\" by Miley Cyrus", "\"Karma\" by Taylor Swift", "\"Until I Found You\" by Stephen Sanchez"];
let question19songs = ["\"Creepin'\" by Metro Boomin, The Weeknd & 21 Savage", "\"Flowers\" by Miley Cyrus", "\"Kill Bill\" by SZA", "\"Calm Down\" by Rema & Selena Gomez"];
let question20songs = ["\"Karma\" by Taylor Swift", "\"Better Place\" by *NSYNC", "\"The Alcott\" by The National ft. Taylor Swift", "\"Anti-Hero\" by Taylor Swift"];

let choice1songs = [question1songs[0], question2songs[0], question3songs[0], question4songs[0], question5songs[0], question6songs[0], question7songs[0], question8songs[0], question9songs[0], question10songs[0], question11songs[0], question12songs[0], question13songs[0], question14songs[0], question15songs[0], question16songs[0], question17songs[0], question18songs[0], question19songs[0], question20songs[0]];
let choice2songs = [question1songs[1], question2songs[1], question3songs[1], question4songs[1], question5songs[1], question6songs[1], question7songs[1], question8songs[1], question9songs[1], question10songs[1], question11songs[1], question12songs[1], question13songs[1], question14songs[1], question15songs[1], question16songs[1], question17songs[1], question18songs[1], question19songs[1], question20songs[1]];
let choice3songs = [question1songs[2], question2songs[2], question3songs[2], question4songs[2], question5songs[2], question6songs[2], question7songs[2], question8songs[2], question9songs[2], question10songs[2], question11songs[2], question12songs[2], question13songs[2], question14songs[2], question15songs[2], question16songs[2], question17songs[2], question18songs[2], question19songs[2], question20songs[2]];
let choice4songs = [question1songs[3], question2songs[3], question3songs[3], question4songs[3], question5songs[3], question6songs[3], question7songs[3], question8songs[3], question9songs[3], question10songs[3], question11songs[3], question12songs[3], question13songs[3], question14songs[3], question15songs[3], question16songs[3], question17songs[3], question18songs[3], question19songs[3], question20songs[3]];

let questionsArray = [];
let choicesArray = [];
let choicesSelected = new Map();

let question;
let startText;
let questionX, questionY, questionWidth, questionHeight, questionSize;
let choices1and3x, choices2and4x, choices1and2y, choices3and4y, choicesWidth, choicesHeight, choicesSize;
let backX, nextX, backNextY, backNextWidth, backNextHeight, backNextSize;
let lowerText;
let choice1selected, choice2selected, choice3selected, choice4selected;
let ah, aiw, al, bp, cd, cr, cu, da, dfy, dtn, fc, fl, fm, he, igb, ja, ka, kb, lbt, lh, ml, tgid, uify, un, wthawdf;
let jam;
let topPercentage, leftPercentage, widthPercentage, heightPercentage;
let retakeRect;

function preload() {
  if (mobile()) {
    topPercentage = 30;
  }

  else {
    topPercentage = 35;
  }

  leftPercentage = 20;
  widthPercentage = 60;
  heightPercentage = 40;

  ah = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/0V3wPSX9ygBnCm8psDIegu" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  aiw = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/4Dvkj6JhhA12EX05fT7y2e" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  al = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/6INztpNwOTlfSKTuPo0HOP" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  bp = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/1bHnRc60O1N0l3PbHjaKyK" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  cd = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/0WtM2NBVQNNJLh6scP13H8" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  cr = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/2dHHgzDwk4BJdRwy9uXhTO" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  cu = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/7FbrGaHYVDmfr7KoLIZnQ7" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  da = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/1odExI7RdWc4BT515LTAwj" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  dfy = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/2Ch7LmS7r2Gy2kc64wv3Bz" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  dtn = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/11C4y2Yz1XbHmaQwO06s9f" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  fc = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/1Lo0QY9cvc8sUB2vnIOxDT" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  fl = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/7DSAEUvxU8FajXtRloy8M0" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  fm = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/3iHzKA9HlXf5wsGdsrsnSA" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  he = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/5FQ77Cl1ndljtwwImdtjMy" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  igb = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/4uUG5RXrOk84mYEfFvj3cK" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  ja = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/0LbZLBBZI1NfaDgb4dx0UD" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  ka = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/7KokYm8cMIXCsGVmUvKtqf" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  kb = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/3OHfY25tqY28d16oZczHc8" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  lbt = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/0cVyQfDyRnMJ0V3rjjdlU3" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  lh = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/5jQI2r1RdgtuT8S3iG8zFC" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  ml = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/37CoOXIsgF3NzbK1zHZetk" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  tgid = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/2rpZ2T8xOiDnn5VpYXvwIC" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  uify = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/0T5iIrXA4p5GsubkhuBIKV" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  un = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/1yvMUkIOTeUNtNWlWRgANS" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
  wthawdf = createDiv(`<iframe style="display: block; margin: auto; position: fixed; top: ${topPercentage}%; left: ${leftPercentage}%" src="https://open.spotify.com/embed/track/1sKtD5KMZgTFHbsxjgqfZh" width="${widthPercentage}%" height="${heightPercentage}%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`).hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,
    size: map(5, 0, 100, 0, width),
    text: "Welcome! This test will tell you what 2023 song is your jam. Have fun! Press Enter to begin.",
  };

  if (width > height) {
    questionX = map(25, 0, 100, 0, width);
    questionWidth = map(50, 0, 100, 0, width);

    choices1and3x = map(25, 0, 100, 0, width);
    choicesWidth = map(22.5, 0, 100, 0, width);

    backX = map(25, 0, 100, 0, width);
    backNextWidth = map(20, 0, 100, 0, width);
    backNextSize = 0.75*startText.size;

    retakeRect = {
      x: width/2 - map(30, 0, 100, 0, width)/2,
      y: 0.8*height,
      w: map(30, 0, 100, 0, width),
      h: height/10,
      size: map(6, 0, 100, 0, height),
      text: "Retake test?",
      lowerText: map(0.5, 0, 100, 0, height),
    };
  }

  else {
    questionX = map(5, 0, 100, 0, width);
    questionWidth = map(90, 0, 100, 0, width);

    choices1and3x = map(5, 0, 100, 0, width);
    choicesWidth = map(42.5, 0, 100, 0, width);
    
    backX = map(5, 0, 100, 0, width);
    backNextWidth = map(40, 0, 100, 0, width);
    backNextSize = 2*startText.size;

    retakeRect = {
      x: width/2 - map(60, 0, 100, 0, width)/2,
      y: 0.8*height,
      w: map(60, 0, 100, 0, width),
      h: height/10,
      size: map(4, 0, 100, 0, height),
      text: "Retake test?",
      lowerText: map(0.5, 0, 100, 0, height),
    };
  }

  questionY = map(5, 0, 100, 0, height);
  questionHeight = map(25, 0, 100, 0, height);
  questionSize = (questionWidth + questionHeight)/15;

  choices2and4x = map(52.5, 0, 100, 0, width);
  choices1and2y = map(35, 0, 100, 0, height);
  choices3and4y = map(62.5, 0, 100, 0, height);
  choicesHeight = map(22.5, 0, 100, 0, height);
  choicesSize = (choicesWidth + choicesHeight)/15;

  nextX = map(55, 0, 100, 0, width);
  backNextY = map(90, 0, 100, 0, height);
  backNextHeight = map(7.5, 0, 100, 0, height);

  lowerText = map(0.5, 0, 100, 0, height);
  
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
    text: "Welcome! This test will tell you what 2023 song is your jam. Have fun! Press Enter to begin.",
  };

  if (width > height) {
    questionX = map(25, 0, 100, 0, width);
    questionWidth = map(50, 0, 100, 0, width);

    choices1and3x = map(25, 0, 100, 0, width);
    choicesWidth = map(22.5, 0, 100, 0, width);

    backX = map(25, 0, 100, 0, width);
    backNextWidth = map(20, 0, 100, 0, width);
    backNextSize = 0.75*startText.size;

    retakeRect = {
      x: width/2 - map(30, 0, 100, 0, width)/2,
      y: 0.8*height,
      w: map(30, 0, 100, 0, width),
      h: height/10,
      size: map(6, 0, 100, 0, height),
      text: "Retake test?",
      lowerText: map(0.5, 0, 100, 0, height),
    };
  }

  else {
    questionX = map(5, 0, 100, 0, width);
    questionWidth = map(90, 0, 100, 0, width);

    choices1and3x = map(5, 0, 100, 0, width);
    choicesWidth = map(42.5, 0, 100, 0, width);
    
    backX = map(5, 0, 100, 0, width);
    backNextWidth = map(40, 0, 100, 0, width);
    backNextSize = 2*startText.size;

    retakeRect = {
      x: width/2 - map(60, 0, 100, 0, width)/2,
      y: 0.8*height,
      w: map(60, 0, 100, 0, width),
      h: height/10,
      size: map(4, 0, 100, 0, height),
      text: "Retake test?",
      lowerText: map(0.5, 0, 100, 0, height),
    };
  }

  questionY = map(5, 0, 100, 0, height);
  questionHeight = map(25, 0, 100, 0, height);
  questionSize = (questionWidth + questionHeight)/15;

  choices2and4x = map(52.5, 0, 100, 0, width);
  choices1and2y = map(35, 0, 100, 0, height);
  choices3and4y = map(62.5, 0, 100, 0, height);
  choicesHeight = map(22.5, 0, 100, 0, height);
  choicesSize = (choicesWidth + choicesHeight)/15;

  nextX = map(55, 0, 100, 0, width);
  backNextY = map(90, 0, 100, 0, height);
  backNextHeight = map(7.5, 0, 100, 0, height);

  lowerText = map(0.5, 0, 100, 0, height);

  mobile();
  
  questionsArray.splice(0);
  createQuestions();
}

function draw() {
  background("whitesmoke");
  questionScreen = Math.floor(abs(questionScreen));
  evenChoices();

  if (questionScreen === 0) {
    start();
  }

  else if (questionScreen > 0 && questionScreen <= TOTAL_QUESTIONS) {
    questions();
  }

  else {
    results();
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
    this.questionSize = questionSize;

    this.choices2and4x = choices2and4x;

    this.choices1and2y = choices1and2y;
    this.choices3and4y = choices3and4y;
    this.choicesHeight = choicesHeight;
    this.choicesSize = choicesSize;

    this.nextX = nextX;

    this.backNextY = backNextY;
    this.backNextHeight = backNextHeight;
    
    this.lowerText = lowerText;
    
    this.backNextSize = backNextSize;
  }

  question(questionText) {
    textSize(this.questionSize);
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
    text(questionText, this.questionX, this.questionY + this.lowerText, this.questionWidth, this.questionHeight);
  }

  choice1(choice1text) {
    textSize(this.choicesSize);
    
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
    text(choice1text, this.choices1and3x, this.choices1and2y + this.lowerText, this.choicesWidth, this.choicesHeight);
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
    text(choice2text, this.choices2and4x, this.choices1and2y + this.lowerText, this.choicesWidth, this.choicesHeight);
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
    text(choice3text, this.choices1and3x, this.choices3and4y + this.lowerText, this.choicesWidth, this.choicesHeight);
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
    text(choice4text, this.choices2and4x, this.choices3and4y + this.lowerText, this.choicesWidth, this.choicesHeight);
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
    text("BACK", this.backX, this.backNextY + this.lowerText, this.backNextWidth, this.backNextHeight);
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
    text("NEXT", this.nextX, this.backNextY + this.lowerText, this.backNextWidth, this.backNextHeight);
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
  if (mouseX >= question.backX && mouseX <= question.backX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0 && questionScreen <= TOTAL_QUESTIONS) {
    questionScreen--;

    if (choicesSelected.get(choicesArray[questionScreen-1]) > 1) {
      choicesSelected.set(choicesArray[questionScreen-1], choicesSelected.get(choicesArray[questionScreen-1]) - 1);
    }
    
    else {
      choicesSelected.delete(choicesArray[questionScreen-1]);
    }
    
    // ah.hide();
    // aiw.hide();
    // al.hide();
    // bp.hide();
    // cd.hide();
    // cr.hide();
    // cu.hide();
    // da.hide();
    // dfy.hide();
    // dtn.hide();
    // fc.hide();
    // fl.hide();
    // fm.hide();
    // he.hide();
    // igb.hide();
    // ja.hide();
    // ka.hide();
    // kb.hide();
    // lbt.hide();
    // lh.hide();
    // ml.hide();
    // tgid.hide();
    // uify.hide();
    // un.hide();
    // wthawdf.hide();
  }

  if (mouseX >= question.nextX && mouseX <= question.nextX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0 && questionScreen <= TOTAL_QUESTIONS) {
    if (choice1selected) {
      if (choicesSelected.has(choice1songs[questionScreen-1])) {
        choicesSelected.set(choice1songs[questionScreen-1], choicesSelected.get(choice1songs[questionScreen-1]) + 1);
      }

      else {
        choicesSelected.set(choice1songs[questionScreen-1], 1);
      }

      choicesArray.push(choice1songs[questionScreen-1]);
      questionScreen++;
    }
    
    else if (choice2selected) {
      if (choicesSelected.has(choice2songs[questionScreen-1])) {
        choicesSelected.set(choice2songs[questionScreen-1], choicesSelected.get(choice2songs[questionScreen-1]) + 1);
      }

      else {
        choicesSelected.set(choice2songs[questionScreen-1], 1);
      }

      choicesArray.push(choice2songs[questionScreen-1]);
      questionScreen++;
    }

    else if (choice3selected) {
      if (choicesSelected.has(choice3songs[questionScreen-1])) {
        choicesSelected.set(choice3songs[questionScreen-1], choicesSelected.get(choice3songs[questionScreen-1]) + 1);
      }

      else {
        choicesSelected.set(choice3songs[questionScreen-1], 1);
      }

      choicesArray.push(choice3songs[questionScreen-1]);
      questionScreen++;
    }

    else if (choice4selected) {
      if (choicesSelected.has(choice4songs[questionScreen-1])) {
        choicesSelected.set(choice4songs[questionScreen-1], choicesSelected.get(choice4songs[questionScreen-1]) + 1);
      }

      else {
        choicesSelected.set(choice4songs[questionScreen-1], 1);
      }

      choicesArray.push(choice4songs[questionScreen-1]);
      questionScreen++;
    }
    
    else if (!mobile()) {
      alert("Please select an option.");
    }
  }

  if (questionScreen > 0 && questionScreen <= TOTAL_QUESTIONS) {
    for (let currentQuestion of questionsArray) {
      currentQuestion.choiceSelected();
    }
  }

  console.log(choicesSelected);
}

function touchEnded() {
  if (mouseX >= question.backX && mouseX <= question.backX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > 0 && questionScreen <= TOTAL_QUESTIONS) {
    questionScreen += 0.5;
  }
}

function mobile() {
  return /Android | BlackBerry | CPU | IE Mobile | Intel | iPad | iPhone | iPod | Linux | Macintosh | Opera Mini | webOS/i.test(navigator.userAgent);
}

function createQuestions() {
  for (let i = 0; i < TOTAL_QUESTIONS; i++) {
    question = new Question;
    questionsArray.push(question);
  }
}

function evenChoices() {
  for (let i = questionScreen - 1; i < choicesArray.length; i++) {
    choicesArray.pop();
  }
}

function start() {
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(startText.size);
  text(startText.text, startText.x, startText.y, startText.w, startText.h);
}

function questions() {
  question.question(questionList[questionScreen-1]);
  question.choice1(choice1list[questionScreen-1]);
  question.choice2(choice2list[questionScreen-1]);
  question.choice3(choice3list[questionScreen-1]);
  question.choice4(choice4list[questionScreen-1]);
  question.back();
  question.next();
}

function results() {
  determineJam();

  fill("black");
  textAlign(CENTER, CENTER);
  textSize(startText.size);
  text(`Your jam is ${jam}!`, 0, 125, width);

  embed();
  stroke("black");

  if (mouseX >= retakeRect.x && mouseX <= retakeRect.x + retakeRect.w && mouseY >= retakeRect.y && mouseY <= retakeRect.y + retakeRect.h) {
    fill("black");
    rect(retakeRect.x, retakeRect.y, retakeRect.w, retakeRect.h);
    fill("white");
  }

  else {
    fill("white");
    rect(retakeRect.x, retakeRect.y, retakeRect.w, retakeRect.h);
    fill("black");
  }

  noStroke();
  textSize(retakeRect.size);
  text(retakeRect.text, retakeRect.x, retakeRect.y + retakeRect.lowerText, retakeRect.w, retakeRect.h);
}

function determineJam() {
  for (let song of choicesSelected.keys()) {
    if (choicesSelected.get(song) > mostSelected) {
      mostSelected = choicesSelected.get(song);
      jam = song;
    }
  }
}

function embed() {
  if (jam === "\"Anti-Hero\" by Taylor Swift") {
    ah.show();
  }

  else if (jam === "\"As It Was\" by Harry Styles") {
    aiw.show();
  }

  else if (jam === "\"The Alcott\" by The National ft. Taylor Swift") {
    al.show();
  }

  else if (jam === "\"Better Place\" by *NSYNC") {
    bp.show();
  }

  else if (jam === "\"Calm Down\" by Rema & Selena Gomez") {
    cd.show();
  }

  else if (jam === "\"Creepin'\" by Metro Boomin, The Weeknd & 21 Savage") {
    cr.show();
  }

  else if (jam === "\"Cupid\" by FIFTY FIFTY") {
    cu.show();
  }

  else if (jam === "\"Daylight\" by David Kushner") {
    da.show();
  }

  else if (jam === "\"Die for You\" by The Weeknd") {
    dfy.show();
  }

  else if (jam === "\"Dance the Night\" by Dua Lipa") {
    dtn.show();
  }

  else if (jam === "\"Fast Car\" by Luke Combs") {
    fc.show();
  }

  else if (jam === "\"Flowers\" by Miley Cyrus") {
    fl.show();
  }

  else if (jam === "\"Forget Me\" by Lewis Capaldi") {
    fm.show();
  }

  else if (jam === "\"Heaven\" by Niall Horan") {
    he.show();
  }

  else if (jam === "\"I'm Good (Blue)\" by David Guetta & Bebe Rexha") {
    igb.show();
  }

  else if (jam === "\"Jaded\" by Miley Cyrus") {
    ja.show();
  }

  else if (jam === "\"Karma\" by Taylor Swift") {
    ka.show();
  }

  else if (jam === "\"Kill Bill\" by SZA") {
    kb.show();
  }

  else if (jam === "\"Lil Boo Thang\" by Paul Russell") {
    lbt.show();
  }

  else if (jam === "\"Lavender Haze\" by Taylor Swift") {
    lh.show();
  }

  else if (jam === "\"Mona Lisa\" by Dominic Fike") {
    ml.show();
  }

  else if (jam === "\"Thank God I Do\" by Lauren Daigle") {
    tgid.show();
  }

  else if (jam === "\"Until I Found You\" by Stephen Sanchez") {
    uify.show();
  }

  else if (jam === "\"Unstoppable\" by Sia") {
    un.show();
  }
  
  else if (jam === "\"What the Hell Are We Dying For?\" by Shawn Mendes") {
    wthawdf.show();
  }
}