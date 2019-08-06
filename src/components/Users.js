import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
 

  render() {
   
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}> {user.username} {user.hometown} </li> 
          ))}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { users: state.users };
};
 


//add mapStateToProps here

export default connect(mapStateToProps)(Users);
