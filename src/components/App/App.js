import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../Understanding/Understanding';
import Feelings from '../Feelings/Feelings';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import Admin from '../Admin/Admin';


class App extends Component {

  componentDidMount() {
    this.refreshFeedbackData();
    // this.props.history.push('/');
  }

  // // POST request
  // submitFeedback = (event) => {
  //   axios.post('/feedback', (this.props.reduxState.finalSubmitReducer) )
  //   .then( response => {
  //     this.props.history.push('/');
  //   })
  //   .catch( err => {
  //     alert(err)
  //   })
  // }

  // GET request
  refreshFeedbackData = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log(response);
      this.props.dispatch({ type: 'SET_FEEDBACK', payload: response.data })
    });
  } // end function refreshFeedbackData

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <Router>
          <Route exact path='/' component={Feelings} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          {/* <Admin /> */}
        </Router>
        <Review />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // this.props.reduxState
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(App);
