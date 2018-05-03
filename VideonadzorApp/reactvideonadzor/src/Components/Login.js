import React, {Component} from 'react';
import  './Css/login.css'

class Login extends Component{
  render(){
    return(
      <div id="form"  className="form-group">
          <div>LOGIN:</div>
          <form className="form-group">
              <label>Username:</label><br />
              <input type="text" placeholder="Username" /><br />
              <label>Password:</label><br />
              <input type="password" placeholder="Password" /><br />
              <button id="loginButton" className="btn" type="submit">Log in</button>
          </form>
      </div>
    );
  }
}

export default Login;
