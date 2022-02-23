'use strict';

//selectors
const players = document.querySelectorAll('.player');
const btnHold = document.querySelector('.btn--hold');
const btnRpll = document.querySelector('.btn--roll');
const currentScore = document.querySelector('.current--score');
const totalScore = document.querySelector('.score');
const diceImg = document.querySelector('.img--dice');
const winMsg = document.querySelector('.win');

//data

const dices = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

//functio/////ns

const diceRoll = function () {
  let randomNum = Math.floor(Math.random() * 6);
  diceImg.src = dices[randomNum];
  let currentPlayer;
  let inactivePlayer;
  //   defining current player

  players.forEach((player) => {
    if (player.classList.contains('active')) {
      currentPlayer = player;
    } else {
      inactivePlayer = player;
    }
  });

  let inPlayerCscore = inactivePlayer.querySelector('.current--score');
  let inPlayerTscore = inactivePlayer.querySelector('.score');
  let cPlayerCscore = currentPlayer.querySelector('.current--score');
  let cPlayerTscore = currentPlayer.querySelector('.score');
  if (winMsg.textContent !== '' || winMsg.textContent !== '') {
    cPlayerTscore.textContent = 0;
    inPlayerCscore.textContent = 0;
    inPlayerTscore.textContent = 0;
    winMsg.textContent = '';
  }

  //   incriment current score
  function incrementCurrentNum(num) {
    let crntScoreNum = +cPlayerCscore.textContent;
    crntScoreNum += num;
    cPlayerCscore.textContent = crntScoreNum;
  }
  const src = diceImg.getAttribute('src');
  if (src === 'dice-2.png') {
    incrementCurrentNum(2);
  } else if (src === 'dice-3.png') {
    incrementCurrentNum(3);
  } else if (src === 'dice-4.png') {
    incrementCurrentNum(4);
  } else if (src === 'dice-5.png') {
    incrementCurrentNum(5);
  } else if (src === 'dice-6.png') {
    incrementCurrentNum(6);
  } else {
    currentPlayer.classList.remove('active');
    inactivePlayer.classList.add('active');
    cPlayerCscore.textContent = 0;
  }
};

const holdOn = function () {
  let activePlayer;
  let unActivePlayer;
  players.forEach((player) => {
    if (player.classList.contains('active')) {
      activePlayer = player;
    } else {
      unActivePlayer = player;
    }
  });

  let score = activePlayer.querySelector('.score');
  let cScore = activePlayer.querySelector('.current--score');
  let numCscore = +cScore.textContent;
  if (winMsg.textContent !== '' || winMsg.textContent !== '') {
    score.textContent = 0;
    cScore.textContent = 0;
    unActivePlayer.querySelector('.current--score').textContent = 0;
    unActivePlayer.querySelector('.score').textContent = 0;
  }
  let numScore = +score.textContent;
  let sum = numCscore + numScore;
  if (sum < 100) {
    let numOfScore = +score.textContent;
    numOfScore += +cScore.textContent;
    score.textContent = numOfScore;

    cScore.textContent = 0;
  } else {
    score.textContent = 100;
    cScore.textContent = 0;
    let playerName = activePlayer.querySelector('.name');
    document.querySelector(
      '.win'
    ).textContent = `${playerName.textContent} won`;
    winMsg.classList.add('win-come');
  }
  activePlayer.classList.remove('active');
  unActivePlayer.classList.add('active');
};

////events handler

btnRpll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', holdOn);

///in
elem.style.color = 'red';
