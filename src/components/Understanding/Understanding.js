import React, { Component } from 'react';
// import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    addUnderstanding = (number) => {
        number.preventDefault();
        console.log('u', this.state.understanding);
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
    }

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
                        placeholder="1 through 5" />
                    <button type="submit" >Next</button>
                </form>
            </div>
        )
    }
}

export default connect()(Understanding);