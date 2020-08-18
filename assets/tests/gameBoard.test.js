import { GameBoard } from '../js/app';


GameBoard.testBoard = ['1', '2', '', '', '', '', '', '', ''];

test('it ensures testBoard is not reset', () => {
  expect(GameBoard.testBoard).not.toEqual(['', '', '', '', '', '', '', '', '']);
});

test('it tests if resetBoard has reset the board correctly', () => {
  GameBoard.resetBoard();
  expect(GameBoard.testBoard).toEqual(['', '', '', '', '', '', '', '', '']);
});