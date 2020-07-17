const Player = (name, symbol) => {
  const arr = [];
  const hasWon = function (winArr) {
    let result = false;
    winArr.forEach((winCondition) => {
      if (this.arr.includes(winCondition[0]) && this.arr.includes(winCondition[1]) && this.arr.includes(winCondition[2])) {
        result = true;
      }
    });
    return result;
  };
  return {
    name, symbol, arr, hasWon,
  };
};

const GameBoard = (() => {
  const testBoard = ['', '', '', '', '', '', '', '', ''];
  let gamesPlayed = 0;
  const wA = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const resetBoard = function () { this.testBoard = ['', '', '', '', '', '', '', '', '']; };
  return {
    testBoard, gamesPlayed, wA, resetBoard,
  };
})();

const GameRound = () => {
  const moveCount = 0;
  const player1 = Player('', 'X');
  const player2 = Player('', 'O');

  const resetPlayerArrays = function () {
    player1.arr = [];
    player2.arr = [];
  };

  const isDraw = function () {
    return this.moveCount > 8;
  };

  const getCurrentPlayer = function (player1, player2) {
    this.moveCount += 1;
    console.log(this.moveCount);
    if (this.moveCount % 2 === 0) {
      return player1;
    }
    return player2;
  };

  const playerMove = function (index, displayController, initializeGame) {
    if (GameBoard.testBoard[index] === '') {
      const currentPlayer = this.getCurrentPlayer(player1, player2);
      displayController.replaceText(`.block${index + 1}`, currentPlayer.symbol);
      GameBoard.testBoard[index] = currentPlayer.symbol;
      currentPlayer.arr.push(index);
      if (currentPlayer.hasWon(GameBoard.wA)) {
        displayController.snackBar(`${currentPlayer.name} has won!`);
        this.moveCount = 0
        displayController.removeClass('#play-again','hide')
        // setTimeout(initializeGame,4000)
      }

      if (this.isDraw()) {
        displayController.snackBar('Draw');
        this.moveCount = 0
        setTimeout(initializeGame,4000)
      }
    } else {
      displayController.snackBar('Please select empty block');
    }
  };

  return {
    moveCount, isDraw, getCurrentPlayer, playerMove, player1, player2, resetPlayerArrays,
  };
};

export { Player, GameBoard, GameRound };