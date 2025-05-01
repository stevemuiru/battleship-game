import Gameboard from './gameboard.js';

export default class Player {
  constructor() {
    this.board = new Gameboard();
  }

  attack(enemyBoard, coord) {
    enemyBoard.receiveAttack(coord);
  }
}
