import React, { Component } from 'react';

class PinSelect extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const pins = e.target.name;
    // console.log('in the handleClick', e.target.name)
    this.props.click(pins)
  }


  render() {
  // console.log('these are the props inside PinSelect =>', this.props);
    return (
        <div className="pins_select_container" style={containerStyles}>
          <label className="selection_heading" style={selectionHeading}>select pins per frame: </label>
          <div className="selection_box" style={selectionStyles} name="8" onClick={this.handleClick}>
            <a className="8_pins" name="8">8</a>
          </div>
          <div className="selection_box" style={selectionStyles} name="10" onClick={this.handleClick}>
            <a className="10_pins" name="10">10</a>
          </div>
          <div className="selection_box" style={selectionStyles} name="12" onClick={this.handleClick}>
            <a className="12_pins" name="12">12</a>
          </div>
        </div>
    )
  }
}


export default PinSelect;

const selectionHeading = {
  paddingRight: "25px"
}

const containerStyles = {
  width: "410px",
  height: "22px",
  marginLeft: "40px",
  display: "block",
  fontSize: "1.2rem",
  backgroundColor: "lighGrey",
}

const selectionStyles = {
  display: 'inline',
  margin: '150px 0 150px 0',
  padding: "0 25px 0 25px",
  borderRadius: "150px",
  backgroundColor: "darkGrey",
  borderStyle: "solid",
  
}







