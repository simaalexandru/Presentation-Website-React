import React, {Component} from 'react';
import Nav from '../Nav.jsx'
import YouTube from 'react-youtube';

class Crud extends Component{
    render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
        <div>
        <div className="wrap-page api">
          <Nav />
          
              <div className="cont-page">
              <h2 className="heading-page">API</h2>
                  <YouTube
                    videoId="KYBsBagaG-I"
                    opts={opts}
                    onReady={this._onReady}
                  />
                  <p className="paragraph">In this video we created a simple application where we show you how to fetch data from an API with React using Axios.</p>
                   
              </div>

          </div>
        </div>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

}

export default Crud