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
  // mineCount: 10, //dependant upon settings
  mineCount: 40,
  minesFlagged: 0,
  inGame: false,
  hasWon: false,
  hasLost: false,
  time: "0:00",
  difficulty: ""
}

const defaultSettings = {
  "easy": {
    height: 10,
    width: 10,
    mines: 10
  },
  "moderate": {
    height: 20,
    width: 20,
    mines: 25
  },
  "hard": {
    height: 40,
    width: 40,
    mines: 50
  }
}

// const defaultGameboard = Array(10).fill(Array(10).fill(defaultSquare));
const defaultGameboard = Array(40).fill(Array(40).fill(defaultSquare));
// const newBoard = initBoard(defaultGameboard, defaultGameStatus.mineCount);

// console.log('initBoard:', newBoard)

const defaultStore = {
  // board: newBoard,
  board: defaultGameboard,
  gameStatus: defaultGameStatus
}


export default defaultStore;