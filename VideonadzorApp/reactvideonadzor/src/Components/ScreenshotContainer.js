import React, {Component} from 'react';
import './Css/stream.css'

class ScreenshotContainer extends Component{
  render(){
    return(
      <div>
          <div className="screenshot-container-title">Screenshots</div>

          <div className="screenshot-container">
              <div className="screenshot"></div>
              <div className="screenshot"></div>
              <div className="screenshot"></div>
              <div className="screenshot"></div>
              <div className="screenshot"></div>
              <div className="screenshot"></div>
              <div className="screenshot"></div>
              <div className="screenshot"></div>
              <div className="screenshot"></div>
          </div>

      </div>
    );
  }
}

export default ScreenshotContainer;
