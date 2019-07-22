import React, { useState } from 'react';
import Frame from './Frame.jsx';
import LastFrame from './LastFrame.jsx';

const ScoreBoard = (props) => {
  const { frames, scoreTotal, currentFrame, currentPins, bowlCount, pinsPerRoll, pinsSelectActive, strike, spare } = props;


  const [scoreBoardState, setScoreBoardState] = useState({
    scoreTotal: scoreTotal,
    currentFrame: currentFrame,
    currentPins: currentPins,
    bowlCount: bowlCount,
    frames: frames,
    pinsSelectActive: pinsSelectActive,
    pinsPerRoll: pinsPerRoll
  });



  const [prevFrameState, setPrevFrameState] = useState({
    prevFrameState: frames[currentFrame - 1]
  })

  const bowlBall = (pins) => {
    console.log(`props: ${frames}, turn: ${bowlCount}, frame: ${currentFrame}, pins:${currentPins} inside of bowlBall`)


    let pinsDown = Math.floor(Math.random() * pins);
    let pinsRemaining = pins - pinsDown;
    console.log(`these are still standing:, ${pinsRemaining}, these are down: ${pinsDown}`)

    // if ((bowlCount === 1 && pinsDown === 10) && (strike === true && currentFrame > 1)) {
    //   let prevFrameScore = frames[currentFrame - 1].score;
    //   setPrevFrameState({ 
    //     prevFrameState: prevFrameScore + 10
    //   })
    // }

    // if ((bowlCount === 2 && spare === true) && currentFrame > 1) {
    //   let prevFrameScore = frames[currentFrame - 1].score;
    //   setPrevFrameState({
    //     prevFrameState: prevFrameScore + (pins - pinsRemaining)
    //   })
    // }

    //set the strike flag for the frame state
    if (bowlCount === 1 && pinsDown === pinsPerRoll) {
      frames[currentFrame].score = pinsPerRoll;
      frames[currentFrame].strike = true;
      

      setScoreBoardState({
        scoreTotal: scoreTotal + pinsPerRoll,
        currentFrame: currentFrame + 1,
        currentPins: pinsPerRoll,
        frames: frames,
        bowlCount: 1,
        pinsPerRoll: pinsPerRoll,
        pinsSelectActive: pinsSelectActive
      })

      // set the spare flag for the frame state
    } 
    else if (currentPins === 0 && bowlCount === 2) {

      frames[currentFrame].score = pinsPerRoll;
      frames[currentFrame].spare = true;

      setScoreBoardState({
        scoreTotal: scoreTotal + pinsPerRoll,
        currentFrame: currentFrame + 1,
        currentPins: pinsPerRoll,
        frames: frames,
        pinsPerRoll: pinsPerRoll,
        pinsSelectActive: pinsSelectActive,
        bowlCount: 1
      })
    } else {

      frames[currentFrame].score = pinsPerRoll - pinsRemaining;

      setScoreBoardState({
        scoreTotal: scoreTotal + (pinsPerRoll - pinsRemaining),
        currentFrame: currentFrame + 1,
        currentPins: pinsPerRoll,
        frames: frames,
        bowlCount: 1,
        pinsPerRoll: pinsPerRoll,
        pinsSelectActive: pinsSelectActive
      });
    } 
  }

  const createFrames = (frames) => {
    const scorecard = [];
    for(var i = 1; i <= 9; i++) {
      console.log(i)
      scorecard.push(<Frame frame={frames[i]} key={i}/>)
    }
    let last = 10;
    scorecard.push(<LastFrame frame={frames[last]} key={last}/> )
    return scorecard;
  }
    
  const renderBowlButton = () => {
    return <button onClick={() => bowlBall(scoreBoardState.currentPins)} style={rollBtnStyles} name="bowl">Bowl!</button>
  }

  return (
    <div className="scoreboard_container" style={{"margin-top": "100px"}}>
      <div className="frames_container" style={{"width": "1100px", "display": "grid", "grid-template-columns": "repeat(auto-fill, 100px)", "grid-column-gap": "1px" }}>
        {createFrames(scoreBoardState.frames)}

      </div>
        {renderBowlButton(scoreBoardState.currentPins)}
    </div>
  )
}

export default ScoreBoard;


const rollBtnStyles = {

  borderStyle: "solid",
  borderRadius: "180px",
  borderWidth: "1px",
  height: "80px",
  width: "80px",
  bottom: "0",
  left: "50%",
  textAlign: "center"
}