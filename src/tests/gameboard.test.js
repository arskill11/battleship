import { experiments } from "webpack";
import Gameboard from "../gameboard";

let gameboard;
beforeEach(() => {
  gameboard = Gameboard();
})

test('Create a new board 8x8', () => {
  for (let row = 0; row < gameboard.board.length; i++) {
    for (let col = 0; col < gameboard.board[row].length; j++) {
      expect(gameboard.board[row][col]).toBe(null);
    }
  }
})

test('Check squares value', () => {
  expect(gameboard.checkSquare(0, 0)).toBe(null);
  expect(gameboard.checkSquare(7, 7)).toBe(null);
  expect(gameboard.checkSquare(7, 8)).toBe(undefined);
  expect(gameboard.checkSquare(8, 7)).toBe(undefined);
})

test('Place a ship horizontally', () => {
  const submarine = gameboard.placeShip('submarine', [0, 0], 'horizontal');
  expect(gameboard.checkSquare(0, 0)).toBe(submarine);
  expect(gameboard.checkSquare(0, 1)).toBe(submarine);
  expect(gameboard.checkSquare(0, 2)).toBe(submarine);
  expect(gameboard.checkSquare(0, 3)).not.toBe(submarine);
})

test('Place a ship vertically', () => {
  const submarine = gameboard.placeShip('submarine', [3, 5], 'vertical');
  expect(gameboard.checkSquare(3, 5)).toBe(submarine);
  expect(gameboard.checkSquare(4, 5)).toBe(submarine);
  expect(gameboard.checkSquare(5, 5)).toBe(submarine);
  expect(gameboard.checkSquare(0, 5)).not.toBe(submarine);
})

test('Cannot place 2 ships on the same area', () => {
  const submarine = gameboard.placeShip('submarine', [1, 1], 'horizontal');
  expect(gameboard.checkSquare(1, 1)).toBe(submarine);
  const carrier = gameboard.placeShip('carrier', [1, 1], 'vertical');
  expect(gameboard.checkSquare(1, 1)).toBe(submarine);
})

test('Hit a ship', () => {
  const submarine = gameboard.placeShip('submarine', [1, 1], 'horizontal');
  expect(gameboard.checkSquare(1, 1)).toBe(submarine);
  gameboard.receiveAttack(1, 1);
  expect(gameboard.checkSquare(1, 1)).toBe('hit');
  expect(gameboard.checkSquare(1, 2)).toBe(submarine);
  gameboard.receiveAttack(5, 6);
  expect(gameboard.checkSquare(5, 6)).toBe('missed');
})

test('Report 1 sunk ship', () => {
  const submarine = gameboard.placeShip('submarine', [1, 1], 'horizontal');
  gameboard.receiveAttack(1, 1);
  gameboard.receiveAttack(1, 2);
  gameboard.receiveAttack(1, 3);
  expect(gameboard.checkAllShipsSunk()).toBeTruthy();
})

test('Report 2 sunk ships', () => {
  const submarine = gameboard.placeShip('submarine', [0, 0], 'horizontal');
  const destroyer = gameboard.placeShip('destroyer', [2, 2], 'vertical');
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(0, 2);
  expect(gameboard.checkAllShipsSunk()).toBeFalsy();
  gameboard.receiveAttack(2, 2);
  gameboard.receiveAttack(3, 2);
  gameboard.receiveAttack(4, 2);
  expect(gameboard.checkAllShipsSunk()).toBeTruthy();
})

test('Place a random ship of length 4', () => {
  const battleship = gameboard.placeShipRandomly('battleship');
  let shipSquares = 0;
  for (let row = 0; row < 8; row++){
    for (let col = 0; col < 8; col++){
      if (gameboard.checkSquare(row, col) === battleship) shipSquares++;
    }
  }
  expect(shipSquares).toBe(4);
})

test('Place all ships randomly', () => {
  gameboard.placeAllShipsRandomly();
  let shipSquares = 0;
  for (let row = 0; row < 8; row++){
    for (let col = 0; col < 8; col++){
      if (typeof gameboard.checkSquare(row, col) === 'object' && gameboard.checkSquare(row, col) !== null) shipSquares++;
    }
  }
  expect(gameboard.placedShips.length).toBe(5);
  expect(shipSquares).toBe(17)
})