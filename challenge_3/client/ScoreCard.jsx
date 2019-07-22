// import React, { Component } from 'react'
// import Frame from './Frame.jsx';
// import LastFrame from './LastFrame.jsx';

// export default class ScoreCard extends Component {


//     nextFrame = () => {
//       this.setState(prevState => {
//         return {
//           currentFrame: prevState.currentFrame + 1
//         }
//       })
//     }

//     bowlBall = (pins) => {
//       const { frames, currentFrame, scoreTotal, currentPins, bowlCount } = this.props;

//       console.log('props', frames, currentFrame, currentPins )

//       let pinsDown = Math.floor(Math.random() * pins);
//       let pinsRemaining = pins - pinsDown;
//       console.log(`these are still standing:, ${pinsRemaining}, these are down: ${pinsDown}`)

//       if(bowlCount === 1 && pinsDown === 10) {
//         this.setState({

//         })
//       }

//       this.setState({
        
//       })
//     }


//       // this.setState(prevState => {

//       //   frames[currentFrame][bowlCount]: pinsDown
//       // })
//         // if(bowlCount === 1 && pinsDown === 10) {
//         //   let currentFrame = [pinsDown];
//         //   this.setState(prevState => {
//         //     const {frames} = this.prevState  
//         //     frames: 
//         //   }
          






    
      



//   createFrames = (frames, scoreTotal, currentPins, currentFrame, strike, spare) => {
//     const scorecard = [];
//     for(var i = 0; i <= 8; i++) {
//       scorecard.push(<Frame frame={frames[i]} key={i}/>)
//     }
//     let last = scorecard.length;
//     scorecard.push(<LastFrame frame={frames[last]} key={last}/> )
//     return scorecard;
//   }
    
//    renderBowlButton = () => {
//      return <button onClick={() => this.bowlBall(this.props.currentPins)} style={rollBtnStyles} name="bowl">Bowl!</button>
//    }


//   render() {
//     const { frames, currentFrame, bowlCount, scoreTotal, currentPins, gameSetting } = this.props;    
//     console.log(`props in ScoreCard component render, scoreTotal: ${scoreTotal}, frames: ${frames}, currentFrame: ${currentFrame}, 
//     bowlCount: ${bowlCount} currentPins: ${currentPins} gameSetting: ${gameSetting}, strike: ${strike}, spare: ${spare}`);

//     return (
//       <div className="scoreboard_container" style={{"margin-top": "100px"}}>
//         <div className="frames_container" style={{"width": "1100px", "display": "grid", "grid-template-columns": "repeat(auto-fill, 100px)", "grid-column-gap": "1px" }}>
//           {this.createFrames(frames, currentFrame, bowlCount, scoreTotal, currentPins, strike, spare)}

//         </div>
//           {this.renderBowlButton(currentPins)}
//       </div>
//     )
//   }
// }

// const rollBtnStyles = {
//   borderStyle: "solid",
//   borderRadius: "180px",
//   borderWidth: "1px",
//   height: "80px",
//   width: "80px",
//   bottom: "0",
//   left: "50%",
//   textAlign: "center"
// }
