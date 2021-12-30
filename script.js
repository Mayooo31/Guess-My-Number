'use strict';

let secretNumber, score, highscore, numTo;

secretNumber = Math.trunc(Math.random() * 20) + 1;
score = 20;
highscore = 0;
numTo = 20;

// -Elements 🩸
const settings = document.querySelector('.settings');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const again = document.querySelector('.again');
const ok = document.querySelector('.ok');
const message = document.querySelector('.message');
const highscoreEl = document.querySelector('.highscore');
const modal = document.querySelector('.modal');
const number = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const checkEl = document.getElementById('check');
const bodyEl = document.querySelector('body');
const inputBetweenEl = document.querySelector('.input-between');

// -Close and open modal 👌👌👌
const closeOpenSettings = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

settings.addEventListener('click', closeOpenSettings);
overlay.addEventListener('click', closeOpenSettings);
btnCloseModal.addEventListener('click', closeOpenSettings);

// -Displaying message 👌👌👌
const displayMessage = function (msg) {
  message.textContent = msg;
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// - RESET GAME 👌👌👌
const init = function () {
  score = 20;
  scoreEl.textContent = score;
  number.textContent = '?';
  guessEl.value = '';
  checkEl.disabled = false;

  bodyEl.style.backgroundColor = '#222';
  number.style.width = '15rem';
  displayMessage('Start guessing...');
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// -Check button 👌👌👌
checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // -No input 👌👌👌
  if (!guess) {
    displayMessage('⛔️ No number!');
    return;
  }

  // -Player wins 👌👌👌
  if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;
    bodyEl.style.backgroundColor = '#60b347';
    number.style.width = '50rem';
    checkEl.disabled = true;

    if (score > highscore) highscore = score;
    highscoreEl.textContent = highscore;
  }

  // -Guess is wrong 👌👌👌
  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      number.textContent = secretNumber;
      scoreEl.textContent = 0;
      checkEl.disabled = true;
      bodyEl.style.backgroundColor = '#fa5252';
    }
  }
});

// -Again button 👌👌👌
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * numTo) + 1;

  //-Restart game 👌👌👌
  init();
});

// -Ok button 👌👌👌
ok.addEventListener('click', function () {
  numTo = Number(inputBetweenEl.value);

  if (numTo < 10 || numTo === '') numTo = 20;

  // -Removing element 👌👌👌
  const between = document.querySelector('.between');
  between.parentNode.removeChild(between);

  // -Adding element 👌👌👌
  const html = `<p class="between">(Between 1 and ${numTo})</p>`;

  settings.insertAdjacentHTML('beforebegin', html);

  // -Rolling new number 👌👌👌
  secretNumber = Math.trunc(Math.random() * `${numTo}`) + 1;

  //-Restart game 👌👌👌
  highscore = 0;
  highscoreEl.textContent = highscore;
  init();
});
