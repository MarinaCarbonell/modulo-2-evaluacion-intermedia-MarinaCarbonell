'use strict';

//SELECTORS

const fillNumber = document.querySelector ('.js-input-number');
const testButton = document.querySelector ('.js-test');
const clue = document.querySelector ('.js-clue');
const attemps = document.querySelector ('.js-attemps');

//FUNCTIONS

function getRandomNumber (max) {
  return Math.ceil (Math.random () * max);
}

const randomNumber = getRandomNumber (100);
console.log (randomNumber);

function pushTestButton () {
  const inputNumber = fillNumber.value;
  console.log (inputNumber);
  if (inputNumber < randomNumber && inputNumber > 0) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (inputNumber > randomNumber && inputNumber < 100) {
    clue.innerHTML = 'Demasiado alto';
  } else if (inputNumber < 0 || inputNumber > 100) {
    clue.innerHTML = 'El número debe estar entre 1 y 100.';
  } else {
    clue.innerHTML = 'Has ganado campeona!!!';
  }
}

//LISTENERS

testButton.addEventListener ('click', pushTestButton);
