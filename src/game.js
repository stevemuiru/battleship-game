import Player from './player.js';
import { renderBoard } from './dom.js';


const player = new Player();
const computer = new Player(true);


player.board.placeShip([0, 0], 3, 'horizontal');
computer.board.placeShip([1, 1], 3, 'vertical');

const playerBoardDiv = document.getElementById('player-board');
const computerBoardDiv = document.getElementById('computer-board');

function handlePlayerAttack(coord) {
  const [x, y] = coord;

  
  if (
    computer.board.hitShots.some(c => c[0] === x && c[1] === y) ||
    computer.board.missedShots.some(c => c[0] === x && c[1] === y)
  ) {
    return;
  }

  computer.board.receiveAttack(coord);
  renderBoards();

  
  if (computer.board.allShipsSunk()) {
    alert('Player wins!');
    return;
  }


  setTimeout(() => {
    let compCoord;
    do {
      compCoord = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
    } while (
      player.board.hitShots.some(c => c[0] === compCoord[0] && c[1] === compCoord[1]) ||
      player.board.missedShots.some(c => c[0] === compCoord[0] && c[1] === compCoord[1])
    );

    player.board.receiveAttack(compCoord);
    renderBoards();

    if (player.board.allShipsSunk()) {
      alert('Computer wins!');
    }
  }, 500);
}

function renderBoards() {
  renderBoard(playerBoardDiv, player.board, false);
  renderBoard(computerBoardDiv, computer.board, true, handlePlayerAttack);
}


renderBoards();
