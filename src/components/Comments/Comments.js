import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import { TextInput } from 'react-native-paper'


class Comments extends Component {

    state = {
        comments: ''
    }

    // Add comments to finalSubmitReducer
    addFeedback = (event) => {
        event.preventDefault();
        console.log('c', this.state);
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        
    } // end function addFeedback

    // trigger POST request to send all data to server
    // POST request
    submitFeedback = (event) => {
        console.log('in POST', this.props.reduxState.finalSubmitReducer)
        axios.post('/feedback', this.props.reduxState.finalSubmitReducer)
            .then(response => {
                this.props.history.push('/');
            })
            .catch(err => {
                alert(err)
            })
    }
    

    // Handle typing events
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
                    <button type="submit"  >Add Comments</button>
                </form>
                <br />
                <div>
                    <button onClick={this.submitFeedback}>Confirm</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    // this.props.reduxState
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Comments);