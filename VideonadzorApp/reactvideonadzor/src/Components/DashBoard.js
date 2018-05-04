import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import SideBar from './SideBar.js'
import AddUser from './AddUser.js'
import Users from './Users.js'
import Videos from './Videos.js'
import HorizontalNavBar from './HorizontalNavBar.js'
import Stream from './Stream.js'
import './Css/dashboard.css'



class DashBoard extends Component{
  render(){
    return(
      <div id="wrapper" className="toggled">
            <SideBar />


            <div id="page-content-wrapper">
                <div className="container-fluid">

                    <HorizontalNavBar />
                    <Switch>
                      <Route  path='/stream' component={Stream} />
                      <Route  path='/users' component={Users} />
                      <Route  path='/videos' component={Videos} />
                      <Route  path='/addUser' component={AddUser} />
                    </Switch>
                </div>

            </div>


      </div>
    );
  }
}

export default DashBoard;
