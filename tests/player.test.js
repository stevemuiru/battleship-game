import Player from '../src/player.js';
import Gameboard from '../src/gameboard.js';


describe('Player', () => {
  test('should initialize with its own Gameboard', () => {
    const player = new Player();
    expect(player.board).toBeInstanceOf(Gameboard);
  });

  test('should be able to attack enemy board', () => {
    const player1 = new Player();
    const player2 = new Player();

    player2.board.placeShip([0, 0], 2, 'horizontal');


    player1.attack(player2.board, [0, 0]);

    
    expect(player2.board.hitShots).toContainEqual([0, 0]);
  });
});
