import React, {Component} from 'react';
import Login from './Login.js'
import './Css/login.css'
import logo from './Icons/aware_logo.png'

class LandingPage extends Component {
  render(){
    return(
      <div id= 'container'>
        <div id="logo">
            <img id="awareLogo" src={logo} alt="User"/>
        </div>
        <Login />
      </div>
    );
  }
}

export default LandingPage;
