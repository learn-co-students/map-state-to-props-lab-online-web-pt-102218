import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  generateUsers() {
    return this.props.users.map((user) => {
      return <li>{user.username}</li>
    })
  }

  render() {
    return (
      <div>
      {this.props.users.length}
        <ul>
          {this.generateUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
