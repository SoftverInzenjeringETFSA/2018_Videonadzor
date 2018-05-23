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
            open: false,
            video:[],
            trazeniVideo:[],
            red:0,
            prenesiNaziv:''
        };
        this.pretraziVidee = this.pretraziVidee.bind(this);
        this.pustiSnimak = this.pustiSnimak.bind(this);
        this.arhivirajVideo=this.arhivirajVideo.bind(this);
        this.spasiVideo = this.spasiVideo.bind(this);
        
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
        imeSnimka='uploads\\'+e;
        this.setState({prenesiNaziv:imeSnimka});
        //window.location = '/playVideo';
        this.setState({open: true});
    }

    brisiSnimak(ime) {
        console.log("obrisi video: " + ime);
        var tmp = {
            name: ime
          };
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('http://localhost:27017/brisiSnimak', tmp).then( (res) =>{
            alert(res.data);
        })   
    }
   
    spasiVideo(val) {
        var selectedRow = (val.target.parentElement.parentElement.parentElement.cells[0].textContent)
        const config = { headers: {
                            'content-type' : 'application/json'
                        }
        }
        axios.post('http://localhost:27017/saveVideo', this.state.video[selectedRow]).then ((res) => { alert(JSON.stringify(res)) })
       
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
        {this.state.open ? <Video /> : null}
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
                    <td>{r.name}</td>
                    <td>{r.data.filename}</td>
                    <td>{"Camera " + r.data.encoding}</td>
                    <td>
                        <button onClick={() => this.brisiSnimak(r.name)} className ="remove-button"><i className="fa fa-times" ></i></button>
                        <button onClick={() =>this.pustiSnimak(r.data.filename)} className ="watch-button"><i className="fa fa-eye" ></i></button>
                        <button  onClick={this.arhivirajVideo}   className="archive-button"><i className="fa fa-archive" ></i></button>
                        <button  onClick={this.spasiVideo}   className="archive-button"><i className="fa fa-save" ></i></button>
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
var imeSnimka;
class Video extends React.Component {
    playVideo() {
    
      this.refs.vidRef.play();
    }
    
    pauseVideo() {
      this.refs.vidRef.pause();
    }
    
    render() {
      return(
        <div>
          <video ref="vidRef" src={imeSnimka} autoPlay></video>
          <Buttons playVideo={this.playVideo.bind(this)} pauseVideo={this.pauseVideo.bind(this)} />
        </div>
      );
    }
  }
  
  class Buttons extends React.Component {
    render(){
      return(
        <div>
            <div id='app'></div>
            <button onClick={this.props.playVideo} type="button" id="button_play" className="btn"><i className="fa fa-play"></i></button>
            <button type="button" onClick={this.props.pauseVideo} id="button_stop" className="btn"><i className="fa fa-stop"></i></button>

        </div>
      );
    }
  }
  
export default Videos ;
