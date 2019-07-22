import getAdjacentValues from './getAdjacentValues.js';
import plantRandomMines from './plantRandomMines.js';


export default function initBoard(board, mineCount) {
  let newBoard = [];
  let matrix = board.length;

  for (var y = 0; y < matrix; y++) {
    newBoard.push([]);
    for (var x = 0; x < matrix; x++) {

      newBoard[y][x] = {
        yAxis: y,
        xAxis: x,
        isMine: false,
        position: y.toString() + x.toString(),
        value: 0,
        isRevealed: false,
        isEmpty: false,
        isFlagged: false,
        adjacentValues: []
      };
    }
  }

  // console.log('inside initBoard', newBoard);

  plantRandomMines(newBoard, matrix, mineCount);
  return getAdjacentValues(newBoard, matrix);
}