import { GameBoard } from './app.js';
import { displayController, round } from './dom.js';

const initializeGame = () => {
  GameBoard.resetBoard();
  if (GameBoard.gamesPlayed === 0) {
    round.setPlayerNames();
  }
  round.resetPlayerArrays();
  round.moveCount = 0;
  displayController.renderBoard(initializeGame);
  GameBoard.gamesPlayed += 1;
  console.log('Game started');
};


displayController.btnListners(initializeGame);