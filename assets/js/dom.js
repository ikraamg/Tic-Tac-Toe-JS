const testBoard = ['X', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];
let moveCount = 0;
const wA = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


const hasWon = (playerArray) => {
  let result = false
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
    block.addEventListener('click', () => { playerMove(index); });
    // const span = document.createElement('span');
    // span.textContent = letter;
    block.textContent = letter
    // block.append(span);
  });
};

const isDraw = () => moveCount > 8;
const Player = (name, symbol) => {
  const arr = [];
  return { name, symbol, arr };
};

const playBtn = document.querySelector('#play')
let player1
let player2
const initializeGame = () => {
  testBoard.fill('');
  const name1 = document.querySelector('#player1').value
  const name2 = document.querySelector('#player2').value
  player1 = Player(name1, 'X');
  player2 = Player(name2, 'O');
  renderBoard(testBoard);
  console.log('Game started')
  return { player1, player2 }
}



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
    // document.querySelector(`.block${index + 1}`).firstChild.textContent = currentPlayer.symbol;
    document.querySelector(`.block${index + 1}`).textContent = currentPlayer.symbol;

    testBoard[index] = currentPlayer.symbol;
    currentPlayer.arr.push(index);
    if (hasWon(currentPlayer.arr)) {
      window.alert(`${currentPlayer.name} has won!`);
      initializeGame()
    }

    if (isDraw()) {
      window.alert("Draw")
    }
  } else {
    window.alert('Please select an open block.');
  }
};

playBtn.addEventListener('click',initializeGame)