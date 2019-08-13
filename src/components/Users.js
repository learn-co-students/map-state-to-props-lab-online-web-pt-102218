import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <p>Total Users: <strong>{ this.props.users.length }</strong></p>
        <ul>
          { this.props.users.map(( u, i ) => <li key={i}>{u.username} {u.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => { return { users: state.users } };

export default connect(mapStateToProps)( Users )
