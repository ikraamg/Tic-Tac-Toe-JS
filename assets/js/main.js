import { GameBoard, GameRound } from './app.js';
import { displayController } from './dom.js';

const initializeGame = () => {
  const round = GameRound();

  GameBoard.resetBoard();
  displayController.toggleHide();
  displayController.snackBar('Game is started');
  if (GameBoard.gamesPlayed === 0) {
    displayController.replaceText('.player1', round.player1.name);
    displayController.replaceText('.player2', round.player2.name);
  }
  console.log(round.count, 'in init');
  round.resetPlayerArrays();
  // round.moveCount = 0;
  displayController.renderBoard(initializeGame, round);
  GameBoard.gamesPlayed += 1;
};

const resetGame = () => {

};


displayController.btnListners(initializeGame);