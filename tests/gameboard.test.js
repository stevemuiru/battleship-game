import Gameboard from '../src/gameboard.js';
import Ship from '../src/ship.js';

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test('places a ship horizontally at the correct coordinates', () => {
    gameboard.placeShip([2, 3], 3, 'horizontal');
    const expectedCoords = [[2, 3], [2, 4], [2, 5]];

    expect(gameboard.ships[0].position).toEqual(expectedCoords);
    expect(gameboard.occupiedCords).toEqual(expect.arrayContaining(expectedCoords));
  });

  test('places a ship vertically at the correct coordinates', () => {
    gameboard.placeShip([2, 3], 3, 'vertical');
    const expectedCoords = [[2, 3], [3, 3], [4, 3]];

    expect(gameboard.ships[0].position).toEqual(expectedCoords);
    expect(gameboard.occupiedCords).toEqual(expect.arrayContaining(expectedCoords));
  });

  test('registers a hit when receiveAttack is called on a ship coordinate', () => {
    gameboard.placeShip([0, 0], 2, 'horizontal'); 
    gameboard.receiveAttack([0, 1]);
  
    expect(gameboard.hitShots).toContainEqual([0, 1]);
    expect(gameboard.ships[0].ship.hits).toBe(1);
  });
  
  test('registers a miss when receiveAttack is called on empty water', () => {
    gameboard.placeShip([0, 0], 2, 'horizontal'); 
    gameboard.receiveAttack([1, 1]);
  
    expect(gameboard.missedShots).toContainEqual([1, 1]);
  });
  
  test('allShipsSunk returns true only when all ships are sunk', () => {
    gameboard.placeShip([0, 0], 2, 'horizontal'); 
    gameboard.placeShip([1, 0], 3, 'horizontal'); 
  
  
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
  
    
    gameboard.receiveAttack([1, 0]);
    gameboard.receiveAttack([1, 1]);
  
    expect(gameboard.allShipsSunk()).toBe(false); 
  
    
    gameboard.receiveAttack([1, 2]);
  
    expect(gameboard.allShipsSunk()).toBe(true); 
  });
  
});
