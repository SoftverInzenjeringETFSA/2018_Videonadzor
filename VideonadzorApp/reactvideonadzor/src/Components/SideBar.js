import React, {Component} from 'react';
import logo from './Icons/aware_logo.png'
import './Css/dashboard.css'

class SideBar extends Component {
  render(){
    return(
      <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <img id="awareLogo" src={logo} alt="User" />
                    </li>
                    <li>
                        <a href="./dashboard.html">Dashboard</a>
                    </li>
                    <li>
                        <a href="./videos.html">Videos</a>
                    </li>
                    <li>
                        <a href="./users.html">Users</a>
                    </li>
                    <li>
                        <a href="./stream.html">Live stream</a>
                    </li>
                    <li>
                        <a href="./add-user.html">Add user</a>
                    </li>
                </ul>
            </div>
    );
  }
}

export default  SideBar;
