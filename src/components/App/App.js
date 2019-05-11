import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../Understanding/Understanding';
import Feelings from '../Feelings/Feelings';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
// import Admin from '../Admin/Admin';


class App extends Component {

  componentDidMount() {
    this.refreshFeedbackData();
  }

  // GET request
  refreshFeedbackData = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log(response);
      this.props.dispatch({ type: 'SET_FEEDBACK', payload: response.data })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <Feelings />
        <Understanding />
        <Support />
        <Comments />
        <Review />
        {/* <Admin /> */}
      </div>
    );
  }
}

export default App;
