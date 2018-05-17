import axios from 'axios'
import React, {Component} from 'react'
import './Css/videos.css'

const search_style ={
  backgroundColor:'#2c6fd4',
  color:'#ffffff'
};

class Videos extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            //rows: [{naziv: "01-02-2018_22-30", kamera: 1}]
            rows: []
        };
        this.pretraziVidee = this.pretraziVidee.bind(this);
        this.pustiSnimak = this.pustiSnimak.bind(this);
    }
    pustiSnimak(naziv) {
        var fd = new FormData(); 
        fd.append('data', naziv)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('http://localhost:27017/getVideo', fd, config).then((res)=>{
            window.location = '/playVideo'
        })
    }
    pretraziVidee() {
        var fd = new FormData(); 
        fd.append('data', this.state.searchString)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('http://localhost:27017/searchVideos', fd, config).then((res)=>{
            //console.log(res.data)
            this.setState({rows: res.data});
        })
    }
    render() {
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
            <tbody id="tabelaVidea">
            <tr>
                <th>Video</th>
                <th>Date <i className="fa fa-caret-up"></i></th>
                <th>Camera</th>
                <th>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchString} onChange={evt => this.updateSearchString(evt)}/>
                        <input type="button" className="btn btn my-2 my-sm-0" style={search_style} onClick={this.pretraziVidee} value="Search"/>
                    </form>
                </th>
            </tr>
            {this.state.rows.map((r) => {
                return(
                <tr key={r.naziv}>
                    <td>{r.naziv}</td>
                    <td>{r.naziv.substr(0, 10).replace(/-/g, '.')}</td>
                    <td>{"Camera " + r.kamera}</td>
                    <td>
                        <button className ="remove-button"><i className="fa fa-times" ></i></button>
                        <button onClick={() =>this.pustiSnimak(r.naziv)} className ="watch-button"><i className="fa fa-eye" ></i></button>
                    </td>
                </tr>);
            })}
            </tbody>
        </table>
      </div>
    );
  }

  updateSearchString(evt) {
    this.setState({
        searchString: evt.target.value
    });
  }
}

export default Videos ;
