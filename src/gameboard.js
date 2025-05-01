import Ship from './ship.js';

export default class Gameboard {
  constructor() {
    this.ships = [];
    this.occupiedCords = [];
    this.missedShots = [];
    this.hitShots = [];
  }

  placeShip(startingCordinate, length, direction) {
    const ship = new Ship(length);
    const [x, y] = startingCordinate;
    const cords = [];

    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal') {
        cords.push([x, y + i]);
      } else if (direction === 'vertical') {
        cords.push([x + i, y]);
      }
    }

    this.ships.push({
      ship: ship,
      position: cords,
      hits: []
    });

    this.occupiedCords.push(...cords);
  }

  receiveAttack(coord) {
    for (let shipObj of this.ships) {
      for (let pos of shipObj.position) {
        if (pos[0] === coord[0] && pos[1] === coord[1]) {
          shipObj.ship.hit();
          this.hitShots.push(coord);
          return;
        }
      }
    }
    this.missedShots.push(coord);
  }
  
  allShipsSunk() {
    for (let shipObj of this.ships) {
      if (!shipObj.ship.isSunk()) {
        return false;
      }
    }
    return true;
    

  }

}
