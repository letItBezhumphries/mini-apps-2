import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardGrid from './BoardGrid.jsx';
import { Icon } from 'semantic-ui-react';
//actions
import { initializeGameboard } from '../actions/index.js';
import store from '../store/store.js';
// import '../css/App.css';
import '../sass/components/_app.scss';
//utility functions
import initBoard from '../utilities/initBoard.js';
import GameboardMenu from './GameboardMenu.jsx';
import GameSettings from './GameSettings.jsx';



// const App = (props) => {
class App extends Component {
  constructor(props) {
    super(props);
    this.gameStart = this.gameStart.bind(this);
  }
  
  gameStart() {  
    const newBoard = initBoard(this.props.board, this.props.gameStatus.mineCount);
    const { gameId, inGame } = this.props.gameStatus;
    const newGameStatus = { ...this.props.gameStatus, gameId: gameId + 1, inGame: !inGame };
    // console.log('in gameStart', newBoard, newGameStatus);
    store.dispatch(initializeGameboard(newBoard, newGameStatus))
  }
  
  render() {
    // console.log('store', store.getState());
    console.log('App props', this.props);
    const { board, gameStatus } = this.props;
    var minesweeper; 

    if (gameStatus.inGame === true) {
      minesweeper = <div className="gameboard">
                      <div className="gameboard__title">
                        <span className="title-text">Minesweeper</span>
                      </div>

                      <GameboardMenu />
                      
                      <div className="gameboard__grid-box">
                        <BoardGrid board={board} gameStatus={gameStatus} />
                      </div>
                    </div>;
    } else {
      minesweeper = <div>
                      <GameSettings board={board} gameStatus={gameStatus} gameStart={this.gameStart}/>
                    </div>;
    } 
    return (
      <div className="App">  
        {minesweeper}
      </div>
    )
  }
}
  
const mapStateToProps = (state) => {
  // console.log('App state', state);
  return {
    board: state.board,
    gameStatus: state.gameStatus
  }
}

export default connect(mapStateToProps)(App);