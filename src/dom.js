import Game from "./game";
import shipTypes from "./shipTypes";

const container = document.querySelector('.content');
const newGameBtn = document.querySelector('.newGameBtn');
const victoryDialog = document.querySelector('.victoryDialog');
newGameBtn.addEventListener('click', newGame);

let currentFleet = {};  
const game = Game();
newGame();

function startGame(player1, player2) {
  game.createNewGame(player1, player2);

  const botCells = document.querySelectorAll('.bot-cell');
  botCells.forEach(c => {
    c.addEventListener('click', getAttack);
  });
}

function newGame() {
  clearField(container);  
  const newPlayer = game.createPlayer('Newbie', 1);
  const newBot = game.createPlayer(false, 2);
  newBot.gameboard.placeAllShipsRandomly();
  const startGameBtn = document.querySelector('.startGameBtn');
  game.createNewGame(newPlayer, newBot);
  drawGame();

  document.querySelector('.placeRandomlyButton')
  .addEventListener('click', (e) => {
    newPlayer.gameboard.placeAllShipsRandomly();
    populateBoard(newPlayer, document.querySelector('.board'));
    currentFleet = {};
    document.querySelectorAll('.cell').forEach(cell => {
      cell.removeEventListener('click', handleMouseClick);
      cell.removeEventListener('mouseover', handleMouseOver);
      cell.removeEventListener('mouseleave', handleMouseLeave);  
    })
  })

  startGameBtn.addEventListener('click', (e) => {
    if (newPlayer.gameboard.placedShips.length === 5) {
      startGame(newPlayer, newBot);
      container.removeChild(document.querySelector('.shipSetupContainer'));
    }
  })
}

function clearField(field) {
  while(field.firstChild) {
    field.removeChild(field.firstChild);
  }
}

function drawGame() {
  clearField(container);
  const oneContainer = drawBoardContainer(game.player1);
  const twoContainer = drawBoardContainer(game.player2);
  populateBoard(game.player1, oneContainer.querySelector('.board'));
  const shipC = shipChoice();
  container.append(shipC, oneContainer, twoContainer);
}

function shipChoice() {
  const shipSetupContainer = document.createElement('div');
  shipSetupContainer.classList.add('shipSetupContainer');

  const shipSetupBtnContainer = document.createElement('div');
  shipSetupBtnContainer.classList.add('shipSetupButtons');

  const rotateBtn = document.createElement('button');
  rotateBtn.classList.add('rotate-button');
  rotateBtn.textContent = 'Rotate';

  const placeShipsRandomlyBtn = document.createElement('button');
  placeShipsRandomlyBtn.classList.add('placeRandomlyButton');
  placeShipsRandomlyBtn.textContent = 'Place randomly';

  rotateBtn.addEventListener('click', (e) => {
    currentFleet.dir = currentFleet.dir === 'horizontal' ?
    currentFleet.dir = 'vertical' : 'horizontal';
  });

  for (let ship in shipTypes) {
    shipSetupContainer.appendChild(drawShip(shipTypes[ship]));
  }

  shipSetupBtnContainer.appendChild(rotateBtn);
  shipSetupBtnContainer.appendChild(placeShipsRandomlyBtn);
  shipSetupContainer.appendChild(shipSetupBtnContainer);

  return shipSetupContainer;
}

function drawShip(ship) {
  const shipContainer = document.createElement('div');
  shipContainer.classList.add('shipContainer');
  shipContainer.id = `${ship.class}-home`;

  const shipBox = document.createElement('div');
  shipBox.id = ship.class;
  shipBox.dataset.length = ship.size;
  shipBox.classList.add('shipBox');

  shipBox.addEventListener('click', () => {
    shipBox.classList.add('chosenShip');
    currentFleet = {
      ...ship,
      dir: 'horizontal',
    };
    console.log(currentFleet);
  });

  for (let i = 0; i < ship.size; i++) {
    const shipCell = document.createElement('div');
    shipCell.classList.add('shipCell');
    shipCell.dataset.shipId = ship.id;
    shipCell.dataset.number = i;
    shipBox.appendChild(shipCell);
  }

  shipContainer.appendChild(shipBox);
  return shipContainer;
}

function drawBoardContainer(player) {
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('boardCont');
  const boardHeader = document.createElement('h2');
  boardHeader.classList.add('boardHeader');
  if (player.isAI) {
    boardHeader.textContent = 'Bot\'s board';
  } else {
    boardHeader.textContent = 'Your board';
  }
  const playerBoard = drawBoard(player);
  boardContainer.appendChild(boardHeader);
  boardContainer.appendChild(playerBoard);
  return boardContainer;
}

function handleMouseOver(e) {
  let row = e.target.getAttribute('data-row');
  let col = e.target.getAttribute('data-col');
  changeClassOnHover(row, col, 'add');
}

function changeClassOnHover(row, col, option) {
  const playerBoard = document.querySelector('.board');
  if (option === 'add') {
    if (currentFleet.dir === 'horizontal' && +currentFleet.size + +col <= 10) {
      for (let i = 0; i < currentFleet.size; i++) {
        playerBoard.querySelector(`[data-row='${row}'][data-col='${col}']`).classList.add('hovered');
        col++;
      }
    }
    if (currentFleet.dir === 'vertical' && +currentFleet.size + +row <= 10) {
      for (let i = 0; i < currentFleet.size; i++) {
        playerBoard.querySelector(`[data-row='${row}'][data-col='${col}']`).classList.add('hovered');
        row++;
      }
    }
  }
  else if (option === 'remove') {
    if (currentFleet.dir === 'horizontal' && +currentFleet.size + +col <= 10) {
      for (let i = 0; i < currentFleet.size; i++) {
        playerBoard.querySelector(`[data-row='${row}'][data-col='${col}']`).classList.remove('hovered');
        col++;
      }
    }
    if (currentFleet.dir === 'vertical' && +currentFleet.size + +row <= 10) {
      for (let i = 0; i < currentFleet.size; i++) {
        playerBoard.querySelector(`[data-row='${row}'][data-col='${col}']`).classList.remove('hovered');
        row++;
      }
    }  
  }
}

function handleMouseLeave(e) {
  let row = e.target.getAttribute('data-row');
  let col = e.target.getAttribute('data-col');
  changeClassOnHover(row, col, 'remove');
}

function handleMouseClick(row, col, player) {
  const playerBoard = document.querySelector('.board');
  for (let sh in shipTypes) {
    if (currentFleet.id == shipTypes[sh].id &&
    player.gameboard.checkValidPlacement(currentFleet.size, [row, col], currentFleet.dir).isValid) {
      player.gameboard.placeShip(sh, [row, col], currentFleet.dir); 
      changeClassOnHover(row, col, 'remove');
      removeSetupShip(shipTypes[sh].class);
    }
  }
  populateBoard(player, playerBoard);
}

function removeSetupShip(shipClass) {
  const shipContainer = document.querySelector('.shipSetupContainer');
  const setupShips = document.querySelectorAll('.shipContainer');
  setupShips.forEach(ship => {
    if (ship.id  === `${shipClass}-home`) {
      ship.removeChild(ship.firstChild);
      currentFleet = {};
    }
  })
}

function drawBoard(player) {
  const board = document.createElement('div');
  if (player.isAI) {
    board.classList.add('bot-board');
  } else {
    board.classList.add('board');
  }

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      if (player.isAI) {
        cell.classList.add('bot-cell');
      } else {
        cell.classList.add('cell');
      }
      cell.dataset.player = player ? player.number : 0;
      cell.dataset.row = row;
      cell.dataset.col = col;
      if (player && !player.isAI) {
        cell.addEventListener('mouseover', handleMouseOver);
        cell.addEventListener('mouseleave', handleMouseLeave);  
        cell.addEventListener('click', (e) => {
          let row = e.target.getAttribute('data-row');
          let col = e.target.getAttribute('data-col');
          handleMouseClick(row, col, player);
        });
      }

      board.appendChild(cell);
    }
  }
  return board;
}

function getAttack(event) {
  const cell = event.target;
  const defendingPlayerNumber = cell.dataset.player;
  const attackingPlayerNumber = defendingPlayerNumber === '1' ? '2' : '1';
  const attackingPlayer = game[`player${attackingPlayerNumber}`];
  const defendingPlayer = game[`player${defendingPlayerNumber }`];
  if (game.currentPlayer !== attackingPlayer) {
    return;
  }
  const row = cell.dataset.row;
  const col = cell.dataset.col;

  const [result, coords, ship] = attackingPlayer.attack(defendingPlayer, row, col);
  markAttackedCell(cell, defendingPlayerNumber, result, ship);
  cell.removeEventListener('click', getAttack);
  nextTurn();
}

function attackAI(ai) {
  if (ai !== game.currentPlayer) {
    return;
  }
  const defendingPlayerNumber = game.defendingPlayer === game.player1 ? '1' : '2';
  const [result, coords, ship] = ai.attack(game.defendingPlayer);
  const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${coords[0]}'][data-col='${coords[1]}']`);
  markAttackedCell(cell, defendingPlayerNumber, result, ship);
  nextTurn();
}

function markAttackedCell(cell, defendingPlayerNumber, result, ship) {
  if (result === 'hit') {
    cell.classList.add('cell-hit');
    cell.textContent = '\u00D7';
    if (ship.isSunk()) {
      ship.squares.forEach(square => {
        const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${square[0]}'][data-col='${square[1]}']`)
        cell.classList.add('cell-sunk')
      })
    }
  }
  if (result === 'missed') {
    cell.classList.add('cell-missed');
    cell.textContent = '\u2022';
  }
}

function nextTurn() {
  const winner = game.checkIfGameIsOver();
  if (winner) {
    return endGame(winner);
  }

  game.switchTurn();
  if (game.currentPlayer.isAI) {
    attackAI(game.currentPlayer);
  }
}

function populateBoard(player, board) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const square = player.gameboard.board[row][col];
      const cell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
      if (square !== null && typeof square === 'object') {
        cell.classList.add('cell-ship');
      }
      else {
        cell.classList.remove('cell-ship');
      }
    }
  }
}

function endGame(winner) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.removeEventListener('click', getAttack);
  })
  showVictoryDialog(winner);
}

function showVictoryDialog(winner) {
  const name = document.createElement('h2');
  const closeBtn = document.createElement('button');
  name.classList.add('winner');
  closeBtn.classList.add('dialogCloseBtn');
  name.textContent = `The winner is ${winner.name}`;
  closeBtn.textContent = 'CLose';
  closeBtn.addEventListener('click', () => {
    victoryDialog.close();
  });

  victoryDialog.appendChild(name);
  victoryDialog.appendChild(closeBtn);
  victoryDialog.showModal();
}

export default container;