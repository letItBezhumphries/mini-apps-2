import { createStore } from 'redux';
// import rootReducer from '../reducers/index.js';
import gameboardReducer from '../reducers/gameboardReducer.js';
import defaultStore from './defaultStore.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



const store = createStore(gameboardReducer, defaultStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;