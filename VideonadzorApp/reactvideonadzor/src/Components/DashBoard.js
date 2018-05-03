import React, {Component} from 'react'
import SideBar from './SideBar.js'
import AddUser from './AddUser.js'
import Users from './Users.js'
import Videos from './Videos.js'
import HorizontalNavBar from './HorizontalNavBar.js'
import './Css/dashboard.css'


class DashBoard extends Component{
  render(){
    return(
      <div id="wrapper" className="toggled">
            <SideBar />


            <div id="page-content-wrapper">
                <div className="container-fluid">

                    <HorizontalNavBar />
                    <Videos />
                </div>

            </div>


      </div>
    );
  }
}

export default DashBoard;
