'use strict';

const fillNumber = document.querySelector ('.js-input-number');
const testButton = document.querySelector ('.js-test');
const inputClue = document.querySelector ('.js-clue');
const inputAttemps = document.querySelector ('.js-attemps');
let attemps = 0;

function getRandomNumber (max) {
  return Math.ceil (Math.random () * max);
}

const randomNumber = getRandomNumber (100);
console.log (randomNumber);

function runAttemps (attemps) {
  attemps = attemps + 1;
  inputAttemps.innerHTML = `Número de intentos: ${attemps}`;
}

function pushTestButton () {
  const inputNumber = fillNumber.value;
  if (inputNumber < randomNumber && inputNumber > 0) {
    inputClue.innerHTML = 'Demasiado bajo';
  } else if (inputNumber > randomNumber && inputNumber < 100) {
    inputClue.innerHTML = 'Demasiado alto';
  } else if (inputNumber < 0 || inputNumber > 100) {
    inputClue.innerHTML = 'El número debe estar entre 1 y 100.';
  } else if (inputNumber == randomNumber) {
    inputClue.innerHTML = 'Has ganado campeona!!!';
  }
  runAttemps (attemps);
}

testButton.addEventListener ('click', pushTestButton);
