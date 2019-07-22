import traverseBoard from './traverseBoard.js';

/** this should take in the new constructed board  */

function getAdjacentValues(board, matrix) {
  let newBoard = board;
  //iterate over the newBoard checking if each sqaure is a mine
  for (var y = 0; y < matrix; y++) {
    for (var x = 0; x < matrix; x++) {
      //if it is not a mine set a starting value and declare variable to store = ?
      if (board[y][x].isMine !== true) {
        let newValue = 0;
        let currentSquare = board[y][x];
        const adjacentSquares = traverseBoard(currentSquare.yAxis, currentSquare.xAxis, board);
        currentSquare.adjacentValues = adjacentSquares;
        // console.log('previous value', newBoard[y][x].isEmpty)
        //iterate over the array of adjacentSquares checking if each square is a mine
        adjacentSquares.map((adjSquare) => {

          if (board[adjSquare[0]][adjSquare[1]].isMine) {
            newValue++; // don't I need to be setting this
          }
        });
        if (newValue === 0) {
          newBoard[y][x].isEmpty = true; //empty reveal board protocol?
        }
        // console.log(newValue);
        newBoard[y][x].value = newValue;
        // console.log('this is the newBoard with new values', newBoard[y][x].value) 
      }
    }
  }
  // console.log('this is the newboard with values ready to be added', newBoard[y][x].value)
  // console.log('this is the store', this.state);
  // store.dispatch(randomizeGameBoard(newBoard))
  return newBoard;
}


export default getAdjacentValues;
