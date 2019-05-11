import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import {connect} from 'react-redux';

class Feelings extends Component {

    addFeelings = (number) => {
        console.log(number);
        this.props.dispatch({type: 'ADD_FEELINGS', payload: number})
    }

    render() {
        return (
            <div>
            <h2>How are you feeling today?</h2>
            <NumericInput min={0} max={5} placeholder="Number 1 through 5" />
            </div>
        )
    }
}

export default connect()(Feelings);