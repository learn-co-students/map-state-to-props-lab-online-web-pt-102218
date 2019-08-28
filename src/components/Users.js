import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  usersList() {
    return (
      <ul>
      {this.props.users.map((user) => <li>{user.username}</li>)}
      </ul>
    )
  }


  render() {
    return (
      <div>
        {this.props.numberOfUsers}
        {this.usersList()}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
            numberOfUsers: state.users.length }
}

export default connect(mapStateToProps)(Users)
