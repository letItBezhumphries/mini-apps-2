import React from 'react';
import '../sass/components/_boardGrid.scss';

import Square from './Square.jsx';
import { connect } from 'react-redux';
import { selectSquare } from '../actions/index.js';


const BoardGrid = (props) => {
  const {board, gameStatus } = props;
  console.log('BoardGrid', props);
  return (
    board.map((row, y) => {
      return (
        <div key={y} className="row"> 
          {row.map((square, x) => {
            return <Square key={x} className="square" square={square} board={board} gameStatus={gameStatus}>{square}</Square>
          })}     
        </div>
      )
    })
  )
}



const mapStateToProps = (state) => {
  return {
    board: state.board,
    gameStatus: state.gameStatus
  }
}

export default connect(mapStateToProps)(BoardGrid);