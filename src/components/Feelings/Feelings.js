import React, { Component } from 'react';
// import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';


class Feelings extends Component {

    state = {
        feeling: ''
    }

    addFeelings = (number) => {
        number.preventDefault();
        console.log('f', this.state);
        this.props.dispatch({ type: 'ADD_FEELINGS', payload: this.state })
    }

    handleChange = (event) => {
        console.log('feelings', event.target.value)
        this.setState({
            feeling: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <form onSubmit={this.addFeelings}>
                    <input
                        type="number"
                        onChange={this.handleChange}
                        min="1" max="5"
                        placeholder="1 through 5" />
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

export default connect()(Feelings);
