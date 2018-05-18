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
            rows: [],
            video:[],
            trazeniVideo:[],
            red:0
        };
        this.pretraziVidee = this.pretraziVidee.bind(this);
        this.pustiSnimak = this.pustiSnimak.bind(this);
        this.arhivirajVideo=this.arhivirajVideo.bind(this);
        this.getTrazeniVideo=this.getTrazeniVideo.bind(this);
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
            this.setState({trazeniVideo: res.data});
            this.setState({video: res.data});
            this.setState({rows: res.data});
})
    }
        
    arhivirajVideo(e){
        var red=(e.target.parentElement.parentElement.parentElement.cells[0].textContent);
        //var nazivVidea=(e.target.parentElement.parentElement.parentElement.cells[0].textContent+e.target.parentElement.parentElement.parentElement.cells[2].textContent);
        //var dat=e.target.parentElement.parentElement.parentElement.cells[0].textContent;
        //var naziv=e.target.parentElement.parentElement.parentElement.cells[2].textContent;
        console.log(this.state.video[red]);
        const config = {
        headers: {
            'content-type': 'application/json'
            }
        }
        axios.post('http://localhost:27017/addArchive', this.state.video[red]).then( (res) =>{
        alert(JSON.stringify(res) )
            })
    }
    pustiSnimak(e) {
        var red=(e.target.parentElement.parentElement.parentElement.cells[0].textContent);
        this.setState({red:red});
        window.location = '/playVideo'
        
        /*var fd = new FormData(); 
        fd.append('data', naziv)
        naziv="52f32b961958a952b992169205e5c696";
        console.log(naziv);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('http://localhost:27017/getVideo', fd, config).then((res)=>{
            console.log(res.data);
            window.location = '/playVideo'
        })
        */
    }
    getTrazeniVideo(){
    console.log(this.state.trazeniVideo[this.state.red]);
       return this.state.trazeniVideo[this.state.red]
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
            {this.state.rows.map((r,i) => {
                return(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{r._id}</td>
                    <td>{r.fieldname}</td>
                    <td>{"Camera " + r.encoding}</td>
                    <td>
                        <button className ="remove-button"><i className="fa fa-times" ></i></button>
                        <button onClick={this.pustiSnimak} className ="watch-button"><i className="fa fa-eye" ></i></button>
                        <button  onClick={this.arhivirajVideo}   className="archive-button"><i className="fa fa-archive" ></i></button>
                        <button ref="dugme"  className="save-button"><i className="fa fa-save" ></i></button>
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
