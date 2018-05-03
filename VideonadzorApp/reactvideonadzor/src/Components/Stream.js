import React, {Component} from 'react';
import './Css/stream.css'
import ScreenshotContainer from './ScreenshotContainer.js'
import VideoContainer from './VideoContainer.js'

class Stream extends Component{
  render(){
    return(
      <div id="contentBody" >
          <VideoContainer />
          <ScreenshotContainer />
      </div>
    );
  }
}

export default Stream;
