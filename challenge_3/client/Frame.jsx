import React from 'react';
import './css/frame.css';

class Frame extends React.Component {

  render() {
    const { frame } = this.props;
    console.log('inside Frame, props:', this.props)
    // let markScore;
    // console.log(`this is the score for a frame: ${frame.score}, this is the Object.entries ${frame}`)
    // frame.strike ? markScore = "X" : markScore = "/" 
    

    return (
      <div className="frame_container" style={frameContainerStyles}>
        <div className="score_total_frame" name="totalScore" style={scoreTotalStyles}>
          <div className="r1_score_frame" name="r1" style={r1Styles}>
            <span className="r1_text"></span>
          </div>
          <span className="score_total" style={scoreTextStyle} name="totalScore"></span>
        </div>
      </div>
    )
  } 
}

export default Frame;

const frameContainerStyles = {
  height: "100px",
  width: "100px",
  display: "inlineBlock",
  borderStyle: "solid"
}

const scoreTotalStyles = {
  backgroundColor: "grey",
  height: "100%",
  width: "100%",
  position: "relative"
}

const r1Styles = {
  backgroundColor: "yellow",
  borderStyle: "solid",
  borderWidth: "1px",
  position: "absolute",
  top: "0",
  right: "0",
  height: "40%",
  width: "40%",
  margin: "0"
}

const scoreTextStyle = {
  position: "absolute",
  bottom: "0",
  left: "48%",
  textAlign: "center"
}