// eslint-disable-next-line import/extensions
import { Player, GameBoard, GameRound } from './app.js';

let player1;
let player2;
const round = GameRound();


const displayController = (() => {
  const renderBoard = (board) => {
    board.forEach((letter, index) => {
      const block = document.querySelector(`.block${index + 1}`);
      if (GameBoard.gamesPlayed === 0) {
        block.addEventListener('click', () => round.playerMove(index, displayController, player1, player2, initializeGame));
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
  GameBoard.testBoard = ['', '', '', '', '', '', '', '', ''];
  if (GameBoard.gamesPlayed === 0) {
    const name1 = document.querySelector('#player1').value;
    const name2 = document.querySelector('#player2').value;
    player1 = Player(name1, 'X');
    player2 = Player(name2, 'O');
  }
  player1.arr = [];
  player2.arr = [];
  round.moveCount = 0;
  displayController.renderBoard(GameBoard.testBoard);
  GameBoard.gamesPlayed += 1;
  console.log('Game started');
  return { player1, player2 };
};

displayController.btnListners();