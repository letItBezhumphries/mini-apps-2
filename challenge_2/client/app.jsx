import React, { Component } from 'react';
import axios from 'axios';
import { Line, Bar, Pie } from 'react-chartjs-2';
// import LineChart from './Chart.jsx/index.js';
import ChartSelect from './ChartSelect.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCrypto: 'BTC',
      currency: 'Swiss Franc',
      start: "2018-01-01",
      end: "2018-04-01",
      chartData: {},
      chartType: ""
    }
    this.changeChartType = this.changeChartType.bind(this);
  }

  getCryptoData() {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=CHF&start=2019-01-01&end=2019-04-01`)
    .then(response => {
      const data = Object.entries(response.data.bpi);
      const dates = this.getDates(data);
      const prices = this.getPrices(data);
      console.log('this is the result for api call', data);
      // this.setState({
      //   chartData: Object.entries(response.data.bpi),
      // }) 
      this.setState({
        chartData: {
          labels: dates,
          datasets: [
            { 
              label: `${this.state.currentCrypto} closing price index for ${this.state.currency}($)`,
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: prices 
            }
        ]
        }
      }, console.log('current state:', this.state))
    })
    .catch(err => {
      console.log('err in getClosingPrice', err);
    })
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getDates = (data) => { 
    var labelX = [];
    for (var i = 0; i < data.length; i++) {
      var date = data[i][0].split('-').slice(1);
      var month = date[0].split('')[1];
      var day = date[1];
      if (month === '1') {
        labelX.push(`Jan${day}`);
      } else if (month === '2') {
        labelX.push(`Feb${day}`);
      } else if (month === '3') {
        labelX.push(`Mar${day}`);
      } else {
        labelX.push(`Apr${day}`);
      }
    }
    return labelX;
  }

  getPrices = (data) => {
    var labelY = [];
    for (var i = 0; i < data.length; i++) {
      var price = data[i][1];
      labelY.push(price);
    }
    return labelY;
  }

  // handleChartTypeSelect(event) {
  //   this.setState({
  //     chartType: event.target.chartType
  //   })
  // }

  changeChartType(selectedType) {
    this.setState({
      chartType: selectedType
    })
  }

  //need to make api request to 
  render() {
    let chart;
    const chartType = this.state.chartType;
    console.log('chartType:', chartType);
    if (chartType === 'undefined') {
      chart = <Line data={this.state.chartData} width={500} height={500} options={{ maintainAspectRatio: false }}/>;
    }
    if (chartType === "Line") {
      chart = <Line data={this.state.chartData} width={500} height={500} options={{ maintainAspectRatio: false }}/>;
    } 
    if (chartType === "Bar") {
      chart = <Bar data={this.state.chartData} width={500} height={500} options={{ maintainAspectRatio: false }}/>;
    } 
    if (chartType === "Pie") {
      chart = <Pie data={this.state.chartData} width={500} height={500} options={{ maintainAspectRatio: false }}/>;
    } 
    if (chartType === 'undefined') {
      chart = <Line data={this.state.chartData} width={500} height={500} options={{ maintainAspectRatio: false }}/>;
    }
    
    return (
      <div>
        <ChartSelect chartType={this.state.chartType} onChange={this.changeChartType}/> 
        {chart}
      </div>
    )
  }
}

export default App;
