import React, {Component} from 'react';

class Nav extends Component{
  render(){
    return(
      <ul>
	<li>Home</li>
	<li>Search</li>
	<li>Profile</li>
	<li>Notifications</li>
	<li>Friend Requests</li>
      </ul>
    );
  }
}

export default Nav;
