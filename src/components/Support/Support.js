import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        newSupport: ''
    }

    addSupport = (number) => {
        console.log(number);
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: number })
    }

    handleChange = (event) => {
        // console.log('in Support', event.target.value)
        this.setState({
            newFeeling: event.target.value
        })
    }

    render() {
        return (
            
            <div>
                <h2>How well are you being supported?</h2>
                <NumericInput onChange={this.handleChange} min={0} max={5} placeholder="Number 1 through 5" />
                <button>Next</button>
            </div>
        )
    }
}

export default connect()(Support);