import { Player, GameBoard } from '../js/app';

const player1 = Player('a', 'X');
const player2 = Player('b', 'O');
player2.arr = [0, 1, 2];

test('it tests if player1 name is correct', () => {
  expect(player1.name).toBe('a');
});

test('it tests if player2 name is correct', () => {
  expect(player2.name).toBe('b');
});

test('it tests if player1 symbol is correct', () => {
  expect(player1.symbol).toBe('X');
});

test('it tests if player2 symbol is correct', () => {
  expect(player2.symbol).toBe('O');
});

test('it tests if player has not won', () => {
  expect(player1.hasWon(GameBoard.wA)).toBe(false);
});

test('it tests if player has won', () => {
  expect(player2.hasWon(GameBoard.wA)).toBe(true);
});