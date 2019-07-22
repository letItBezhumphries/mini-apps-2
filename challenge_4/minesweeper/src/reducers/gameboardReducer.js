import store from '../store/store.js';


const gameboardReducer = (state = store, action) => {
  console.log('this is the gameboardReducer', state);
  const prevBoard = state.board;
  const prevGameStatus = state.gameStatus;

  switch (action.type) {
    case 'INITIALIZE_GAMEBOARD':
      const newState = Object.assign({}, state);
      newState.board = action.board;
      newState.gameStatus = action.gameStatus;
      return newState;
    case 'SELECT_SQUARE':
      var {
        y, x
      } = action;
      let selectedSquare = prevBoard[y][x];
      console.log('selectSq reducer', selectedSquare);
      let newSquare = {
        ...selectedSquare,
        isRevealed: true
      };
      let boardRow = prevBoard[y];
      let newRow = [...boardRow.map(square => square.xAxis === x ? newSquare : square)];
      let newBoard = [...prevBoard.map((row, i, board) => i === y ? board[i] = newRow : row)];
      //somewhere here would want to call the recursive revealEmptySquares or revealNeighboring squares?
      return {
        ...state, board: newBoard, gameStatus: prevGameStatus
      };
    case 'FLAG_SQUARE':
      const r = action.y;
      const c = action.x;
      // let board = prevBoard;
      const square = prevBoard[r][c];
      const {
        minesFlagged
      } = prevGameStatus;
      let flaggedSquare = {
        ...square,
        isFlagged: true,
        isRevealed: true
      };
      console.log('inside flag square', flaggedSquare);
      let selectedRow = prevBoard[r];
      let flaggedRow = [...selectedRow.map(square => square.xAxis === c ? flaggedSquare : square)];
      let updatedBoard = [...prevBoard.map((row, i, board) => i === r ? board[i] = flaggedRow : row)];
      let newGameStatus = {
        ...prevGameStatus,
        minesFlagged: minesFlagged + 1
      };
      if (square.isMine) {
        return {
          ...state,
          board: updatedBoard,
          gameStatus: newGameStatus
        };
      } else {
        return {
          ...state,
          board: updatedBoard,
          gameStatus: prevGameStatus
        };
      }
      case 'GAME_LOST':
        prevBoard.map(row => (
          row.map(square => (
            !square.isRevealed ? square.isRevealed = true : square))
        ));
        let lostGameStatus = {
          ...state.gameStatus,
          hasLost: true,
          inGame: false
        };
        console.log('lostGameStatus', lostGameStatus);
        return {
          ...state, board: prevBoard, gameStatus: lostGameStatus
        };
      case 'GAME_WON':
        prevBoard.map(row => (
          row.map(square => (
            !square.isRevealed ? square.isRevealed = true : square))
        ));
        let wonGameStatus = {
          ...state.gameStatus,
          hasWon: true,
          inGame: false
        };
        return {
          ...state, board: prevBoard, gameStatus: wonGameStatus
        }
        default:
          return state;
  }

}


export default gameboardReducer;