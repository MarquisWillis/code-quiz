//container selectors 
let startPageContainerEl = document.querySelector("#start-page-container");
let quizContainerEl = document.querySelector("#quiz-container");
let summaryContainerEl = document.querySelector("#summary-container");
let highscoreContainerEl = document.querySelector("#highscore-page");

// timer selector and start page start btn selector (for dynamic header and strtpage element selectors)
let timerEl = document.querySelector("#time-left");
let startQuizBtn = document.querySelector("#start-quiz-button");
let scoreLinkEl = document.querySelector("#highscore-link")

// quiz container element selectors
let questionEl = document.querySelector("#question");
let answer1El = document.querySelector("#answer-1");
let answer2El = document.querySelector("#answer-2");
let answer3El = document.querySelector("#answer-3");
let answer4El = document.querySelector("#answer-4");
let answerListEl = [answer1El, answer2El, answer3El, answer4El];
let answerStateEl = document.querySelector("#answer-state");

// summary container element selectors 
let scoreValEl = document.querySelector("#score-value");
let initInput = document.querySelector("#init-input");
let saveScoreBtn = document.querySelector("#save-init-score");

// highscore page container element selectors
let scoreListEl = document.querySelector("#score-list");
let homeBtn = document.querySelector("#home-page-button");
let clearScoreBtn = document.querySelector("#clear-local-scores");

// local storage getters
let initial = localStorage.getItem("inital");
let score = localStorage.getItem("score");

// q&a set for quiz
const questionSet = [
  {
    question: "What denotes a code block in JavaScript?",
    choice1: "'{}'",
    choice2: "'[]'",
    choice3: "'()'",
    choice4: "'||'",
    answer: answer1El
  },
  {
    question: "What is the purpose of static selectors in JavaScript?",
    choice1: "Because it looks pretty neat",
    choice2: "Because we like to torture ourselves with JavaScript (jk JS cool)",
    choice3: "To add unique funtionality to elements on the page and user interaction",
    choice4: "To perform backend operations",
    answer: answer3El
  },
  {
    question: "What is the increment/decrement operator in JavaScript?",
    choice1: " === ",
    choice2: " i++/i-- ",
    choice3: " !== ",
    choice4: " &&/|| ",
    answer: answer2El
  },
  {
    question: "What do we use to only run code if certain conditions are met?",
    choice1: "for loop",
    choice2: "while loop",
    choice3: "function",
    choice4: "if/else statements",
    answer: answer4El
  },
  {
    question: "How are objects defined in JavaScript?",
    choice1: "key-value pairs",
    choice2: "single data assignment",
    choice3: "point to memory",
    choice4: "console.log()",
    answer: answer1El
  },
];

// index for questionSet array, timeLeft used for timer, clockid for setInterval
let index = 0;
let timeLeft = 75;
let clockid;

// starts quiz and will use following functions:countDown(), displayQuestion(), nextQuestion(), wrongAnswer()
function startQuiz() {
  startPageContainerEl.classList.add("hide");
  quizContainerEl.classList.remove("hide");
  clockid = setInterval(countDown, 1000);
  displayQuestion();
}

/* triggered when startQuiz button is clicked, used for setInterval parameter
  function toggles timer off and on depending on such conditions:
    - if time is <=0 and the questionSet is incomplete, clear timer, timeLeft is now assigned 0, and displaySummary is called
    - otherwise if the questionSet at current index is undefined (ie index >= questionSet length), clear timer and displaySummary
    - otherwise, run timer 
*/
function countDown() {
  if (timeLeft <= 0 && index < questionSet.length - 1) {
    clearInterval(clockid)
    timeLeft = 0;
    displaySummary();
  } else if (questionSet[index] === undefined) {
    clearInterval(clockid);
    displaySummary();
  } else {
    timerEl.textContent = timeLeft;
    timeLeft--;
  }
}

// function to display appropriate questions and answers according to questionSet index
function displayQuestion() {
  questionEl.textContent = questionSet[index].question
  answer1El.textContent = questionSet[index].choice1
  answer2El.textContent = questionSet[index].choice2
  answer3El.textContent = questionSet[index].choice3
  answer4El.textContent = questionSet[index].choice4
}

// 1 of 2 functions used in answerCheck (toggles next question to display)
function nextQuestion() {
  index++;
  displayQuestion();
}

// 2 of 2 functions used in answerCheck (if answer incorrect, subtract 15s from timer)
function wrongAnswer() {
  timeLeft -= 15;
}

/* this function states: 
  - if the element that was clicked on matches the value paired with the answer key, toggle next question and show correct. 
  - otherwise, display wrong and trigger wrongAnswer function */
function answerCheck(e) {
  if (e.target === questionSet[index].answer) {
    answerStateEl.textContent = "Correct!"
    nextQuestion();
  } else {
    answerStateEl.textContent = "Wrong"
    wrongAnswer();
  }
}

// resets dynamic text elements answerState and timer to default, and assigns the scoreVal element to the time left at the end of the quiz
function displaySummary() {
  answerStateEl.textContent = "";
  summaryContainerEl.classList.remove("hide");
  quizContainerEl.classList.add("hide");
  scoreValEl.textContent = timeLeft;
  timerEl.textContent = 0;
}

let scoreboardCounter = 1;
// creates the list item for initials and score after quiz and appends list item to the scoreList element (also sets localStorage items)
function setStorage() {
  let scoreListItem = document.createElement("li")

  let scoreVal = scoreValEl.textContent;
  let initVal = initInput.value;

  localStorage.setItem("initial", initVal);
  localStorage.setItem("score", scoreVal);
  scoreListItem.innerText = scoreboardCounter + ". Initials: " + initVal + "\n  Score: " + scoreVal;
  scoreListEl.append(scoreListItem);
  scoreboardCounter++; // increments number output for highscore list
}

// when function needs to be called (from any section), applies hide class to all sections except highscore page to prevent bugs. also clears timer
function displayHighScores() {
  startPageContainerEl.classList.add("hide");
  summaryContainerEl.classList.add("hide");
  quizContainerEl.classList.add("hide")
  highscoreContainerEl.classList.remove("hide");
  answerStateEl.textContent = "";
  clearInterval(clockid);
}

// function used for when save button in summary page is clicked (sets storage and adds list item to score list) GOOD
function saveAndSetScore() {
  setStorage();
  displayHighScores();
}

// function called to go back to start page and reset quiz parameter defaults (timer and q&a set index)
function goHome() {
  highscoreContainerEl.classList.add("hide");
  startPageContainerEl.classList.remove("hide");
  timeLeft = 75;
  index = 0;
}

// removes list items from score list, resets scoreboard counter, and clears local Storage items
function clearStorage() {
  localStorage.removeItem("initial"); // GOOD
  localStorage.removeItem("score"); // GOOD
  scoreListEl.textContent = "";
  scoreboardCounter = 1;
}


// add event listeners for interactive HTML elements when clicked upon
scoreLinkEl.addEventListener("click", displayHighScores)

startQuizBtn.addEventListener("click", startQuiz);

answer1El.addEventListener("click", answerCheck);
answer2El.addEventListener("click", answerCheck);
answer3El.addEventListener("click", answerCheck);
answer4El.addEventListener("click", answerCheck);

saveScoreBtn.addEventListener("click", saveAndSetScore);

homeBtn.addEventListener("click", goHome);
clearScoreBtn.addEventListener("click", clearStorage);



/* PSUEDO-CODE
functions to write in this file:
- start quiz button function (controls initiation of quiz and timer) {event listener for start button}
- when current displayed question is answered, go to next question {event listener for answer response}
- if question answered is wrong, subtract 10s from clock and display whether correct or wrong {}
- when all questions are answered or timer <= 0, game is over
- function to add initials and save highScore to local storage (give option to clear)
*/

/*
    write all multiple choice style questions (about 5 or 6 should do)
    quiz only starts when start button is clicked
    final score is final time
    after answering final question, display final score and allow user to add initals and save score (allow user option to clear highscores)
    add go back option next to highscores. when clicked, return to start screen
*/

/*
variables to include: 
- static selectors for HTML (all sections/main of page for display property)
- unique selectors from HTML used for functionality: 

  header::
    "#time-left" for timer {add function: set interval}

  start page::
    "#start-quiz-button" to start quiz (add function: add event listener)

  quiz page::
    "#question" to display unique question (.innerHTML)
    "#answer-list" to display respective answers to question (.innerHTML)
    ".option" to provide function to button (add function: add event listener)
    "#answer-state" to display whether choice is correct or wrong (add functions for right and wrong)

  summary page::
    "#score-value" to display final score, which is final timer value (.value pass, .innerHTML)
    "#init-input" to retrieve and add value to local storage along with final score value and add to highscore list (.value pass)
    "#save-init-score" to add event listener for saving score and input to local storage and navigate to highscore screen (localStorage(), .innerHTML())

  highscore page::
    "#score-list" for highscore list display
    "#home-page-button" to navigate back to home page (add function: add event listener)
    "#clear-local-scores" to clear local storage values and reset highscore list (add function: add event listener)

- array of object literals to hold questions, answers and whether or not answer is correct (create in js, add to innerHTML for each next question)
- 
*/