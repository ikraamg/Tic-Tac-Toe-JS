const Player = (name, symbol) => {
  const arr = [];
  const hasWon = (winArr, playerArr) => {
    let result = false;
    winArr.forEach((winCondition) => {
      if (playerArr.includes(winCondition[0]) && playerArr.includes(winCondition[1]) && playerArr.includes(winCondition[2])) {
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
  const isDraw = (moveCount) => {
    console.log('isDraw -> moveCount', moveCount);
    return moveCount > 8;
  };
  const getCurrentPlayer = (player1, player2, round) => {
    round.moveCount += 1;
    if (round.moveCount % 2 === 0) {
      return player1;
    }
    return player2;
  };
  const playerMove = (index, round, displayController, player1, player2, initializeGame) => {
    if (GameBoard.testBoard[index] === '') {
      const currentPlayer = round.getCurrentPlayer(player1, player2, round);
      const currentBlock = document.querySelector(`.block${index + 1}`);
      displayController.replaceText(currentBlock, currentPlayer.symbol);
      GameBoard.testBoard[index] = currentPlayer.symbol;
      currentPlayer.arr.push(index);
      if (currentPlayer.hasWon(GameBoard.wA, currentPlayer.arr)) {
        console.log(`${currentPlayer.name} has won!`);
        initializeGame();
      }

      if (round.isDraw(round.moveCount)) {
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