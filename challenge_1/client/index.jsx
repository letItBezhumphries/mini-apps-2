import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App perPage={10} pageCount={10}/>, document.getElementById('react-paginate'));
// ReactDOM.render(<App perPage={10} pageCount={50}/>, document.getElementById('app'));