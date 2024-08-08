"use strict";

/* Click 'check' button, collect the input value
- if there is no value
- if there is wrong value:
    - if value is too high/too low
    - decrement score by 1
    - 'check' button change to 'retry'
    - if score = 0, lose game, 'reset' btn
- if there is correct value:
    - change ? to correct number
    - compare high score to current score, update high score
    - 'retry' btn change to new game
    - background color change to green, reset/new game btn red
*/

const number = document.querySelector(".number");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const body = document.querySelector("body");

let answer = Math.ceil(Math.random() * 20);
let current_score = 4;
let current_highscore = 0;

function checkNumber() {
  const guess_number = Number(guess.value);

  // when there is no input
  if (!guess_number) {
    message.textContent = "Invalid input!";

    // when player wins
  } else if (guess_number === answer) {
    message.textContent = "Correct number!";
    number.textContent = answer;
    body.style.backgroundColor = "#60b347";
    number.style.width = "15rem";

    // update high score
    if (current_score > current_highscore) {
      current_highscore = current_score;
      highscore.textContent = current_highscore;
    }

    // when guess is wrong
  } else if (guess_number !== answer) {
    if (current_score > 1) {
      message.textContent = guess_number > answer ? "Too high!" : "Too low!";
      current_score -= 1;
      score.textContent = current_score;

      // when player loses
    } else {
      message.textContent = "You lost ¯\\_(ツ)_/¯";
      score.textContent = 0;
    }
  }
}

function resetGame() {
  answer = Math.ceil(Math.random() * 20);
  current_score = 5;

  number.textContent = "?";
  message.textContent = "Start guessing...";
  score.textContent = current_score;
  guess.value = "";

  body.style.backgroundColor = "#222";
  number.style.width = "13rem";
}

// Check number when player pressed enter
guess.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    check.click();
  }
});

check.addEventListener("click", checkNumber);
again.addEventListener("click", resetGame);
