import Ship from '../src/ship.js';

test('Ship record hits correctly', () => {
 const ship = new Ship(3)
 ship.hit()
 expect(ship.hits).toBe(1)
})

test('Ship is sunk after receiving damage equal to its length', () => {
    const ship = new Ship(2)
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true);

})