const testBoard = ['X', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];
testBoard.fill('');
let moveCount = 0;
const wA = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


const hasWon = (playerArray) => wA.includes(playerArray);
const Player = (name, symbol) => {
  const arr = [];
  return { name, symbol, arr };
};

const player1 = Player('shabab', 'X');
const player2 = Player('ikraam', 'O');

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

const playerMove = (index) => {
  if (testBoard[index] === '') {
    const currentPlayer = playerOutput();
    document.querySelector(`.block${index + 1}`).firstChild.textContent = currentPlayer.symbol;
    testBoard[index] = currentPlayer.symbol;
    currentPlayer.arr.push(index);
    if (hasWon(currentPlayer.arr)) {
      window.alert(`${currentPlayer.name} has won!`);
    }
  } else {
    window.alert('Please select an open block.');
  }
};

const renderBoard = (board) => {
  board.forEach((letter, index) => {
    const block = document.querySelector(`.block${index + 1}`);
    block.addEventListener('click', () => { playerMove(index); });
    const span = document.createElement('span');
    span.textContent = letter;
    block.append(span);
  });
};


renderBoard(testBoard);