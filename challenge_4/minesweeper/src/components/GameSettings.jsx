
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../sass/components/_gameSettings.scss';
import { connect } from 'react-redux';

class GameSettings extends Component {
  render() {
    const { gameStart } = this.props;
    console.log('in GameSettings', this.props);
    return ReactDOM.createPortal (
        <div className="ui dimmer modals visible active">
          <header className="header-modal">
            <div className="header-modal__content">
              <h1 className="header-modal__title">Minesweeper</h1>

              <div className="header-modal__btn-box">
                <button className="btn-game-start" onClick={() => gameStart()}> 
                  Start Game!
                </button>
              </div>
            </div>
          </header>
       </div>, document.querySelector('#gameStart')
     )
   }
 }

const mapStateToProps = (state) => {
  return {
    board: state.board,
    gameStatus: state.gameStatus
  }
}

export default connect(mapStateToProps)(GameSettings);