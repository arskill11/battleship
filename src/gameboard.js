import Ship from "./ship";
import shipTypes from "./shipTypes";

function Gameboard() {
  let board = createNewBoard();
  let placedShips = [];

  function createNewBoard() {
    let fullBoard = [];
    for (let row = 0; row < 10; row++) {
      let innerArray = [];
      for (let col = 0; col < 10; col++) {
        innerArray[col] = null;
      }
      fullBoard[row] = innerArray;
    }
    return fullBoard;
  }

  function clearBoard(board) {
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        board[row][col] = null;
      }
    }
  }

  function clearFleet(fleet) {
    while (fleet.length > 0) {
      fleet.pop();
    }
  }

  function checkSquare(row, col) {
    if (row < 0 || col < 0 || row > 9 || col > 9) {
      return undefined;
    }
    return this.board[row][col];
  }

  function checkValidPlacement(shipLength, coordinates, axis) {
    let [row, col] = coordinates;
    let colStatic = col;
    let rowStatic = row;
    let squaresAround = [];
    let squares = [];
    for (let i = 0; i < shipLength; i++) {
      squares.push([row, col]);
      axis === 'horizontal' ? col++ : row++;
    }
    if (axis === 'horizontal') {
      for (let i = rowStatic - 1; i <= rowStatic + 1; i++) {
        for (let j = colStatic - 1; j <= colStatic + shipLength + 1; j++) {
          squaresAround.push([i, j]);
        }
      }
    }
    else if (axis === 'vertical'){
      for (let i = rowStatic - 1; i <= rowStatic + shipLength + 1; i++) {
        for (let j = colStatic - 1; j <= colStatic + 1; j++) {
          squaresAround.push([i, j]);
        }
      }
    }

    const squaresAroundValid = squaresAround.every(square => {
      let [row, col] = square;
      if (this.checkSquare(row, col) === undefined || this.checkSquare(row, col) === null) {
        return true;
      }
      return false;
    });
    const squaresValid = squares.every(square => {
      let [row, col] = square;
      if (this.checkSquare(row, col) === undefined) {
        return false;
      }
      return this.board[row][col] === null;
    })

    return {
      isValid: squaresValid && squaresAroundValid,
      squares,
    }
  }

  function placeShip(shipType, coordinates, axis) {
    const length = shipTypes[shipType].size;
    const result = this.checkValidPlacement(length, coordinates, axis);
    if (result.isValid) {
      const ship = Ship(shipType);
      ship.axis = axis;
      ship.squares = result.squares;
      result.squares.forEach(square => {
        let [row, col] = square;
        this.board[row][col] = ship;
      })
      placedShips.push(ship);
      return ship;
    }
    else {
      return 'Cannot place the ship';
    }
  }

  function removeShip(row, col) {
    const ship = this.checkSquare(row, col);
    ship.squares.forEach(square => {
      const [row, col] = square;
      this.board[row][col] = null;
    })
    const index = this.placedShips.indexOf(ship);
    this.placedShips.splice(index, 1);
  }

  function placeShipRandomly(shipType) {
    let shipLength = shipTypes[shipType].size;
    let axis = Math.random() > 0.5 ? 'horizontal' : 'vertical';
    function getRandomCoord(axis) {
      let row, col;
      if (axis === 'horizontal') {
        row = Math.floor(Math.random() * 9);
        col = Math.floor(Math.random() * (9 - shipTypes[shipType].size));
      }
      else {
        col = Math.floor(Math.random() * 9);
        row = Math.floor(Math.random() * (9 - shipTypes[shipType].size));
      }  
      return [row, col]
    }
    let coords = getRandomCoord(axis);
    let shipSquare = this.checkValidPlacement(shipLength, coords, axis);
    while (!shipSquare.isValid) {
      axis = Math.random() > 0.5 ? 'horizontal' : 'vertical';
      coords = getRandomCoord(axis);
      shipSquare = this.checkValidPlacement(shipLength, coords, axis);
    }
    return this.placeShip(shipType, coords, axis);
  }

  function placeAllShipsRandomly() {
    clearBoard(this.board);
    clearFleet(this.placedShips);
   for (let ship in shipTypes) {
    let result = this.placeShipRandomly(ship);
    while (typeof result !== 'object' || result === null) {
      result = this.placeAllShipsRandomly(ship);
    }
   }
  }

  function receiveAttack(row, col) {
    if (this.checkSquare(row, col) === undefined) {
      return 'Invalid coordinates';
    }
    const ship = this.board[row][col];
    if (ship === null) {
      this.board[row][col] = 'missed';
    }
    else if (typeof ship === 'object') {
      ship.hit();
      this.board[row][col] = 'hit';
    }
    return [this.board[row][col], [row, col], ship];
  }

  function checkAllShipsSunk() {
    return placedShips.every(ship => ship.isSunk());
  }

  return {
    board,
    placedShips,
    createNewBoard,
    checkSquare,
    checkValidPlacement,
    placeShip,
    removeShip,
    receiveAttack,
    checkAllShipsSunk,
    placeShipRandomly,
    placeAllShipsRandomly
  }
}

export default Gameboard;