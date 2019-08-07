import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
   let users = this.props.users.map((user, index)=> <li key={index}>Username: {user.username}  Hometown: {user.hometown}</li>);

    return (
      <div>
        {`${this.props.count} users:`}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    count: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
