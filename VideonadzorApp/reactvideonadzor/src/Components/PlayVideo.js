import axios from 'axios'
import React, {Component} from 'react'
import {getTrazeniVideo} from './Videos'

const search_style ={
  backgroundColor:'#2c6fd4',
  color:'#ffffff'
};

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
    //this.pretraziVidee = this.pretraziVidee.bind(this);
    
}


    playVideo() {
      /*var video=new Videos;
      var trazeni=video.getTrazeniVideo();
      console.log(trazeni);*/
      //this.refs.vidRef.play();
      window.upload('file:///C:/Users/Amera Alic/Desktop/Dejoo/2018_Videonadzor/VideonadzorApp/uploads/kkk');
    }
    
    pauseVideo() {
      this.refs.vidRef.pause();
     
    }
    
    render() {
      return(
        <div>
          <video ref="vidRef" src={{uri:"file:///C:/Users/Amera Alic/Desktop/Dejoo/2018_Videonadzor/VideonadzorApp/uploads/52f32b961958a952b992169205e5c696"}} ></video>
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