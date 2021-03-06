import React, { Component } from 'react';
// import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    // Add understanding rating to finalSubmitReducer
    addUnderstanding = (number) => {
        number.preventDefault();
        if (this.state.understanding === (null || '' || "")) {
            alert('All Fields Must Be Filled');
        }
        else {
            console.log('u', this.state.understanding);
            this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
            this.props.history.push('/support');
        }
    }

    // Handle typing changes
    handleChange = (event) => {
        console.log('understanding', event.target.value)
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={this.addUnderstanding}>
                    <input
                        type="number"
                        onChange={this.handleChange}
                        min="1" max="5"
                        placeholder="1 through 5"
                        value={this.state.text}
                    />
                    <button type="submit" >Next</button>
                </form>
            </div>
        )
    }
} // End class Understanding

export default connect()(Understanding);