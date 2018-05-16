import React, {Component} from 'react'
import RecordRTC from 'recordrtc'
import Webcam from './Webcam.js'
import axios from 'axios'
import {captureUserMedia} from './Utils/AppUtils.js'
import './Css/stream.css'

class VideoContainer extends Component{

    constructor(props){
        super(props)
        this.state={width:100, height:100}
        this.pokreniSnimanje = this.pokreniSnimanje.bind(this)
        this.zaustaviSnimanje = this.zaustaviSnimanje.bind(this)
        this.requestUserMedia = this.requestUserMedia.bind(this);
    }

    componentDidMount(){

        /*if(!hasGetUserMedia) {
            alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
            return;
          }*/
          this.requestUserMedia();
    }

    requestUserMedia() {
        console.log('requestUserMedia')
        captureUserMedia((stream)=>{
            this.setState({
                options:{
                    type: 'video',
                    frameInterval: 20 // minimum time between pushing frames to Whammy (in milliseconds)
                },
                recordVideo: null,
                src: window.URL.createObjectURL(stream) 
            });
        })
    }
    

    pokreniSnimanje(){
        console.log('pokrenuto je snimanje')
        captureUserMedia((stream) => {
            this.state.recordVideo = RecordRTC(stream, this.state.options);
            this.state.recordVideo.startRecording();
          });
    }

    zaustaviSnimanje(){
        console.log('pokrenuto je zaustavljanje')
        this.state.recordVideo.stopRecording(() => {
            let params = {
              type: 'video/webm',
              data: this.state.recordVideo.blob,
              id: Math.floor(Math.random()*90000) + 10000,
              name: new Date().toString()
            }
            axios.post('http://localhost:27017/addVideo', params).then((res)=>{
                console.log(res)
            })
        })
    }
    
    render(){
        return(
            <div className="video-container">
                <div className="video-streamer" ref='kamera'>
                <Webcam src={this.state.src}/>
                </div>
                    <div><button onClick={this.pokreniSnimanje}>Start Record</button></div>
                    <div><button onClick={this.zaustaviSnimanje}>Stop Record</button></div>
                {/*<div className="video-controls">
                    <div className="player text-center">
                        <button type="button" id="button_fbw" className="btn">
                            <i className="fa fa-fast-backward"></i>
                        </button>

                        <button type="button" id="button_bw" className="btn">
                            <i className="fa fa-backward"></i>
                        </button>

                        <button type="button" id="button_play" className="btn">
                            <i className="fa fa-play"></i>
                        </button>

                        <button type="button" id="button_stop" className="btn">
                            <i className="fa fa-stop"></i>
                        </button>

                        <button type="button" id="button_fw" className="btn" >
                            <i className="fa fa-forward"></i>
                        </button>

                        <button type="button" id="button_ffw" className="btn">
                            <i className="fa fa-fast-forward"></i>
                        </button>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default VideoContainer;
