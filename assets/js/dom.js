// eslint-disable-next-line import/extensions
import { GameBoard, GameRound } from './app.js';

const round = GameRound();

const displayController = (() => {
  const renderBoard = () => {
    GameBoard.testBoard.forEach((letter, index) => {
      const block = document.querySelector(`.block${index + 1}`);
      if (GameBoard.gamesPlayed === 0) {
        block.addEventListener('click', () => round.playerMove(index, displayController, initializeGame));
      }
      block.textContent = letter;
    });
  };

  const btnListners = () => {
    const playBtn = document.querySelector('#play');
    const resetBtn = document.querySelector('#reset');
    playBtn.addEventListener('click', initializeGame);
    resetBtn.addEventListener('click', initializeGame);
  };
  const replaceText = (element, value) => {
    element.textContent = value;
  };
  return { renderBoard, btnListners, replaceText };
})();


const initializeGame = () => {
  GameBoard.resetBoard();
  if (GameBoard.gamesPlayed === 0) {
    round.setPlayerNames();
  }
  round.resetPlayerArrays();
  round.moveCount = 0;
  displayController.renderBoard();
  GameBoard.gamesPlayed += 1;
  console.log('Game started');
};

displayController.btnListners();