import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './css/app.css';
import SearchBar from './SearchBar.jsx';
import EventsList from './EventsList.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      perPage: props.perPage,
      offset: 0,
      currentPage: 1,
      termHistory: null
      // pageCount: null,
      
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  
  onSearchSubmit = (term) => {
    // const { currentPage , termHistory } = this.state;
    const { offset, perPage, currentPage } = this.state;
    //on success need to set state of events and 
    //setState for pageCount to Math.ceil(totalCount / the limit value)
    axios.get(`http://localhost:3000/events?_page=${currentPage}`)
    // axios.get(`http://localhost:3001/events?_page=1&_limit=50&_start=1&_end=5&q=${term}`)
    // axios.get(`http://localhost:3000/events?q=${term}&_page=${this.state.currentPage}&_limit=50&_start=1&_end=5`)
    .then(response => {
      console.log('these are events from onSearchSubmit', response.data);
      // console.log('this is from onSearchSubmit', response.data.length, parseInt(response.headers['x-total-count'], 10), Math.ceil(parseInt(response.headers['x-total-count'], 10) / 10))
      this.setState({
        events: response.data,
        pageCount: Math.ceil(parseInt(response.headers['x-total-count'], 10) / perPage),
        // pageCount: 50,
        term: "",
        termHistory: term,
        // totalCount: parseInt(response.headers['x-total-count'], 10)
      })
    })
    .catch(err => {
      console.log('err in onSearchSubmit', err);
    })
  }

  componentDidMount() {
    this.onSearchSubmit(this.state.termHistory);
  }

  // handlePageClick = (e) => {
  //   this.setState({
  //     events: response.data,
  //     currentPage: this.state.currentPage + increase 
  //   }, () => this.onSearchSubmit('rome'))
  // }

  // handlePrevPageClick(e) {
  //   this.setState({
  //     currentPage: e.selected - 1
  //   }, () => {
  //     this.onSearchSubmit(this.state.term)
  //   })
  // }

  handlePageClick = (event) => {
    const selected = event.select;
    // const offset = Math.ceil(selected * this.props.perPage);
    const { termHistory } = this.state;
    this.setState({ offset: offset }, () => {
      this.onSearchSubmit(this.state.term)
    })
  }

  render() {
    const { term, pageCount, events } = this.state
    return (
      <div className="app_container">
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="paginate_container">
          <EventsList id="react-paginate" events={events}/>
          <ReactPaginate 
              // previousLabel={'previous'} nextLabel={'next'}
              // pageCount={pageCount === null ? 0: pageCount} marginPagesDisplayed={2} marginRangeDisplayed={5} onPageChange={this.handlePageClick}
              // containerClassName={'pagination'} subContainerClassName={'pages pagination'} activeClassName={'active'} 
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              />
        </div>
      </div>
    )
  }
}




export default App;


