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
        <div className="wrap-page">
          <Nav />
          
              <div className="cont-page">
              <h2 className="heading-page">CRUD</h2>
                  <YouTube
                    videoId="oCUzgXlVh8M"
                    opts={opts}
                    onReady={this._onReady}
                  />
                  <p className="paragraph">Using local storage to store and retrieve a list of movies. Add functionality in order to add a new movie by filling a form and editing or deleting the existing ones by using buttons.</p>
               <h3 className="sub-title">Topics</h3>
                   <div class="ac-container">
                        <div>
                            <input id="ac-0" name="accordion-1" type="checkbox" />
                            <label for="ac-0">Get</label>
                            <article class="ac-small">
                                <p class="p2-legal">Starts at: 01:48  <a href="https://github.com/Maevios/React-tutorial-files/blob/master/React%20tutorial/lifecycle/myComponent.js">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-1" name="accordion-1" type="checkbox" />
                            <label for="ac-1">Delete</label>
                            <article class="ac-small">
                                <p class="p2-legal">Starts at: 12:28  <a href="https://github.com/Maevios/React-tutorial-files/tree/master/CRUD/Get:Delete">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-2" name="accordion-1" type="checkbox" />
                            <label for="ac-2">Add</label>
                            <article class="ac-small">
                                <p class="p2-legal">Starts at: 28:57  <a href="https://github.com/Maevios/React-tutorial-files/tree/master/CRUD/Add">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-3" name="accordion-1" type="checkbox" />
                            <label for="ac-3">Edit</label>
                            <article class="ac-small">
                                <p class="p2-legal">Starts at: 41:03  <a href="https://github.com/Maevios/React-tutorial-files/tree/master/CRUD/Edit">GitHub Files</a></p>

                            </article>
                        </div>

</div>
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