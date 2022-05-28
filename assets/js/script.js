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
- array of object literals to hold questions and answers and whether or not answer is correct
- 
*/