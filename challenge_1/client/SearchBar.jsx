import React, { Component } from 'react';
import './css/search.css';

export default class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = event => { // what is the 'this' bound to // to the left of the call time dot
    event.preventDefault()
    this.props.onSubmit(this.state.term);
    // this is bound to this.props and is not bout to the instance of SearchBar whic is what we want it bound to
  }


  render() {
    console.log('inside searchBar render', this.state.term)
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit}className="ui form">
          <div className="ui field">
          <span className="text_heading">Search events in History: </span>
          <input className="search_input" type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
          <span className="narrow_search">narrow search by</span>
          <select >
            <option>topic</option>
            <option>place</option>
          </select>
          </div>
        </form>
      </div>
    )
  }
}