import React, {Component} from 'react';
import logo from './Icons/aware_logo.png'
import './Css/dashboard.css'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  render(){
    return(
      <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <img id="awareLogo" src={logo} alt="User" />
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/videos">Videos</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/stream">Live stream</Link>
                    </li>
                    <li>
                        <Link to="/addUser">Add user</Link>
                    </li>
                </ul>
            </div>
    );
  }
}

export default  SideBar;
