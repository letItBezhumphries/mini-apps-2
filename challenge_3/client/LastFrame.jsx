import React from 'react';

const LastFrame = (props) => {
  console.log('inside LastFrame, props:', props)
  return (
    <div className="frame_container" style={frameContainerStyles}>
      <div className="score_total_frame" name="totalScore" style={scoreTotalStyles}>
        <div className="r1_score_frame" name="r1" style={r1Styles}>
          <span className="r1_text">1</span>
        </div>
        <div className="r2_score_frame" name="r2" type="checkbox" style={r2Styles}>
          <span className="r2_text"></span>
        </div>
        <span className="score_total" style={scoreTextStyle}>1</span>
      </div>
    </div>
  )
}

export default LastFrame;

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
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: "1px",
  position: "absolute",
  top: "0",
  right: "40%",
  height: "40%",
  width: "38%",
  margin: "0"
}

const r2Styles = {
  backgroundColor: "yellow",
  borderStyle: "solid",
  borderWidth: "1px",
  position: "absolute",
  top: "0",
  right: "0",
  height: "40%",
  width: "38%",
  margin: "0"
}

const scoreTextStyle = {
  position: "absolute",
  bottom: "0",
  left: "48%",
  textAlign: "center"
}