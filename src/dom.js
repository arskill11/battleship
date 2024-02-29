import Game from "./game";
import setup from "./shipChoice";

const container = document.querySelector('.content');
const newGameBtn = document.querySelector('.newGameBtn');
const victoryDialog = document.querySelector('.victoryDialog');
newGameBtn.addEventListener('click', newGame);

const game = Game();
newGame();

function startGame(player1, player2) {
  game.createNewGame(player1, player2);
  drawGame();
}

function newGame() {
  clearField(container);  
  const newPlayer = game.createPlayer('Newbie', 1);
  const newBot = game.createPlayer(false, 2);
  // newPlayer.gameboard.placeAllShipsRandomly();
  drawSetup(newPlayer);
  newBot.gameboard.placeAllShipsRandomly();
  const startGameBtn = document.querySelector('.startGameBtn');
  startGameBtn.addEventListener('click', (e) => {
    if (newPlayer.gameboard.placedShips.length === 5) {
      startGame(newPlayer, newBot);
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
  container.append(oneContainer, twoContainer);
}

function drawSetup(player) {
  clearContainer(container);
  const setupBoard = setup.drawSetupBoard(player, drawBoardContainer(player));
  const setupShips = setup.drawSetupShips();
  const ships = setupShips.querySelectorAll('.setup-ship-box');
  container.append(setupBoard, setupShips);
}

function clearContainer(container) {
  while (container.firstChild) container.removeChild(container.firstChild);
}

function drawBoardContainer(player) {
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('boardCont');
  const playerBoard = drawBoard(player);
  boardContainer.append(playerBoard);
  return boardContainer;
}

function drawBoard(player) {
  const board = document.createElement('div');
  board.classList.add('board');
  board.classList.add('dropzone');
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.player = player ? player.number : 0;
      cell.dataset.row = row;
      cell.dataset.col = col;
      board.appendChild(cell);

      if (player && player.isAI) {
        cell.addEventListener('click', getAttack);
      }
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
    if (ship.isSunk()) {
      ship.squares.forEach(square => {
        const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${square[0]}'][data-col='${square[1]}']`)
        cell.classList.add('cell-sunk')
      })
    }
  }
  if (result === 'missed') {
    cell.classList.add('cell-missed');
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