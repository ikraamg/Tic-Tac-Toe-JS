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
  const gamesPlayed = 0;
  const wA = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  return {
    testBoard, gamesPlayed, wA,
  };
})();

const GameRound = () => {
  const moveCount = 0;
  
  const isDraw = function () {
    console.log(this, "this in gameround")
    console.log('isDraw -> moveCount', this.moveCount);
    return this.moveCount > 8;
  };
  const getCurrentPlayer = function (player1, player2) {
    this.moveCount += 1;
    if (this.moveCount % 2 === 0) {
      return player1;
    }
    return player2;
  };
  const playerMove = function (index, displayController, player1, player2, initializeGame) {
    if (GameBoard.testBoard[index] === '') {
      console.log(this, 'in player move')
      const currentPlayer = this.getCurrentPlayer(player1, player2);
      const currentBlock = document.querySelector(`.block${index + 1}`);
      displayController.replaceText(currentBlock, currentPlayer.symbol);
      GameBoard.testBoard[index] = currentPlayer.symbol;
      currentPlayer.arr.push(index);
      if (currentPlayer.hasWon(GameBoard.wA)) {
        console.log(`${currentPlayer.name} has won!`);
        initializeGame();
      }

      if (this.isDraw()) {
        console.log('Draw');
      }
    } else {
      console.log('already clicked');
    }
  };

  return {
    moveCount, isDraw, getCurrentPlayer, playerMove,
  };
};

export { Player, GameBoard, GameRound };