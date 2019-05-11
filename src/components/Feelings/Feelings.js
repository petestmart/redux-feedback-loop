import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';


class Feelings extends Component {

    state = {
        newFeeling: ''
    }

    addFeelings = (number) => {
        console.log(number);
        this.props.dispatch({ type: 'ADD_FEELINGS', payload: number })
    }

    handleChange = (event) => {
        this.setState({
            newFeeling: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <NumericInput onChange={this.handleChange} min={0} max={5} placeholder="Number 1 through 5" />
                <button>Next</button>
            </div>
        )
    }
}

export default connect()(Feelings);
