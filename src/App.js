import React, { Component } from 'react';
import UserInput from './components/UserInput'
import ConnectedUsers from './components/Users'
import { connect } from 'react-redux';

class App extends Component {
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

export default connect()(App);
