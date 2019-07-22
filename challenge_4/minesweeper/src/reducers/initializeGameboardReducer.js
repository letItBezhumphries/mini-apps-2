// import Redux from 'redux';
import initBoard from '../utilities/initBoard.js';

const defaultSquare = {
  yAxis: null,
  xAxis: null,
  isMine: false,
  position: "",
  value: 0,
  isRevealed: false,
  isEmpty: false,
  isFlagged: false,
  adjacentValues: []
}

const defaultGameStatus = {
  gameId: 0,
  mineCount: 10,
  minesLeft: 10,
  inGame: false,
  hasWon: false,
  hasLost: false,
  message: "",
  time: "",
}

const defaultGameboard = Array(10).fill(Array(10).fill(defaultSquare));

var gameBoard = (state = { board: defaultGameboard, gameStatus: defaultGameStatus}, action) => {
  // var gameBoard = (state = { board: [], gameStatus: {}}, action) => {  
  console.log('inside gameBoard reducer', action)
    switch(action.type) {
      case 'RANDOMIZE_GAMEBOARD':
        const { board, gameStatus } = action;
        console.log('board:', board, gameStatus);
        const newBoard = initBoard(board, gameStatus.mineCount);
        console.log('should be different', newBoard);

        let { gameId, inGame } = gameStatus;
        let newGameStatus = { gameStatus, gameId: gameId + 1, inGame: !inGame };
        return { ...state, board: newBoard, gameStatus: newGameStatus }
        // return { ...state, board: action.board, gameStatus: action.gameStatus }
      default: 
        return state;
    }
}
