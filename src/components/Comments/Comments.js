import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { TextInput } from 'react-native-paper'


class Comments extends Component {

    state = {
        newComment: ''
    }

    addComment = (comment) => {
        console.log(comment);
        this.props.dispatch({ type: 'ADD_COMMENT', payload: comment })
    }

    handleChange = (event) => {
        console.log('comments', event.target.value)
        this.setState({
            newFeeling: event.target.value
        })
    }


    render() {
        return (
            
            <div>
                <h2>Any comments you want to leave?</h2>
                <input 
                onChange={this.handleChange} 
                placeholder="Comments" 
                value={this.state.text}
                />
                <button>Next</button>
            </div>
        );
    }
}

export default connect()(Comments);