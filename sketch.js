// Capstone Coding Project
// Gabe PausJenssen
// January 16, 2024
//
// Extra for Experts:
//
// - Quiz dimensions resize well and behave slightly differently for nearly all devices; here's how to see it:
//   - Step 1: Click Ctrl+Shift+I to inspect;
//   - Step 2: Click Ctrl+Shift+M to toggle device toolbar;
//   - Step 3: Click on "Dimensions: Responsive", and change "Responsive" to any device of your choice
//   - Step 4: Changing the device sometimes zooms up on the screen (ex. changing iPad Air to iPhone XR), so refresh the page if this happens
// - Examples of devices it works well with are all iPads and iPhone, Pixel and Samsung Galaxy mobile devices
// - Examples of devices it doesn't work well with are BlackBerry Z30, Nest Hub, Nokia N9, and Surface Pro 7
//
// - After retrieving Spotify embeds for each jam, attributes were added to each song so that it could be sized and displayed better
// - Embeds appear slightly crammed with smaller mobile devices (I believe when the width is less than 300px), but otherwise always works
// - After adding attributes, songs stopped playing, but after removing some of Spotify's own attributes, the player functionality improved:
//   - Example of Spotify embed: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0V3wPSX9ygBnCm8psDIegu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//   - Example with my changes: <iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/0V3wPSX9ygBnCm8psDIegu' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>

const START_SCREEN = 0;
const TOTAL_QUESTIONS = 20;

const COLOURS = ["red", "blue", "green", "purple"];

const QUESTION_LIST = ["How do you like to listen to music the most?", "When do you like to listen to music the most?", "What kind of instrument do you play?", "How do you feel about singing?", "Where do most of your favourite artists originate?", "Which decade of music is your favourite?", "Which of these is your favourite genre of music?", "Which of these is your favourite genre of music?", "Which movie soundtrack has the best songs?", "Which kind of love song is your favourite?", "How did you feel after your last breakup?", "What are your opinions on music and TikTok?", "Pick a Midnights song", "Pick a Harry's House song", "Pick a timeless song", "Pick a boy band", "Pick a Canadian superstar", "Which 2023 song do you find the most overplayed?", "Which of those songs can you not get enough of?", "Are you excited to see your result?"];
const CHOICE_1_LIST = ["Radio", "Waking up in the morning", "Brass", "I love singing, and I can do it well!", "Canada", "'60s or '70s", "Pop or rock", "Hip-hop or rap", "Top Gun: Maverick", "Songs about a significant other", "I accepted that we weren't meant to be", "I'm all for TikTokers' songs!", "Anti-Hero", "As It Was", "\"Best of My Love\" by the Emotions", "BTS", "Avril Lavigne", "\"Creepin'\" by Metro Boomin, The Weeknd & 21 Savage", "Creepin'", "I need to see it asap!!!"];
const CHOICE_2_LIST = ["Streaming", "Whenever I need a short break", "Chordophone", "I love singing, even though I kind of stink", "Nigeria", "'80s or '90s", "Indie or alternative", "R&B or soul", "Spider-Man: Across the Spider-Verse", "Songs about family and/or friends", "I wish we were still together", "I love seeing old songs go viral!", "Lavender Haze", "Late Night Talking", "\"Blue (Da Ba Dee)\" by Eiffel 65", "*NSYNC", "Justin Bieber", "\"Flowers\" by Miley Cyrus", "Flowers", "I'm so excited!"];
const CHOICE_3_LIST = ["Concerts and live performances", "Whenever I need a positivity booster", "Percussion", "Sometimes I hate the way my voice sounds", "South Korea", "2000s or 2010s", "Dance or electronic", "Afrobeats", "Barbie", "Self-love songs", "I was disappointed and upset", "TikTok ruins songs", "Karma", "Satellite", "\"I Don't Wanna Know\" by Mario Winans ft. Enya & P. Diddy", "One Direction", "Shawn Mendes", "\"Kill Bill\" by SZA", "Kill Bill", "Yesss! Tell me the truth!"];
const CHOICE_4_LIST = ["Movies", "Falling asleep at night", "Woodwind", "I'm better at rapping", "UK", "2020s", "Country", "K-Pop", "Trolls Band Together", "Songs about someone who loves me when I don't love myself as much", "I've never had a breakup :)", "I prefer organic hits", "I prefer indie Taylor", "Ehhh... I prefer Niall", "Don't know any of those, but I like older songs", "I much prefer girl groups", "The Weeknd", "\"Calm Down\" by Rema & Selena Gomez", "Calm Down", "I doubt it'll be correct, but sure"];

// "Jams" are songs that are called three times in the QUESTION_N_SONGS, so they have a chance of being your jam
// "Extras" are songs that are called only once in the QUESTION_N_SONGS, so they have no chance of being the jam
const JAMS = ["\"Anti-Hero\" by Taylor Swift", "\"As It Was\" by Harry Styles", "\"The Alcott\" by The National ft. Taylor Swift", "\"Better Place\" by *NSYNC", "\"Calm Down\" by Rema & Selena Gomez", "\"Creepin'\" by Metro Boomin, The Weeknd & 21 Savage", "\"Cupid\" by FIFTY FIFTY", "\"Daylight\" by David Kushner", "\"Die for You\" by The Weeknd", "\"Dance the Night\" by Dua Lipa", "\"Fast Car\" by Luke Combs", "\"Flowers\" by Miley Cyrus", "\"Forget Me\" by Lewis Capaldi", "\"Heaven\" by Niall Horan", "\"I'm Good (Blue)\" by David Guetta & Bebe Rexha", "\"Jaded\" by Miley Cyrus", "\"Karma\" by Taylor Swift", "\"Kill Bill\" by SZA", "\"Lil Boo Thang\" by Paul Russell", "\"Lavender Haze\" by Taylor Swift", "\"Mona Lisa\" by Dominic Fike", "\"Thank God I Do\" by Lauren Daigle", "\"Until I Found You\" by Stephen Sanchez", "\"Unstoppable\" by Sia", "\"What the Hell Are We Dying For?\" by Shawn Mendes"];
const EXTRAS = ["\"I'm a Mess\" by Avril Lavigne with YUNGBLUD", "\"I Ain't Worried\" by OneRepublic", "\"Late Night Talking\" by Harry Styles", "\"Satellite\" by Harry Styles", "\"Seven\" by Jung Kook & Latto"];

// Sorting songs by question; array values are choice 1, choice 2, choice 3, choice 4
const QUESTION_1_SONGS = [JAMS[12], JAMS[7], JAMS[10], JAMS[9]];
const QUESTION_2_SONGS = [JAMS[23], JAMS[18], JAMS[11], JAMS[21]];
const QUESTION_3_SONGS = [JAMS[18], JAMS[21], JAMS[17], JAMS[19]];
const QUESTION_4_SONGS = [JAMS[9], JAMS[24], JAMS[15], JAMS[20]];
const QUESTION_5_SONGS = [JAMS[8], JAMS[4], JAMS[6], JAMS[1]];
const QUESTION_6_SONGS = [JAMS[22], JAMS[12], JAMS[23], JAMS[7]];
const QUESTION_7_SONGS = [JAMS[15], JAMS[2], JAMS[14], JAMS[10]];
const QUESTION_8_SONGS = [JAMS[20], JAMS[17], JAMS[4], JAMS[6]];
const QUESTION_9_SONGS = [EXTRAS[1], JAMS[20], JAMS[9], JAMS[3]];
const QUESTION_10_SONGS = [JAMS[22], JAMS[10], JAMS[14], JAMS[21]];
const QUESTION_11_SONGS = [JAMS[11], JAMS[12], JAMS[24], JAMS[13]];
const QUESTION_12_SONGS = [JAMS[7], JAMS[23], JAMS[0], JAMS[13]];
const QUESTION_13_SONGS = [JAMS[0], JAMS[19], JAMS[16], JAMS[2]];
const QUESTION_14_SONGS = [JAMS[1], EXTRAS[2], EXTRAS[3], JAMS[13]];
const QUESTION_15_SONGS = [JAMS[18], JAMS[14], JAMS[5], JAMS[19]];
const QUESTION_16_SONGS = [EXTRAS[4], JAMS[3], JAMS[1], JAMS[6]];
const QUESTION_17_SONGS = [EXTRAS[0], JAMS[5], JAMS[24], JAMS[8]];
const QUESTION_18_SONGS = [JAMS[8], JAMS[15], JAMS[16], JAMS[22]];
const QUESTION_19_SONGS = [JAMS[5], JAMS[11], JAMS[17], JAMS[4]];
const QUESTION_20_SONGS = [JAMS[16], JAMS[3], JAMS[2], JAMS[0]];

// Sorting songs by choice; array values are question 1, question 2... up to question 20
const CHOICE_1_SONGS = [QUESTION_1_SONGS[0], QUESTION_2_SONGS[0], QUESTION_3_SONGS[0], QUESTION_4_SONGS[0], QUESTION_5_SONGS[0], QUESTION_6_SONGS[0], QUESTION_7_SONGS[0], QUESTION_8_SONGS[0], QUESTION_9_SONGS[0], QUESTION_10_SONGS[0], QUESTION_11_SONGS[0], QUESTION_12_SONGS[0], QUESTION_13_SONGS[0], QUESTION_14_SONGS[0], QUESTION_15_SONGS[0], QUESTION_16_SONGS[0], QUESTION_17_SONGS[0], QUESTION_18_SONGS[0], QUESTION_19_SONGS[0], QUESTION_20_SONGS[0]];
const CHOICE_2_SONGS = [QUESTION_1_SONGS[1], QUESTION_2_SONGS[1], QUESTION_3_SONGS[1], QUESTION_4_SONGS[1], QUESTION_5_SONGS[1], QUESTION_6_SONGS[1], QUESTION_7_SONGS[1], QUESTION_8_SONGS[1], QUESTION_9_SONGS[1], QUESTION_10_SONGS[1], QUESTION_11_SONGS[1], QUESTION_12_SONGS[1], QUESTION_13_SONGS[1], QUESTION_14_SONGS[1], QUESTION_15_SONGS[1], QUESTION_16_SONGS[1], QUESTION_17_SONGS[1], QUESTION_18_SONGS[1], QUESTION_19_SONGS[1], QUESTION_20_SONGS[1]];
const CHOICE_3_SONGS = [QUESTION_1_SONGS[2], QUESTION_2_SONGS[2], QUESTION_3_SONGS[2], QUESTION_4_SONGS[2], QUESTION_5_SONGS[2], QUESTION_6_SONGS[2], QUESTION_7_SONGS[2], QUESTION_8_SONGS[2], QUESTION_9_SONGS[2], QUESTION_10_SONGS[2], QUESTION_11_SONGS[2], QUESTION_12_SONGS[2], QUESTION_13_SONGS[2], QUESTION_14_SONGS[2], QUESTION_15_SONGS[2], QUESTION_16_SONGS[2], QUESTION_17_SONGS[2], QUESTION_18_SONGS[2], QUESTION_19_SONGS[2], QUESTION_20_SONGS[2]];
const CHOICE_4_SONGS = [QUESTION_1_SONGS[3], QUESTION_2_SONGS[3], QUESTION_3_SONGS[3], QUESTION_4_SONGS[3], QUESTION_5_SONGS[3], QUESTION_6_SONGS[3], QUESTION_7_SONGS[3], QUESTION_8_SONGS[3], QUESTION_9_SONGS[3], QUESTION_10_SONGS[3], QUESTION_11_SONGS[3], QUESTION_12_SONGS[3], QUESTION_13_SONGS[3], QUESTION_14_SONGS[3], QUESTION_15_SONGS[3], QUESTION_16_SONGS[3], QUESTION_17_SONGS[3], QUESTION_18_SONGS[3], QUESTION_19_SONGS[3], QUESTION_20_SONGS[3]];

let questionScreen = START_SCREEN;

// Each question is a class Question function that is stored inside the questionsArray
let questionsArray = [];
let question;

// The array tracks the order the songs were selected in, and the map tracks how many times each song was selected
let selectedOrder = [];
let selectedCount = new Map();

// Special indexes (stored inside indexes() function)
let currentQuestion, lastSelected, lastTouch, currentChoice;

let startText, startRect, endText, endRect;

// Values for layout of question box, each choice, and back and next buttons
let questionX, questionY, questionWidth, questionHeight, questionSize;
let choices1and3x, choices2and4x, choices1and2y, choices3and4y, choicesWidth, choicesHeight, choicesSize;
let backX, nextX, backNextY, backNextWidth, backNextHeight, backNextSize;
let lowerText;

// Booleans that tell you if you've currently selected a choice prior to clicking the Next button
let choice1selected, choice2selected, choice3selected, choice4selected;

// Determined at end of quiz
let mostSelected = 0;
let ah, aiw, al, bp, cd, cr, cu, da, dfy, dtn, fc, fl, fm, he, igb, ja, ka, kb, lbt, lh, ml, tgid, uify, un, wthawdf;
let jam;

function preload() {
  // Spotify embeds for the 25 possible jams
  ah = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/0V3wPSX9ygBnCm8psDIegu' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  aiw = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/4Dvkj6JhhA12EX05fT7y2e' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  al = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/6INztpNwOTlfSKTuPo0HOP' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  bp = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/1bHnRc60O1N0l3PbHjaKyK' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  cd = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/0WtM2NBVQNNJLh6scP13H8' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  cr = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/2dHHgzDwk4BJdRwy9uXhTO' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  cu = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/7FbrGaHYVDmfr7KoLIZnQ7' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  da = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/1odExI7RdWc4BT515LTAwj' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  dfy = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/2Ch7LmS7r2Gy2kc64wv3Bz' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  dtn = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/11C4y2Yz1XbHmaQwO06s9f' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  fc = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/1Lo0QY9cvc8sUB2vnIOxDT' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  fl = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/7DSAEUvxU8FajXtRloy8M0' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  fm = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/3iHzKA9HlXf5wsGdsrsnSA' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  he = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/5FQ77Cl1ndljtwwImdtjMy' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  igb = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/4uUG5RXrOk84mYEfFvj3cK' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  ja = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/0LbZLBBZI1NfaDgb4dx0UD' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  ka = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/7KokYm8cMIXCsGVmUvKtqf' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  kb = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/3OHfY25tqY28d16oZczHc8' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  lbt = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/0cVyQfDyRnMJ0V3rjjdlU3' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  lh = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/5jQI2r1RdgtuT8S3iG8zFC' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  ml = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/37CoOXIsgF3NzbK1zHZetk' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  tgid = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/2rpZ2T8xOiDnn5VpYXvwIC' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  uify = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/0T5iIrXA4p5GsubkhuBIKV' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  un = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/1yvMUkIOTeUNtNWlWRgANS' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
  wthawdf = createDiv("<iframe style='display: block; margin: auto; position: fixed; top: 35%; left: 20%; width: 60%; height: 40%' src='https://open.spotify.com/embed/track/1sKtD5KMZgTFHbsxjgqfZh' frameborder='0' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>").hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Objects that store values for layout of start and result screens
  startText = {
    x: 0,
    y: 0,
    w: width,
    h: height,
    size: (map(5, 0, 100, 0, width) + map(5, 0, 100, 0, height))/2,
    text: "Welcome! This quiz will tell you what 2023 song is your jam. Have fun! Press Start to begin.",
  };

  startRect = {
    x: width/2 - map(25, 0, 100, 0, width),
    y: height/8,
    w: map(50, 0, 100, 0, width),
    h: map(10, 0, 100, 0, height),
    text: "START",
    lowerText: map(0.75, 0, 100, 0, height),
  };

  endText = {
    x: startText.x,
    y1: map(15, 0, 100, 0, height),
    y2: map(85, 0, 100, 0, height),
    w: startText.w,
    size: startText.size,
    text: "Thanks for taking the quiz! Not satisfied with your result? Press Retake to do it again.",
  };

  endRect = {
    x: startRect.x,
    y: height/4,
    w: startRect.w,
    h: map(7.5, 0, 100, 0, height),
    text: "RETAKE",
    lowerText: startRect.lowerText,
  };

  // The following are affected based off screen size:
  // - Text size of "BACK" and "NEXT"
  // - X-coordinates of question, left-side choices and Back button
  // - Width of everything
  if (width > height) {
    questionX = map(25, 0, 100, 0, width);
    questionWidth = map(50, 0, 100, 0, width);

    choices1and3x = map(25, 0, 100, 0, width);
    choicesWidth = map(22.5, 0, 100, 0, width);

    backX = map(25, 0, 100, 0, width);
    backNextWidth = map(20, 0, 100, 0, width);
    backNextSize = 0.625*startText.size;
  }

  else {
    questionX = map(5, 0, 100, 0, width);
    questionWidth = map(90, 0, 100, 0, width);

    choices1and3x = map(5, 0, 100, 0, width);
    choicesWidth = map(42.5, 0, 100, 0, width);
    
    backX = map(5, 0, 100, 0, width);
    backNextWidth = map(40, 0, 100, 0, width);
    backNextSize = 1.25*startText.size;
  }

  // The following are not affected based off screen size:
  // - Text size of question and choices
  // - X-coordinates of right-side choices and Next button
  // - Y-coordinates, height, and lowering text of everything
  questionY = map(5, 0, 100, 0, height);
  questionHeight = map(25, 0, 100, 0, height);
  questionSize = (questionWidth + questionHeight)/16;

  choices2and4x = map(52.5, 0, 100, 0, width);
  choices1and2y = map(35, 0, 100, 0, height);
  choices3and4y = map(62.5, 0, 100, 0, height);
  choicesHeight = map(22.5, 0, 100, 0, height);
  choicesSize = (choicesWidth + choicesHeight)/16;

  nextX = map(55, 0, 100, 0, width);
  backNextY = map(90, 0, 100, 0, height);
  backNextHeight = map(7.5, 0, 100, 0, height);

  lowerText = map(0.5, 0, 100, 0, height);

  // Detects if user is on a mobile device
  mobile();
  createQuestions();

  choice1selected = false;
  choice2selected = false;
  choice3selected = false;
  choice4selected = false;
}

function windowResized() {
  // Everything defined in the setup is called again when the user resizes their screen so that the new content fits appropriately
  setup();
}

function draw() {
  background("whitesmoke");
  indexes();

  if (questionScreen === START_SCREEN) {
    start();
  }

  else if (questionScreen > START_SCREEN && questionScreen <= TOTAL_QUESTIONS) {
    questions();
  }

  else {
    results();
  }
}

class Question {
  constructor() {
    this.questionX = questionX;
    this.questionY = questionY;
    this.questionWidth = questionWidth;
    this.questionHeight = questionHeight;
    this.questionSize = questionSize;

    this.choices1and3x = choices1and3x;
    this.choices2and4x = choices2and4x;
    this.choices1and2y = choices1and2y;
    this.choices3and4y = choices3and4y;
    this.choicesWidth = choicesWidth;
    this.choicesHeight = choicesHeight;
    this.choicesSize = choicesSize;

    this.backX = backX;
    this.nextX = nextX;
    this.backNextY = backNextY;
    this.backNextWidth = backNextWidth;
    this.backNextHeight = backNextHeight;
    this.backNextSize = backNextSize;
    
    this.lowerText = lowerText;
  }

  colour() {
    // Ordering question screens by 1-2-3-4, the colour of the question and choices will be red-blue-green-purple
    if (questionScreen % 4 === 1) {
      fill(COLOURS[0]);
    }

    else if (questionScreen % 4 === 2) {
      fill(COLOURS[1]);
    }

    else if (questionScreen % 4 === 3) {
      fill(COLOURS[2]);
    }

    else {
      fill(COLOURS[3]);
    }
  }

  questionChoicesRects() {
    noStroke();
    this.colour();
    rect(this.questionX, this.questionY, this.questionWidth, this.questionHeight);

    // If a choice other than 1 is selected, choice 1 is filled in grey; otherwise, it keeps its colour from the colour() function
    if (choice2selected || choice3selected || choice4selected) {
      fill(180);
    }

    rect(this.choices1and3x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    this.colour();

    // Pattern from above follows for the next three choices
    if (choice1selected || choice3selected || choice4selected) {
      fill(180);
    }

    rect(this.choices2and4x, this.choices1and2y, this.choicesWidth, this.choicesHeight);
    this.colour();

    if (choice1selected || choice2selected || choice4selected) {
      fill(180);
    }

    rect(this.choices1and3x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
    this.colour();

    if (choice1selected || choice2selected || choice3selected) {
      fill(180);
    }

    rect(this.choices2and4x, this.choices3and4y, this.choicesWidth, this.choicesHeight);
  }

  questionChoicesTexts(questionText, choice1text, choice2text, choice3text, choice4text) {
    fill("white");

    textSize(this.questionSize);
    text(questionText, this.questionX, this.questionY + this.lowerText, this.questionWidth, this.questionHeight);

    textSize(this.choicesSize);
    text(choice1text, this.choices1and3x, this.choices1and2y + this.lowerText, this.choicesWidth, this.choicesHeight);
    text(choice2text, this.choices2and4x, this.choices1and2y + this.lowerText, this.choicesWidth, this.choicesHeight);
    text(choice3text, this.choices1and3x, this.choices3and4y + this.lowerText, this.choicesWidth, this.choicesHeight);
    text(choice4text, this.choices2and4x, this.choices3and4y + this.lowerText, this.choicesWidth, this.choicesHeight);
  }

  back() {
    strokeWeight(1);
    stroke("black");
    textSize(this.backNextSize);

    // If I only used mouseX and mouseY, the buttons would stay black forever after clicking them
    if (mobile()) {
      if (touches.length > 0 && touches[lastTouch].x >= this.backX && touches[lastTouch].x <= this.backX + this.backNextWidth && touches[lastTouch].y >= this.backNextY && touches[lastTouch].y <= this.backNextY + this.backNextHeight) {
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

    // If I only used touches[lastTouch].x and touches[lastTouch].y, the buttons would never turn black when hovering over or clicking them
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

  // Exact same pattern as back() function
  next() {
    stroke("black");

    if (mobile()) {
      if (touches.length > 0 && touches[lastTouch].x >= this.nextX && touches[lastTouch].x <= this.nextX + this.backNextWidth && touches[lastTouch].y >= this.backNextY && touches[lastTouch].y <= this.backNextY + this.backNextHeight) {
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
      if (mouseX >= this.nextX && mouseX <= this.nextX + this.backNextWidth && mouseY >= this.backNextY && mouseY <= this.backNextY + this.backNextHeight) {
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

    noStroke();
    text("NEXT", this.nextX, this.backNextY + this.lowerText, this.backNextWidth, this.backNextHeight);
  }

  // This tells you which choice your cursor is over (and since it's called in mousePressed(), that tells you which choice you clicked on) 
  choiceSelected() {
    // Hovering over (and in mousePressed(), tells if you're clicking on) choice 1 toggles the boolean to true while the others remain false
    if (mouseX >= this.choices1and3x && mouseX <= this.choices1and3x + this.choicesWidth && mouseY >= this.choices1and2y && mouseY <= this.choices1and2y + this.choicesHeight) {
      choice1selected = true;
      choice2selected = false;
      choice3selected = false;
      choice4selected = false;
    }

    // Pattern from above follows for the next three else if statements
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

    // Clicking anywhere on the screen that isn't one of the choices toggles all the selected choice booleans to false
    else {
      choice1selected = false;
      choice2selected = false;
      choice3selected = false;
      choice4selected = false;
    }
  }
}

function mousePressed() {
  // Clicking the Start button begins the quiz
  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h && questionScreen === START_SCREEN) {
    questionScreen++;
  }

  // Clicking the Back button removes the most recently selected song, since you are going back to change your answer
  if (mouseX >= question.backX && mouseX <= question.backX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > START_SCREEN && questionScreen <= TOTAL_QUESTIONS) {
    // If the song was already selected at least once, its selected value decreases by one
    if (selectedCount.get(lastSelected) > 1) {
      selectedCount.set(lastSelected, selectedCount.get(lastSelected) - 1);
    }

    // If the song was selected only once, it is deleted from the map because there is no point to track a song that has never been selected
    else {
      selectedCount.delete(lastSelected);
    }

    // The last song selected always gets removed from the array that tracks the order of the song's selections
    selectedOrder.pop();
    questionScreen--;
  }

  if (mouseX >= question.nextX && mouseX <= question.nextX + question.backNextWidth && mouseY >= question.backNextY && mouseY <= question.backNextY + question.backNextHeight && questionScreen > START_SCREEN && questionScreen <= TOTAL_QUESTIONS) {        
    if (choice1selected) {
      currentChoice = CHOICE_1_SONGS[currentQuestion];
    }

    else if (choice2selected) {
      currentChoice = CHOICE_2_SONGS[currentQuestion];
    }

    else if (choice3selected) {
      currentChoice = CHOICE_3_SONGS[currentQuestion];
    }

    else if (choice4selected) {
      currentChoice = CHOICE_4_SONGS[currentQuestion];
    }

    else {
      if (!mobile()) {
        alert("Please select an option.");
      }

      questionScreen--;
    }

    if (selectedCount.has(currentChoice)) {
      selectedOrder.push(currentChoice);
      selectedCount.set(currentChoice, selectedCount.get(currentChoice) + 1);
    }

    else if (currentChoice === undefined) {
      selectedCount.delete(currentChoice);
    }

    else {
      selectedOrder.push(currentChoice);
      selectedCount.set(currentChoice, 1);
    }

    questionScreen++;
  }

  if (questionScreen > START_SCREEN && questionScreen <= TOTAL_QUESTIONS) {
    for (let eachQuestion of questionsArray) {
      eachQuestion.choiceSelected();
    }
  }

  if (mouseX >= endRect.x && mouseX <= endRect.x + endRect.w && mouseY >= endRect.y && mouseY <= endRect.y + endRect.h && questionScreen > TOTAL_QUESTIONS) {
    retake();
  }

  return false;
}

function mobile() {
  // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
  return /Android | CPU | IE Mobile | Intel | KFAPWI | Linux | LYF | MSIE | Opera Mini | RIM | webOS/i.test(navigator.userAgent);
}

function createQuestions() {
  for (let questionCount = START_SCREEN; questionCount < TOTAL_QUESTIONS; questionCount++) {
    questionsArray.push(question = new Question);
  }
}

function indexes() {
  currentQuestion = questionScreen - 1;
  lastSelected = selectedOrder[selectedOrder.length - 1];
  lastTouch = touches.length - 1;
  currentChoice = undefined;
}

function start() {
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(startText.size);
  text(startText.text, startText.x, startText.y, startText.w, startText.h);
  strokeWeight(5);
  stroke("black");

  if (mouseX >= startRect.x && mouseX <= startRect.x + startRect.w && mouseY >= startRect.y && mouseY <= startRect.y + startRect.h && questionScreen === START_SCREEN) {
    rect(startRect.x, startRect.y, startRect.w, startRect.h);
    fill("white");
  }

  else {
    fill("white");
    rect(startRect.x, startRect.y, startRect.w, startRect.h);
    fill("black");
  }

  noStroke();
  text(startRect.text, startRect.x, startRect.y + startRect.lowerText, startRect.w, startRect.h);
}

function questions() {
  question.questionChoicesRects();
  question.questionChoicesTexts(QUESTION_LIST[currentQuestion], CHOICE_1_LIST[currentQuestion], CHOICE_2_LIST[currentQuestion], CHOICE_3_LIST[currentQuestion], CHOICE_4_LIST[currentQuestion]);
  question.back();
  question.next();
}

function results() {
  determineJam();
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(startText.size);
  text(`Your jam is ${jam}!`, endText.x, endText.y1, endText.w);
  strokeWeight(5);
  stroke("black");
  
  if (mouseX >= endRect.x && mouseX <= endRect.x + endRect.w && mouseY >= endRect.y && mouseY <= endRect.y + endRect.h && questionScreen > TOTAL_QUESTIONS) {
    rect(endRect.x, endRect.y, endRect.w, endRect.h);
    fill("white");
  }

  else {
    fill("white");
    rect(endRect.x, endRect.y, endRect.w, endRect.h);
    fill("black");
  }

  noStroke();
  text(endRect.text, endRect.x, endRect.y + endRect.lowerText, endRect.w, endRect.h);
  embed();
  fill("black");
  text(endText.text, endText.x, endText.y2, endText.w);
}

function determineJam() {
  for (let song of selectedCount.keys()) {
    if (selectedCount.get(song) > mostSelected) {
      mostSelected = selectedCount.get(song);
      jam = song;
    }
  }
}

function embed() {
  if (jam === JAMS[0]) {
    ah.show();
  }

  else if (jam === JAMS[1]) {
    aiw.show();
  }

  else if (jam === JAMS[2]) {
    al.show();
  }

  else if (jam === JAMS[3]) {
    bp.show();
  }

  else if (jam === JAMS[4]) {
    cd.show();
  }

  else if (jam === JAMS[5]) {
    cr.show();
  }

  else if (jam === JAMS[6]) {
    cu.show();
  }

  else if (jam === JAMS[7]) {
    da.show();
  }

  else if (jam === JAMS[8]) {
    dfy.show();
  }

  else if (jam === JAMS[9]) {
    dtn.show();
  }

  else if (jam === JAMS[10]) {
    fc.show();
  }

  else if (jam === JAMS[11]) {
    fl.show();
  }

  else if (jam === JAMS[12]) {
    fm.show();
  }

  else if (jam === JAMS[13]) {
    he.show();
  }

  else if (jam === JAMS[14]) {
    igb.show();
  }

  else if (jam === JAMS[15]) {
    ja.show();
  }

  else if (jam === JAMS[16]) {
    ka.show();
  }

  else if (jam === JAMS[17]) {
    kb.show();
  }

  else if (jam === JAMS[18]) {
    lbt.show();
  }

  else if (jam === JAMS[19]) {
    lh.show();
  }

  else if (jam === JAMS[20]) {
    ml.show();
  }

  else if (jam === JAMS[21]) {
    tgid.show();
  }

  else if (jam === JAMS[22]) {
    uify.show();
  }

  else if (jam === JAMS[23]) {
    un.show();
  }
  
  else if (jam === JAMS[24]) {
    wthawdf.show();
  }
}

function retake() {
  questionScreen = START_SCREEN;

  choice1selected = false;
  choice2selected = false;
  choice3selected = false;
  choice4selected = false;

  mostSelected = 0;
  ah.hide();
  aiw.hide();
  al.hide();
  bp.hide();
  cd.hide();
  cr.hide();
  cu.hide();
  da.hide();
  dfy.hide();
  dtn.hide();
  fc.hide();
  fl.hide();
  fm.hide();
  he.hide();
  igb.hide();
  ja.hide();
  ka.hide();
  kb.hide();
  lbt.hide();
  lh.hide();
  ml.hide();
  tgid.hide();
  uify.hide();
  un.hide();
  wthawdf.hide();
  jam = undefined;

  selectedOrder.splice(0);
  selectedCount.clear();
  start();
}