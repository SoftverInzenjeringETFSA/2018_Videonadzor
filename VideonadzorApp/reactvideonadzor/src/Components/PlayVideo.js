import axios from 'axios'
import React, {Component} from 'react'

const search_style ={
  backgroundColor:'#2c6fd4',
  color:'#ffffff'
};

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
          <video ref="vidRef" src="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"></video>
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
          <button id='playButton' onClick={this.props.playVideo}>Play!</button>
          <button id='pauseButton' onClick={this.props.pauseVideo}>Pause!</button>
        </div>
      );
    }
  }
  
 export default Video ;