import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';

class Feelings extends Component {
    render() {
        return (
            <div>
            <h2>How are you feeling today?</h2>
            <NumericInput min={0} max={5} />
            </div>
        )
    }
}

export default Feelings;