import React, {Component} from 'react'
import './Css/stream.css'

class VideoContainer extends Component{
  render(){
    return(
      <div className="video-container">
          <div className="video-streamer"></div>
          <div className="video-controls">
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
          </div>
      </div>
    );
  }
}

export default VideoContainer;
