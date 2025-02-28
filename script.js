"use strict";

let randomDiceNumber = 1;

const elements = document.querySelectorAll(".num");
const rollBtn = document.querySelector(".roll");
const dice = document.querySelector(".dice");
const screenReaderMessage = document.querySelector("#screen-reader-message");

const updateScreenReaderMessage = function () {
  screenReaderMessage.textContent = `You rolled ${randomDiceNumber} on the dice.`;
};

const changeDiceUI = function () {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains(`num${randomDiceNumber}`)) {
      elements[i].style.visibility = "visible";
    } else {
      elements[i].style.visibility = "hidden";
    }
  }
};

const rollTheDice = function () {
  rollBtn.disabled = true;
  randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.style.animation = "rotation 0.3s infinite linear";
  setTimeout(() => {
    dice.style.animation = "none";
    changeDiceUI();
    rollBtn.disabled = false;
    rollBtn.focus();
  }, 1000);
  updateScreenReaderMessage();
};

changeDiceUI();
rollBtn.addEventListener("click", rollTheDice);
