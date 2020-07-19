/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/extensions
import { GameBoard } from './app.js';

const displayController = (() => {
  const renderBoard = (initializeGame, round) => {
    GameBoard.testBoard.forEach((letter, index) => {
      const block = document.querySelector(`.block${index + 1}`);
      block.addEventListener('click', () => round.playerMove(index, displayController, initializeGame));
      block.textContent = letter;
    });
  };

  const removeClick = () => {
    GameBoard.testBoard.forEach((letter, index) => {
      const block = document.querySelector(`.block${index + 1}`);
      const newBlock = block.cloneNode(true);
      block.parentNode.replaceChild(newBlock, block);
    });
  };

  const btnListners = (initializeGame, resetGame) => {
    const playBtn = document.querySelector('#play');
    const resetBtn = document.querySelector('#reset');
    const playAgainBtn = document.querySelector('#play-again');
    playBtn.addEventListener('click', initializeGame);
    resetBtn.addEventListener('click', resetGame);
    playAgainBtn.addEventListener('click', initializeGame);
  };
  const replaceText = (selectorVariable, value) => {
    const element = document.querySelector(selectorVariable);
    element.textContent = value;
  };

  const addClass = (selector, className) => {
    const element = document.querySelector(selector);
    element.classList.add(className);
  };

  const removeClass = (selector, className) => {
    const element = document.querySelector(selector);
    element.classList.remove(className);
  };

  const toggleClass = (selector, className) => {
    const element = document.querySelector(selector);
    element.classList.toggle(className);
  };

  const snackBar = (text) => {
    const x = document.getElementById('snackbar');
    x.textContent = text;
    x.className = 'show';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);
  };

  return {
    renderBoard,
    btnListners,
    replaceText,
    addClass,
    removeClass,
    toggleClass,
    snackBar,
    removeClick,
  };
})();

export { displayController };
