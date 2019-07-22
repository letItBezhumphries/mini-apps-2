import { combineReducers } from 'redux';
// import gameBoard from './gameboard.js';
import selectSquare from './selectSquare.js';
import gameboardReducer from '../reducers/gameboardReducer.js';


const rootReducer = combineReducers({
  board: gameboardReducer, 
  // selectedSquare: selectSquare
});

export default rootReducer;
