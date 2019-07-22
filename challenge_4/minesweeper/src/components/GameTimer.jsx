import React, { Component } from 'react';
// import '../css/board.css';
import '../sass/components/_gameTimer.scss';


class GameTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: "0"
    }
  }

  renderSecond() {
    const { seconds } = this.state;
    let numSecs = parseInt(seconds, 10) + 1;
    let secs;
    if (numSecs < 10) {
      secs = "0" + numSecs.toString();
    } else {
      secs = numSecs.toString();
    }

    this.setState(state => ({
      seconds: secs
    }))
  }

  renderMinute() {
    const { seconds, minutes } = this.state;
    let numSecs = parseInt(seconds, 10);
    let numMins = parseInt(minutes, 10);
    if (numSecs === 60) {
      console.log('ready to change minute')
      numMins = numMins + 1;
      
      this.setState(state => ({    
        seconds: "00",
        minutes: numMins.toString()
      }))
    }
  }

  renderGameTime() {
    return (
      <span>{this.renderMinute()}:{this.renderSecond()}</span>
    )
  }

  componentDidMount() {
    this.interval = setInterval(() => this.renderGameTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  


  render() {
    return (
      <div className="game-time">{this.state.minutes}:{this.state.seconds}</div>
    )
  }
}

export default GameTimer;