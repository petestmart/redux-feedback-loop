import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { TextInput } from 'react-native-paper'


class Comments extends Component {

    state = {
        comments: ''
    }

    addFeedback = (event) => {
        event.preventDefault();
        console.log('c', this.state);
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state })
    }

    handleChange = (event) => {
        console.log('comments', event.target.value)
        this.setState({
            comments: event.target.value
        })
    }


    render() {
        return (

            <div>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={this.addFeedback}>
                    <input
                        onChange={this.handleChange}
                        placeholder="Comments"
                        value={this.state.text}
                    />
                    <button type="submit"  >Submit Feedback</button>
                </form>
            </div>
        );
    }
}

export default connect()(Comments);