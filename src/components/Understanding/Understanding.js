import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        newUnderstanding: ''
    }

    addUnderstanding = (number) => {
        console.log(number);
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: number })
    }

    handleChange = (event) => {
        this.setState({
            newUnderstanding: event.target.value
        })
    }

    handleChange = (event) => {
        this.setState({
            newFeeling: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <NumericInput onChange={this.handleChange} min={0} max={5} placeholder="Number 1 through 5" />
                <button>Next</button>
            </div>
        )
    }
}

export default connect()(Understanding);