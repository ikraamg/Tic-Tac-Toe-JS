import { GameBoard, GameRound } from '../js/app';
import { displayController } from '../js/dom';

const newGameRound = GameRound();
newGameRound.player1.arr = [2, 3, 4];
newGameRound.player2.arr = [0, 1, 2];

describe('resetting of player arrays', () => {
  test('it ensures playerArray is not empty', () => {
    expect(newGameRound.player1.arr).not.toEqual([]);
    expect(newGameRound.player2.arr).not.toEqual([]);
  });

  test('it tests if resetPlayerArrays works', () => {
    newGameRound.resetPlayerArrays();
    expect(newGameRound.player1.arr).toEqual([]);
    expect(newGameRound.player2.arr).toEqual([]);
  });
});

describe('checking if game is a draw', () => {
  test('if isDraw returns false for moveCount less than 8', () => {
    newGameRound.moveCount = 3;
    expect(newGameRound.isDraw()).toBe(false);
  });

  test('if isDraw returns true for moveCount greater than 8', () => {
    newGameRound.moveCount = 9;
    expect(newGameRound.isDraw()).toBe(true);
  });
});

describe('checking if current player can be obtained', () => {
  test('if getCurrentPlayer return player 2 for even numbers', () => {
    newGameRound.moveCount = 2;
    expect(newGameRound.getCurrentPlayer(newGameRound.player1, newGameRound.player2))
      .toBe(newGameRound.player2);
  });

  test('if getCurrentPlayer return player 1 for odd numbers', () => {
    newGameRound.moveCount = 1;
    expect(newGameRound.getCurrentPlayer(newGameRound.player1, newGameRound.player2))
      .toBe(newGameRound.player1);
  });
});

describe('playerMove functionality except the already tested isDraw and hasWon', () => {
  beforeAll(() => {
    document.body.innerHTML = `<p class='block3'>empty</p>
    <p id ='snackbar'></p>`;
    newGameRound.playerMove(2, displayController);
    newGameRound.moveCount = 2;
  });

  test('to see if testBoard has been updated correctly', () => {
    expect(GameBoard.testBoard[2]).toEqual(newGameRound.player2.symbol);
  });

  test('to see if playerArr has been updated correctly', () => {
    expect(newGameRound.player2.arr).toEqual([2]);
  });
});