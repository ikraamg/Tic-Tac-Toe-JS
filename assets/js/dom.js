// eslint-disable-next-line import/extensions
import {Player, GameBoard} from './app.js'

// let testBoard = ['', '', '', '', '', '', '', '', ''];
// let gamesPlayed = 0;
// let moveCount = 0;
// const wA = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


// const hasWon = (playerArray) => {
//   let result = false;
//   wA.forEach((winCondition) => {
//     if (playerArray.includes(winCondition[0]) && playerArray.includes(winCondition[1]) && playerArray.includes(winCondition[2])) {
//       result = true;
//     }
//   });
//   return result;
// };

const renderBoard = (board) => {
  board.forEach((letter, index) => {
    const block = document.querySelector(`.block${index + 1}`);
    if (GameBoard.gamesPlayed === 0) {
      block.addEventListener('click', () => playerMove(index));
    }
    block.textContent = letter;
  });
};

// const isDraw = () => moveCount > 8;
// const Player = (name, symbol) => {
//   const arr = [];
//   return { name, symbol, arr };
// };

const playBtn = document.querySelector('#play');
const resetBtn = document.querySelector('#reset');
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
  console.log(player1, "player 1")
  player1.arr = [];
  player2.arr = [];
  GameBoard.moveCount = 0;
  renderBoard(GameBoard.testBoard );
  GameBoard.gamesPlayed += 1;
  console.log('Game started');
  return { player1, player2 };
};

// const resetGame = () => {
//   gamesPlayed = 0;
//   initializeGame();
// };


// const addListener = (element, method) => {
//   element.addEventListner('click', method);
// };


const playerOutput = () => {
  GameBoard.moveCount += 1;
  if (GameBoard.moveCount % 2 === 0) {
    return player1;
  }
  return player2;
};
let loop = 0;
const playerMove = (index) => {
  if (GameBoard.testBoard[index] === '') {
    loop++;
    console.log('im here');
    const currentPlayer = playerOutput();
    // document.querySelector(`.block${index + 1}`).firstChild.textContent = currentPlayer.symbol;
    document.querySelector(`.block${index + 1}`).textContent = currentPlayer.symbol;

    GameBoard.testBoard[index] = currentPlayer.symbol;
    currentPlayer.arr.push(index);
    if (currentPlayer.hasWon(GameBoard.wA, currentPlayer.arr)) {
      console.log(`${currentPlayer.name} has won!`);
      initializeGame();
    }

    if (GameBoard.isDraw()) {
      console.log('Draw');
    }
  } else {
    loop++;
    console.log(GameBoard.testBoard[index]);
    console.log('already clicked');
    // window.alert('Please select an open block.');
  }
  console.log('playerMove -> loop', loop);
};


playBtn.addEventListener('click', initializeGame);
resetBtn.addEventListener('click', initializeGame);