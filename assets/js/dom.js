// eslint-disable-next-line import/extensions
import { GameBoard } from './app.js';

const displayController = (() => {
  const renderBoard = (initializeGame, round) => {
    GameBoard.testBoard.forEach((letter, index) => {
      const block = document.querySelector(`.block${index + 1}`);
      if (GameBoard.gamesPlayed === 0) {
        block.addEventListener('click', () => round.playerMove(index, displayController, initializeGame));
      }
      block.textContent = letter;
    });
  };

  const btnListners = (initializeGame) => {
    const playBtn = document.querySelector('#play');
    const resetBtn = document.querySelector('#reset');
    playBtn.addEventListener('click', initializeGame);
    resetBtn.addEventListener('click', initializeGame);
  };
  const replaceText = (selectorVariable, value) => {
    const element = document.querySelector(selectorVariable);
    element.textContent = value;
  };

  const toggleHide = function () {
    const playForm = document.querySelector('.play-form');
    playForm.classList.toggle('hide');
  };

  const snackBar = function (text) {
    const x = document.getElementById('snackbar');
    x.textContent = text;
    x.className = 'show';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);
  };

  return {
    renderBoard, btnListners, replaceText, toggleHide, snackBar,
  };
})();

export { displayController };
