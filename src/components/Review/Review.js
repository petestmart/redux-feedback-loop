import React, { Component } from 'react';
import { connect } from 'react-redux';



class Review extends Component {
    render() {
        return (
            <div>
            <p>Review Component Placeholder</p>
            <p>Feeling: {this.props.reduxState.finalSubmitReducer.feelings}</p>
            <p>Understanding:</p>
            <p>Support:</p>
            <p>Comments:</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    // this.props.reduxState
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Review);