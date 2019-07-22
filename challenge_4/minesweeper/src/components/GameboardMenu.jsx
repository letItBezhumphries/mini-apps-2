import React, { Component } from 'react';
import '../sass/components/_gameboardMenu.scss';
import { connect } from 'react-redux';
import GameTimer from './GameTimer.jsx';

class GameboardMenu extends Component {

  render() {
    const { gameStatus } = this.props;
    const { minesFlagged } = gameStatus;
    let face;

    if (gameStatus.hasLost) {
      face = "sad"
    } else {
      face = "happy"
    }
    return (
      <div className="gameboard-menu">
        <div className="mines-box">
          <span className="mines-box__text">Mines:</span>
          <span className="mines-box__mines">{`${minesFlagged}`}</span>
        </div>
        <div className="gameboard-menu__btn-box">
          <svg className="gameboard-menu__icon">
            <use xlinkHref={`./mineSprites.svg#icon-${face}`} className="btn-smiley__icon"></use>
          </svg>
        </div>
        <div className="gameboard-menu__time-box">
          <GameTimer />
        </div>    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    gameStatus: state.gameStatus
  }
}


export default connect(mapStateToProps)(GameboardMenu);