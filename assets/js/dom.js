// eslint-disable-next-line import/extensions
import { Player, GameBoard } from './app.js';

const displayController = (() => {
  const renderBoard = (board) => {
    board.forEach((letter, index) => {
      const block = document.querySelector(`.block${index + 1}`);
      if (GameBoard.gamesPlayed === 0) {
        block.addEventListener('click', () => playerMove(index));
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
  return { renderBoard, btnListners };
})();

let player1;
let player2;

const initializeGame = () => {
  GameBoard.testBoard = ['', '', '', '', '', '', '', '', ''];
  if (GameBoard.gamesPlayed === 0) {
    const name1 = document.querySelector('#player1').value;
    const name2 = document.querySelector('#player2').value;
    player1 = Player(name1, 'X');
    player2 = Player(name2, 'O');
  }
  console.log(player1, 'player 1');
  player1.arr = [];
  player2.arr = [];
  GameBoard.moveCount = 0;
  displayController.renderBoard(GameBoard.testBoard);
  GameBoard.gamesPlayed += 1;
  console.log('Game started');
  return { player1, player2 };
};


const getCurrentPlayer = () => {
  GameBoard.moveCount += 1;
  if (GameBoard.moveCount % 2 === 0) {
    return player1;
  }
  return player2;
};

let loop = 0;
const playerMove = (index) => {
  if (GameBoard.testBoard[index] === '') {
    loop += 1;
    const currentPlayer = getCurrentPlayer();
    document.querySelector(`.block${index + 1}`).textContent = currentPlayer.symbol;

    GameBoard.testBoard[index] = currentPlayer.symbol;
    currentPlayer.arr.push(index);
    if (currentPlayer.hasWon(GameBoard.wA, currentPlayer.arr)) {
      console.log(`${currentPlayer.name} has won!`);
      initializeGame();
    }

    if (GameBoard.isDraw(GameBoard.moveCount)) {
      console.log('Draw');
    }
  } else {
    loop++;
    console.log(GameBoard.testBoard[index]);
    console.log('already clicked');
  }
  console.log('playerMove -> loop', loop);
};

displayController.btnListners();