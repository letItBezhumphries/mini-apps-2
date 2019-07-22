var flagMineSquare = (state = { board: [], gameStatus: {}}, action) => {
  console.log('inside flagMineSquare reducer', action)
  //remember need to return a new object with es6 deconstruction syntax 
  switch (action.type) {
    case 'FLAG_SQUARE':
      const { y, x } = action;
      let board = state.board;
      let selectedSquare = board[y][x];
      const { isMine, isFlagged } = selectedSquare;
      const { minesLeft } = state.gameStatus;
      let newSquare = { ...selectedSquare, isFlagged: !isFlagged };

      if(selectedSquare.isMine) {
          
      }


      return { ...state, selectedSquare: action.selectedSquare }
    default:
      return state;
  }
};

export default flagMineSquare;