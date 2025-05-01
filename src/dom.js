export function renderBoard(container, gameboard, isEnemy = false, handleClick) {
  container.innerHTML = ''; 

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;

      const isOccupied = gameboard.occupiedCords.some(
        (cord) => cord[0] === x && cord[1] === y
      );
      const isHit = gameboard.hitShots.some(
        (cord) => cord[0] === x && cord[1] === y
      );
      const isMiss = gameboard.missedShots.some(
        (cord) => cord[0] === x && cord[1] === y
      );

      if (!isEnemy && isOccupied) {
        cell.style.backgroundColor = 'gray'; 
      }

      if (isHit) {
        cell.style.backgroundColor = 'red';
      } else if (isMiss) {
        cell.style.backgroundColor = 'blue';
      }

      if (isEnemy && handleClick) {
        cell.style.cursor = 'pointer';
        cell.addEventListener('click', () => {
          handleClick([x, y]);
        });
      }

      container.appendChild(cell);
    }
  }
}
    