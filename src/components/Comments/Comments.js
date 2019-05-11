import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            
            <div>
                <h2>Any comments you want to leave?</h2>
                <input onChange={this.handleChange} placeholder="Comments" />
                <button>Next</button>
            </div>
        )
    }
}

export default connect()(Comments);