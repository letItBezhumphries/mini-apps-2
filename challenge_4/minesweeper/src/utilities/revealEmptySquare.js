import traverseBoard from './traverseBoard';


function revealEmptySquares(y, x, board) {
  let selected = board[y][x];
  console.log('inside revealEmptySquares given board', selected);
  //iterate over the neighborValues
  const {
    yAxis,
    xAxis,
    adjacentValues
  } = selected;
  let emptySquares = [...adjacentValues];
  console.log('emptySquares', emptySquares);

  emptySquares.map(neighbor => {

    //   let { isFlagged, isRevealed, isEmpty, isMine, xAxis, yAxis } = neighbor;
    //   if (!isRevealed && (isEmpty || !isMine)) {

    //     let newSquare = board[yAxis][xAxis];
    //     console.log('newSquare', newSquare);
    //     newSquare.isRevealed = !isRevealed;
    //     if (newSquare.isEmpty) {
    //       revealEmptySquares(newSquare.yAxis, newSquare.xAxis, board)
    //     }
    //   }
  });
  console.log('inside revealEmptySquares this should be returned =>', board);
  return board;
}




export default revealEmptySquares;