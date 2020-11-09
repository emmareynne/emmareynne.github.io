console.log("Thank you for playing Emma's game.")
// Your function(s) should go here that will interact with the webpage or DOM

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastGuess = document.querySelector('.lastGuess');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1
let reset;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if(guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastGuess.textContent = "Congratulations! Your guess was correct!";
    lastGuess.style.backgroundColor = 'green';
    lowOrHigh.textContent = '';
    setGameOver()
  } else if (guessCount == 10) {
    lastGuess.textContent = 'You suck!'
    setGameOver();
  } else {
    lastGuess.textContent = "Boooo... guess again."
    lastGuess.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "too small...";
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "TOO BIG!!!";
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame)
}

function resetGame() {
  guessCount = 1;

  const resetResults = document.querySelectorAll ('#results p');
  for (let i = 0; i < resetResults.length; i++) {
    resetResults[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastGuess.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}