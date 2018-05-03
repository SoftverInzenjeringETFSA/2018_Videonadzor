import React, {Component} from 'react'
import './Css/users.css'

const search_style ={
  backgroundColor:'#2c6fd4',
  color:'#ffffff'
};

class AddUser extends Component{
  render(){
    return(
      <div>
      <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn my-2 my-sm-0" style={search_style} type="submit">Search</button>
                        </form>
                        <table id="videos">
                            <tr>
                                <th>Username</th>
                                <th>Name <i className="fa fa-caret-up"></i></th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>superUser123</td>
                                <td>Michael</td>
                                <td>Jackson</td>
                                <td>michaelj@gmail.com</td>
                                <td>user</td>
                                <td>
                                    <button className ="remove-button"><i className="fa fa-times"></i></button>
                                    <button className ="watch-button"><i className="fa fa-eye"></i></button>
                                    <a href="./edit-user.html" className="btn btn-default edit-button"><i className="fa fa-edit"></i></a>
                                </td>
                            </tr>
                        </table>
      </div>
    );
  }
}

export default AddUser;
