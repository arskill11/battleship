import Player from './player';
const Game = () => {
  let player1,
      player2,
      currentPlayer,
      defendingPlayer;

  function createPlayer(name, number) {
    return Player(name, number);
  }

  function createNewGame(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = this.player1;
    this.defendingPlayer = this.player2;
  }

  function switchTurn() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    this.defendingPlayer = this.defendingPlayer === this.player2 ? this.player1 : this.player2;
  }

  function checkIfGameIsOver() {
    if (this.player1.gameboard.checkAllShipsSunk()) {
      return this.player2;
    }
    if (this.player2.gameboard.checkAllShipsSunk()) {
      return this.player1;
    }
    else {
      return false;
    }
  }

  return {
    createPlayer,
    createNewGame,
    player1,
    player2,
    currentPlayer,
    defendingPlayer,
    switchTurn,
    checkIfGameIsOver,
  }
}

export default Game;