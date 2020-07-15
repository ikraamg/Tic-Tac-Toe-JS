const testBoard = ['X', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];

const listeners = ()

// const addListener = (method) => {

// }

const renderBoard = (board) => {
  board.forEach((letter, index) => {
    const block = document.querySelector(`.block${index + 1}`);
    console.log(block);
    const span = document.createElement('span');
    span.textContent = letter;
    block.append(span);
  });
};

renderBoard(testBoard);