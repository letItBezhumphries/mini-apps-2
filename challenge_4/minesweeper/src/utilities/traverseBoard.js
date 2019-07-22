
const traverseBoard = (y, x, board) => {
  const adjacentSquares = [];

  if (board[y + 1] && board[y + 1][x]) {
    adjacentSquares.push([y + 1, x]);
  }

  if (board[y - 1] && board[y - 1][x]) {
    adjacentSquares.push([y - 1, x]);
  }

  if (board[y][x + 1]) {
    adjacentSquares.push([y, x + 1]);
  }

  if (board[y][x - 1]) {
    adjacentSquares.push([y, x - 1]);
  }

  if (board[y + 1] && board[y + 1][x + 1]) {
    adjacentSquares.push([y + 1, x + 1]);
  }

  if (board[y + 1] && board[y + 1][x - 1]) {
    adjacentSquares.push([y + 1, x - 1]);
  }

  if (board[y - 1] && board[y - 1][x + 1]) {
    adjacentSquares.push([y - 1, x + 1]);
  }

  if (board[y - 1] && board[y - 1][x - 1]) {
    adjacentSquares.push([y - 1, x - 1]);
  }
  return adjacentSquares;
}

export default traverseBoard;
