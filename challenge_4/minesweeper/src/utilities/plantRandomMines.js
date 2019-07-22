
function plantRandomMines(board, matrix, mines) {
  let xAxis,
    yAxis, location,
    minesPlanted = 0;
  while (minesPlanted < mines) {
    xAxis = Math.floor(Math.random() * matrix);
    yAxis = Math.floor(Math.random() * matrix);
    location = board[yAxis][xAxis];

    // console.log('inside loop of plantMine', location)

    if (!location.isMine) {
      location.isMine = true;
      minesPlanted++;
    }
  }
  return board;
}

export default plantRandomMines;