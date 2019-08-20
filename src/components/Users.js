import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <h2>You have {this.props.users.length} users!</h2>
        <ul>
        {this.props.users.map((user)=><li>{user.username}, {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {return {users:state.users}} 

export default connect(mapStateToProps)(Users);
