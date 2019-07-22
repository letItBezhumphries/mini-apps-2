import React from 'react';
import PinSelect from './PinSelect.jsx';
// import ScoreCard from './ScoreCard.jsx';
import ScoreBoard from './ScoreBoard.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsPerRoll: null,
      view: 'select-pins',
      scoreTotal: null,
      frames: { 1: {}, 
                2: {}, 
                3: {}, 
                4: {}, 
                5: {}, 
                6: {}, 
                7: {}, 
                8: {}, 
                9: {}, 
                10: {}
              },
      strike: false,
      spare: false,
      currentFrame: 1,
      selectPinsActive: true,
      currentPins: null,
      bowlCount: 1
    }
    this.handlePinSelect = this.handlePinSelect.bind(this);
  }

    handlePinSelect(pins) {
      if(this.state.selectPinsActive) {
        this.setState({
          pinsPerRoll: parseInt(pins, 10),
          currentPins: parseInt(pins, 10),
          selectPinsActive: !this.state.selectPinsActive
        })
      }
    }
  
  render() {
    let gameView;
    const { pinsPerRoll, scoreTotal, frames, strike, spare, currentFrame, selectPinsActive, currentPins, bowlCount } = this.state;

    if (this.state.pinsPerRoll === null) {
      gameView = <div className="app_container">
                  <header className="headerBar"> 
                    <h1 className="heading_primary">
                      <span className="heading_text" style={headingText}>Bowling</span>
                    </h1>
                  </header>
                  <PinSelect click={this.handlePinSelect} pinsPerRoll={this.state.pinsPerRoll}/>
                  </div>;
    } else {
      gameView = <div className="app_container">
                  <header className="headerBar"> 
                    <h1 className="heading_primary">
                      <span className="heading_text" style={headingText}>Bowling</span>
                    </h1>
                  </header>

                    <ScoreBoard frames={frames} scoreTotal={scoreTotal} currentFrame={currentFrame} 
                        currentPins={currentPins} gameSetting={pinsPerRoll} strike={strike}
                        spare={spare} bowlCount={bowlCount} selectPinsActive={selectPinsActive} />
                </div>;
    }

    return (
      <div>
        {gameView}
      </div>
    )
  }
}

export default App;

const headingText = {
  top: "50%",
  marginLeft: "300px",
  letterSpacing: "1.5px"
} 