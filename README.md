# code-quiz

## Description

This project used vanilla Javascript to build a functioning quiz application. This project is useful in exercising the JavaScript fundamentals for baseline application production, and demonstrates the value of using localStorage and the power that JS can offer to a website in terms of functionality and interaction of the user.

## Usage

- When the user clicks the start quiz button, a series of questions and answer buttons display, starting the quiz and timer.
- When the user clicks the answer options to the questions, an answer state of correct or wrong will display below the answers. if the answer is correct, next question. Otherwise, subtract 15 seconds of time (final time is final score)
- If user doesn't finish quiz before time is up or time goes below 0 seconds, time left is assigned to 0 seconds and therefore score as well. Otherwise, final time = final score
- User is taken to summary page, where they can input initials to recieved score and update highscore list on highscore page
- On highscore page, user can choose to remove highscores displayed in the list or navigate back to homepage
- Ay any point if the user decides to click "View Highscores" in the header, even during the quiz the process will terminate and navigate to the highscore page




![The Code Quiz application displays a purple button in home page to start quiz.](assets\homepage.png)
![The Code Quiz application displays a series of purple buttons below the question as answer options.](assets\quiz-page.png)
![The Code Quiz application displays a purple button and input in summary page to save initials and score.](assets\summary-page.png)
![The Code Quiz application displays 2 purple buttons in highscore page to either clear scores or go home.](assets\highscore-page.png)


## Credits

Video Tutorial 1: https://www.youtube.com/watch?v=f4fB9Xg2JEY 

Video Tutorial 2: https://www.youtube.com/watch?v=riDzcEQbX6k

