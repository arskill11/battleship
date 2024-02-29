import shipTypes from './shipTypes';

let player, board;

function drawSetupBoard(setupPlayer, setupBoard) {
  player = setupPlayer;
  board = setupBoard;
  return setupBoard;
}

function drawSetupShips() {
  const setupShipsContainer = document.createElement('div');
  setupShipsContainer.classList.add('setup-ships-container');
  const setupShipsHeader = document.createElement('div');
  setupShipsHeader.classList.add('setup-ships-header');
  const setupShipsTitle = document.createElement('h3');
  setupShipsTitle.textContent = 'place your ships:';
  const setupShipsInfo = document.createElement('p');
  setupShipsInfo.textContent = 'double click to rotate (once placed)';
  const setupShipsOptions = document.createElement('div');
  setupShipsOptions.classList.add('setup-ships-options');
  const startGame = document.createElement('button');
  startGame.classList.add('setup-button-start');
  startGame.textContent = 'TO BATTLE!';
  const randomShips = document.createElement('button');
  randomShips.classList.add('setup-button-random');
  randomShips.textContent = 'randomize';
  setupShipsOptions.append(startGame, randomShips);
  const shipList = document.createElement('div');
  for (let ship in shipTypes) {
      shipList.appendChild(drawShip(shipTypes[ship]));
  }
  setupShipsHeader.append(setupShipsTitle, setupShipsInfo)
  setupShipsContainer.append(setupShipsHeader, shipList, setupShipsOptions);
  return setupShipsContainer;
}

function drawShip(ship) {
  const shipContainer = document.createElement('div');
  shipContainer.classList.add('setup-ship');
  shipContainer.id = `${ship.name}-home`;
  const shipBox = document.createElement('div');
  shipBox.id = ship.name;
  shipBox.dataset.length = ship.length;
  shipBox.classList.add('setup-ship-box');
  for (let i = 0; i < ship.length; i++) {
      const shipCell = document.createElement('div');
      shipCell.classList.add('setup-ship-cell');
      shipBox.appendChild(shipCell);
  }

  const shipName = document.createElement('p');
  if (ship.name === 'patrol') shipName.textContent = 'patrol boat';
  else shipName.textContent = ship.name;
  shipContainer.append(shipName, shipBox);
  return shipContainer;
}

const setup = {
  drawSetupBoard,
  drawSetupShips
}

export default setup;