import React, {Component} from 'react'

class AddUser extends Component{
  render(){
    return(
      <div id="contentBody" >
          <div id="editForm">

              <form className="form">
                  <label>Username</label>
                  <input className="form-control" type="text" placeholder="Username" />
                  <label>First name</label>
                  <input className="form-control" type="text" placeholder="First name" />
                  <label>Last name</label>
                  <input className="form-control" type="text" placeholder="Last name" />
                  <label>Email</label>
                  <input className="form-control" type="text" placeholder="Email" />
                  <label>Password</label>
                  <input className="form-control" type="password" placeholder="passord" />
                  <label>Role</label>
                  <select className="form-control">
                      <option>User</option>
                      <option>Admin</option>
                      <option>Camera owner</option>
                  </select>
                  <br />
                  <button id="submitButton" className="btn" type="submit">Add new user</button>

              </form>
          </div>

      </div>
    );
  }
}

export default AddUser;
