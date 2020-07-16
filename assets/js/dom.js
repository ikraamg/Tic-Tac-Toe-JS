let testBoard = ['', '', '', '', '', '', '', '', ''];
let gamesPlayed = 0;
let moveCount = 0;
const wA = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


const hasWon = (playerArray) => {
  let result = false;
  wA.forEach((winCondition) => {
    if (playerArray.includes(winCondition[0]) && playerArray.includes(winCondition[1]) && playerArray.includes(winCondition[2])) {
      result = true;
    }
  });
  return result;
};

const renderBoard = (board) => {
  board.forEach((letter, index) => {
    const block = document.querySelector(`.block${index + 1}`);
    if (gamesPlayed === 0) {
      block.addEventListener('click', () => playerMove(index));
    }
    // const span = document.createElement('span');
    // span.textContent = letter;
    block.textContent = letter;
    // block.append(span);
  });
};

const isDraw = () => moveCount > 8;
const Player = (name, symbol) => {
  const arr = [];
  return { name, symbol, arr };
};

const playBtn = document.querySelector('#play');
const resetBtn = document.querySelector('#reset');
let player1;
let player2;

const initializeGame = () => {
  testBoard = ['', '', '', '', '', '', '', '', ''];
  if (gamesPlayed === 0) {
    const name1 = document.querySelector('#player1').value;
    const name2 = document.querySelector('#player2').value;
    player1 = Player(name1, 'X');
    player2 = Player(name2, 'O');
  }
  player1.arr = [];
  player2.arr = [];
  moveCount = 0;
  renderBoard(testBoard);
  gamesPlayed += 1;
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
  moveCount += 1;
  if (moveCount % 2 === 0) {
    return player1;
  }
  return player2;
};
let loop = 0;
const playerMove = (index) => {
  if (testBoard[index] === '') {
    loop++;
    console.log('im here');
    const currentPlayer = playerOutput();
    // document.querySelector(`.block${index + 1}`).firstChild.textContent = currentPlayer.symbol;
    document.querySelector(`.block${index + 1}`).textContent = currentPlayer.symbol;

    testBoard[index] = currentPlayer.symbol;
    currentPlayer.arr.push(index);
    if (hasWon(currentPlayer.arr)) {
      console.log(`${currentPlayer.name} has won!`);
      initializeGame();
    }

    if (isDraw()) {
      console.log('Draw');
    }
  } else {
    loop++;
    console.log(testBoard[index]);
    console.log('already clicked');
    // window.alert('Please select an open block.');
  }
  console.log('playerMove -> loop', loop);
};


playBtn.addEventListener('click', initializeGame);
resetBtn.addEventListener('click', initializeGame);