import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

// Array of all of the answers from each component
const finalSubmitReducer = (state = [], action) => {
    if(action.type === '')
};

const storeInstance = createStore(
    combineReducers({
        finalSubmitReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
