import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import Success from '../../Success/Success';
import { withRouter } from "react-router-dom";
// import PropTypes from "prop-types";


class ReviewButton extends Component {

    // trigger POST request to send all data to server
    // POST request
    submitFeedback = (event) => {
        console.log('in POST', this.props.reduxState.finalSubmitReducer)
        axios.post('/feedback', this.props.reduxState.finalSubmitReducer)
            .then(response => {
                // this.props.history.push('/');
            })
            .catch(err => {
                alert(err)
            })
        this.successPage();
    }

    successPage = () => {
        this.props.history.push('/success')
    }

    render() {
        let finSubRed = this.props.reduxState.finalSubmitReducer;

        if ((finSubRed.feeling &&
            finSubRed.understanding &&
            finSubRed.support &&
            finSubRed.comments) === ('' || "")) {
            return (
                <div>
                    <button>Incomplete</button>
                </div>)
        }

        return (
            <div>
                <button onClick={this.submitFeedback}>Confirm</button>
            </div>)
    }
} // End class ReviewButton

const mapStateToProps = (reduxState) => {
    // this.props.reduxState
    return {
        reduxState
    }
}

// const connectedReview = connect(mapStateToProps)(ReviewButton)
// export default withRouter(connectedReview)(ReviewButton)

export default withRouter(connect(mapStateToProps)(ReviewButton));