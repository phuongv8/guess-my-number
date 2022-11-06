"use strict";

// Click 'check' button, collect the input value
// - if there is no value
// - if there is wrong value:
//    - if value is too high/too low
//    - decrement score by 1
//    - 'check' button change to 'retry'
//    - if score = 0, lose game, 'reset' btn
// - if there is correct value:
//     - change ? to correct number
//     - compare high score to current score, update high score
//     - 'retry' btn change to new game
//     - background color change to green, reset/new game btn red

let number = document.querySelector(".number");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
// let initial_score = Number(score.textContent);

const answer = Math.ceil(Math.random() * 20);
number.textContent = answer;

let current_score = 20;

function checkNumber() {
  const guess_number = Number(guess.value);

  if (!guess_number) {
    message.textContent = "Invalid input!";
  } else if (guess_number === answer) {
    message.textContent = "Correct number!";
  } else if (guess_number > answer) {
    if (current_score > 1) {
      message.textContent = "Too high!";
      current_score -= 1;
      score.textContent = current_score;
    } else {
      message.textContent = "You lost ¯\\_(ツ)_/¯";
      score.textContent = 0;
    }
  } else if (guess_number < answer) {
    if (current_score > 1) {
      message.textContent = "Too low!";
      current_score -= 1;
      score.textContent = current_score;
    } else {
      message.textContent = "You lost ¯\\_(ツ)_/¯";
      score.textContent = 0;
    }
  } else {
    message.textContent = "Err";
  }
}

check.addEventListener("click", checkNumber);
