import React, { Component } from 'react';
import '../sass/components/_square.scss';
import { selectSquare, flagSquare, gameLost, gameWon } from '../actions/index.js';
import store from '../store/store';
import { connect } from 'react-redux';



class Square extends Component {

  
  onSquareClick = (y, x) => {
    const { board, gameStatus } = this.props;
    var selectedSquare = board[y][x];
    console.log('onSquareClick: this was selected =>', selectedSquare);
    const { isRevealed, isMine, isEmpty, isFlagged } = selectedSquare;
    if ((!gameStatus.inGame) || isRevealed || isFlagged) {
      return null;
    }
    if (!isRevealed) {
      console.log('please dispatch to reveal')
      store.dispatch(selectSquare(y, x));
    }
    if (isMine) {
      console.log('game over man');

      // revealBoard();
      alert("game over man!");
      store.dispatch(gameLost(gameStatus));
      //reveal all the squares
      // store.dispatch(revealBoard(board, gameStatus))
    }
    if ((!isRevealed) && isEmpty) {
      var coordinateY, coordinateX;
      let { adjacentValues } = selectedSquare;
      adjacentValues.map(square => {
        coordinateY = square[0];
        coordinateX = square[1];
        let neighbor = board[coordinateY][coordinateX];
        if (neighbor.isEmpty) {
          store.dispatch(selectSquare(neighbor.yAxis, neighbor.xAxis));
        }
      });
    }
  }
  
  onSquareCMenuClick = (y, x, e) => {
    e.preventDefault();
    const { board, gameStatus } = this.props;
    const { hasWon, minesFlagged, mineCount } = gameStatus;
    const selectedSquare = board[y][x];
    console.log('onSquareCMenuClick', selectedSquare);
    const { isMine, yAxis, xAxis } = selectedSquare;
    
    if (isMine || !isMine) {
      console.log('flag it');
      store.dispatch(flagSquare(yAxis, xAxis));
    }

    if (minesFlagged === mineCount) {
      console.log('Your a winner!');
      alert('you won!');
      store.dispatch(gameWon(gameStatus))
    }
  }
  
  render() {
    let text, className;
    const { value, yAxis, xAxis, isRevealed, isFlagged, isMine, isEmpty } = this.props.square;
    const { inGame } = this.props.gameStatus;
    
    if (!isRevealed) {
      className = 'hidden';
    } else {
      className = 'visible';
    }
    if (isEmpty) {
      text = <span className={`value_text--${className}`} style={{ backgroundColor: 'white'}}></span>;
    }
    if (parseInt(value, 10) === 1) {
      // color = 'green';
      text = <span className={`value_text--${className} 1`} style={{ color: 'green' }}>{value}</span>;
    }
    if (parseInt(value, 10) === 2) {
      // color = 'blue'; 
      text = <span className={`value_text--${className} 2`} style={{ color: 'blue' }}>{value}</span>;
    }
    if (parseInt(value, 10) === 3) {
      // color = 'red';
      text = <span className={`value_text--${className} 3`} style={{ color: 'red' }}>{value}</span>;
    }

    if (parseInt(value, 10) === 4) {
      text = <span className={`value_text--${className} 4`} style={{ color: 'orange'}}>{value}</span>;
    }

    if (isMine && isRevealed) {
      text = <svg className={`value_text--${className}`}><use xlinkHref="./mineSprites.svg#icon-bomb" className="value_text__icon-bomb"></use></svg>; 
    }

    if (isFlagged) {
      text = <svg className={`value_text--${className}`}><use xlinkHref="./mineSprites.svg#icon-flag" className="value_text__icon-flag"></use></svg>; 
    }

    if (!inGame) {
      return (
        <div className="square_value"></div>
      );
    } else {
      return (
        <div className="square_value" onClick={() => this.onSquareClick(yAxis, xAxis)} onContextMenu={(e) => this.onSquareCMenuClick(yAxis, xAxis, e)}>
          {text}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    gameStatus: state.gameStatus
  }
}

export default connect(mapStateToProps)(Square);