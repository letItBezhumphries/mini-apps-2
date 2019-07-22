import React, { Component } from 'react';
import './css/chartSelector.css';

export default class ChartSelect extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const chartType = e.target.value;
    this.props.onChange(chartType);
  }

  render() {
    console.log('props:', this.props)
    return (
      <div className="chart_selector">        
          <label className="chart_selector_label">
          chart type:
            <select onChange={this.handleChange}>
              <option value="Line">Line</option>
              <option value="Bar">Bar</option>
              <option value="Pie">Pie</option>
            </select>
          </label>
      </div>
    )
  }
}