import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const initialFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const feedbackReducer = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        return action.payload
    }
    return state;
}

// Array of all of the answers from each component
const finalSubmitReducer = (state = initialFeedback, action) => {
    if (action.type === 'ADD_FEELINGS') {
        return { ...state, feeling: action.payload };
    }
    if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: action.payload };
    }
    if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload };
    }
    if (action.type === 'ADD_COMMENTS') {
        return { ...state, comments: action.payload };
    }

    return state;
};

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        finalSubmitReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
