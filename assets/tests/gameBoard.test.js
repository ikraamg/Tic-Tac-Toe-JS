import { GameBoard } from '../js/app';

GameBoard.testBoard = ['1', '2', '', '', '', '', '', '', ''];

test('it ensures testBoard is not reset', () => {
  expect(GameBoard.testBoard).not.toEqual(['', '', '', '', '', '', '', '', '']);
});

test('it tests if resetBoard has reset the board correctly', () => {
  GameBoard.resetBoard();
  expect(GameBoard.testBoard).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('it tests if winning conditions are correct', () => {
  expect(GameBoard.wA).toEqual([[0, 1, 2],
    [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]);
});

test('it tests if played games number is correct', () => {
  expect(GameBoard.gamesPlayed).toEqual(0);
});
