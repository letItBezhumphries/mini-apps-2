import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  
  componentWillMount() {
    const app = this;
    axios.get('http://localhost:3000/events')
    .then(response => {
      console.log('this should be the events', response.data);
      this.setState({
        events: response.data
      });
    })
    .catch(err => {
      console.log('there was a problem hitting the json server', err);
    })
  }


  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

export default App;
