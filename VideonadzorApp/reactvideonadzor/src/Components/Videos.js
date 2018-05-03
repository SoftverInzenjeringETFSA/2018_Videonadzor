import React, {Component} from 'react'
import './Css/videos.css'

const search_style ={
  backgroundColor:'#2c6fd4',
  color:'#ffffff'
};

class Videos extends Component{
  render(){
    return(
      <div>
        <div id="forms">
            <div id="scheduledDeletionForm">
                <div>
                    <div>Deletion is scheduled on: 12.05.2018. 22:30</div>
                    <div>Edit the scheduled deletion time:</div>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="date" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary my-2 my-sm-0" type="Save">Save changes</button>
                    </form>
                </div>
            </div>

        </div>
        <table id="videos">
            <tr>
                <th>Video</th>
                <th>Date <i className="fa fa-caret-up"></i></th>
                <th>Camera</th>
                <th>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn my-2 my-sm-0" style={search_style} type="submit">Search</button>
                    </form>
                </th>
            </tr>
            <tr>
                <td>01-02-2018_22-30</td>
                <td>01.02.2018</td>
                <td>Camera1</td>
                <td>
                    <button className ="remove-button"><i className="fa fa-times" ></i></button>
                    <button className ="watch-button"><i className="fa fa-eye" ></i></button>
                </td>
            </tr>

        </table>
      </div>
    );
  }
}

export default Videos ;
