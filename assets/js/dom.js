const testBoard = ['X', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];

// const listeners = ()

const Player = (name, symbol) => {
   return {name, symbol}
}

player1 = Player("shabab","X")
player2 = Player("ikraam","O")

const addListener = (element,method) => {
    element.addEventListner('click',method)
}

const renderBoard = (board) => {
  board.forEach((letter, index) => {
    const block = document.querySelector(`.block${index + 1}`);
    console.log(block);
    block.addEventListener('click',()=>{playerMove(index)})
    const span = document.createElement('span');
    span.textContent = letter;
    block.append(span);
  });
};



const playerMove = (index) => {
   const playerInput = ''
   document.querySelector(`.block${index + 1}`).firstChild.textContent ='V'
   testBoard[index] = 'V'
}

renderBoard(testBoard);