import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {


  render() {
    return (
      <div>
        Users!
        <ul>
          {this.props.users.map((user, index) =>
            <li key={index + user.username}>{index+1}. {user.username} from {user.hometown}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({users: state.users})

export default connect(mapStateToProps)(Users)
