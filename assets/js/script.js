/*
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

//container selectors 
let startPageContainerEl = document.querySelector("#start-page-container");
let quizContainerEl = document.querySelector("#quiz-container"); 
let summaryContainerEl = document.querySelector("#summary-container"); 
let highscoreContainerEl = document.querySelector("#highscore-page"); 

// static selectors for functional use
let timerEl = document.querySelector("#time-left");
let startQuizBtn = document.querySelector("#start-quiz-button");
let questionEl = document.querySelector("#question");
let answer1El = document.querySelector("#answer-1");
let answer2El = document.querySelector("#answer-2");
let answer3El = document.querySelector("#answer-3");
let answer4El = document.querySelector("#answer-4");
let answerStateEl = document.querySelector("#answer-state");
let scoreValEl = document.querySelector("#score-value");
let initInput = document.querySelector("#init-input");
let saveScoreBtn = document.querySelector("#save-init-score");
let scoreListEl = document.querySelector("#score-list");
let homeBtn = document.querySelector("#home-page-button");
let clearScoreBtn = document.querySelector("#clear-local-scores");


let questionSet = [
  {
  title:"new question 1",
  answers:["answer1","answer2","answer3","answer4"],
  solution: "answer2"
  }, {
  title:"new question 2",
  answers:["answer1","answer2","answer3","answer4"],
  solution: "answer2"
  }, {
  title:"new question 3",
  answers:["answer1","answer2","answer3","answer4"],
  solution: "answer2"
  }, {
  title:"new question 4",
  answers:["answer1","answer2","answer3","answer4"],
  solution: "answer2"
  }, {
  title:"new question 5",
  answers:["answer1","answer2","answer3","answer4"],
  solution: "answer2"
  }
];

// index for questionSet array, timeLeft used for timer
let index = 0;
let timeLeft = 75;
var clockid;

// starts quiz and will use following functions:countDown(), displayQuestion(), nextQuestion(), wrongAnswer()
function startQuiz() {
  startPageContainerEl.classList.add("hide");
  quizContainerEl.classList.remove("hide");
  clockid = setInterval(countDown, 1000);
  displayQuestion();
}

// triggered when startQuiz button is clicked, use for setInterval parameter
function countDown () {
  timerEl.textContent=timeLeft;
  timeLeft--;
}

function displayQuestion() {
  questionEl.textContent=questionSet[index].title
  answer1El.textContent=questionSet[index].answers[0]
  answer2El.textContent=questionSet[index].answers[1]
  answer3El.textContent=questionSet[index].answers[2]
  answer4El.textContent=questionSet[index].answers[3]
}

function nextQuestion() {
  index++
  displayQuestion();
}
// when answer is wrong, subtract 15 seconds and repeat question (re-call the displayQuestion function)
function wrongAnswer() {}

startQuizBtn.addEventListener("click", startQuiz);
//