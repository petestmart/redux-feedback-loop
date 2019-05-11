import React, { Component } from 'react';
// import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        newSupport: ''
    }

    addSupport = (number) => {
        number.preventDefault();
        console.log('s', number);
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: number })
    }

    handleChange = (event) => {
        console.log('support', event.target.value)
        this.setState({
            newFeeling: event.target.value
        })
    }

    render() {
        return (

            <div>
                <h2>How well are you being supported?</h2>
                <form onSubmit={this.addSupport}>
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

export default connect()(Support);