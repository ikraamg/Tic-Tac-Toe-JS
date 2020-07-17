import { GameBoard, GameRound } from './app.js';
import { displayController } from './dom.js';

const round = GameRound();
const initializeGame = () => {
  const name1 = document.querySelector('#player1').value
  const name2 = document.querySelector('#player2').value
  round.player1.name = name1;
  round.player2.name = name2;
  GameBoard.resetBoard();
  displayController.addClass('#play-again','hide')
  console.log(GameBoard.testBoard)
  displayController.toggleClass('.play-form','hide');
  displayController.snackBar('Game is started');
  if (GameBoard.gamesPlayed === 0) {
    displayController.replaceText('.player1', round.player1.name);
    displayController.replaceText('.player2', round.player2.name);
  }
  round.resetPlayerArrays();
  round.moveCount = 0;
  displayController.renderBoard(initializeGame, round);
  GameBoard.gamesPlayed += 1;
};

const resetGame = () => {
  
};


displayController.btnListners(initializeGame);