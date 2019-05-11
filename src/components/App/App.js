import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../Understanding/Understanding';
import Feelings from '../Feelings/Feelings';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Feelings />
        <Understanding />
        <Support />
        <Comments />
        <Review />
      </div>
    );
  }
}

export default App;
