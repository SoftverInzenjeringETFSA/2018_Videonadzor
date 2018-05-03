import React, {Component} from 'react';
import './Css/dashboard.css'
import user from './Icons/user.png'

class HorizontalNavBar extends Component {
  render(){
    return(
      <nav id="horizontalNavbar" className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
              <p id="menuText">Dashboard</p>
          </div>
          <div id="userDiv">
              <a href="#" id="userName">Username</a>
              <img id="userImage" className="float-right" src={user} alt="User" />
          </div>
      </nav>
    );
  }
}

export default HorizontalNavBar;
