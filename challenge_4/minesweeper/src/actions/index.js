export const initializeGameboard = (board, gameStatus) => {
  console.log('inside actionCreatrs: initializeGameboard', board, gameStatus)
  return {
    type: 'INITIALIZE_GAMEBOARD',
    board,
    gameStatus
  }
}


export const selectSquare = (y, x) => {
  //returns an action
  console.log('inside actionCreatrs: this has been selected', y, x)
  return {
    type: 'SELECT_SQUARE',
    y,
    x
  }
}

export const flagSquare = (y, x) => {
  console.log('inside actionCreatrs: this square is flagged', y, x);
  return {
    type: 'FLAG_SQUARE',
    y,
    x
  }
}

export const revealNeighbors = (y, x, neighbors) => {
  console.log('inside actions: these are the neighbors', neighbors);
  return {
    type: 'REVEAL_NEIGHBORS',
    y,
    x,
    neighbors
  }
}

export const gameLost = (gameStatus) => {
  console.log('inside actions: you lost:', gameStatus.hasLost);
  return {
    type: 'GAME_LOST',
    gameStatus
  }
}

export const gameWon = (gameStatus) => {
  console.log('inside actions: you won:', gameStatus.hasWon);
  return {
    type: 'GAME_WON',
    gameStatus
  }
}


export const startTimer = (time) => {
  return {
    type: 'START_TIMER',
    time
  }
}