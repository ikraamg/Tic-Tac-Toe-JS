/* eslint-disable import/extensions */
import { GameBoard, GameRound } from './app.js';
import { displayController } from './dom.js';
import '../stylesheets/style.scss';

const round = GameRound();

const initializeGame = () => {
  const name1 = document.querySelector('#player1').value;
  const name2 = document.querySelector('#player2').value;
  if (name1.length < 1 || name2.length < 1) {
    displayController.snackBar('Please enter your names');
    return;
  }
  round.player1.name = name1;
  round.player2.name = name2;
  GameBoard.resetBoard();
  displayController.addClass('#play-again', 'hide');
  displayController.snackBar('Game is started');
  displayController.replaceText('.player1', round.player1.name);
  displayController.replaceText('.player2', round.player2.name);
  round.resetPlayerArrays();
  round.moveCount = 0;
  displayController.renderBoard(initializeGame, round);
  GameBoard.incrementGameCount();
};

const resetGame = () => {
  displayController.replaceText('.player1', '');
  displayController.replaceText('.player2', '');
  GameBoard.resetBoard();
  GameBoard.testBoard.forEach((letter, index) => {
    const block = document.querySelector(`.block${index + 1}`);
    block.textContent = letter;
  });
  displayController.addClass('#play-again', 'hide');
  displayController.removeClick();
};


displayController.btnListners(initializeGame, resetGame);