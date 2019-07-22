import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import App from './components/App.jsx';
import { Provider } from 'react-redux'; 
import store from './store/store.js'; 

  
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));