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
  const moveCount = 0;
  const wA = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const isDraw = (moveCount) => {
    console.log('isDraw -> moveCount', moveCount);
    return moveCount > 8;
  };
  return {
    testBoard, gamesPlayed, moveCount, wA, isDraw,
  };
})();

export { Player, GameBoard };