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
              <h2 className="heading-page">BASICS</h2>
                  <YouTube
                    videoId="cu0uoT21NZI"
                    opts={opts}
                    onReady={this._onReady}
                  />
                  
                  <p className="paragraph">
                  A full introduction to React basics. In this video we are talking about the various concepts you will encounter when using React. At the end of the video you will be able to create browser-based apps and websites with this component based framework.
                  </p>
               <h3 className="sub-title">Topics</h3>
                   <div class="ac-container">
                        <div>
                            <input id="ac-0" name="accordion-1" type="checkbox" />
                            <label for="ac-0">Render function</label>
                            <article class="ac-small">
                                <p class="p2-legal">Each component in React has a Render Function. When a component is rendered, it means that it is linked to a DOM element and populates that element. </p>
                                <p class="p2-legal">Starts at: 7:14  <a href="https://github.com/Maevios/React-tutorial-files/tree/master/React%20tutorial/Render%20Function">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-1" name="accordion-1" type="checkbox" />
                            <label for="ac-1">Rendering a list</label>
                            <article class="ac-small">
                                <p class="p2-legal">Rendering a list
                                    In our example we loop through the fruits array using the JavaScript function map(). We return each element from the list in a div </p>
                                <p class="p2-legal">Starts at: 8:03 <a href="https://github.com/Maevios/React-tutorial-files/tree/master/React%20tutorial/Render%20List">GitHub Files</a></p>
                            </article>
                        </div>
                        <div>
                            <input id="ac-2" name="accordion-1" type="checkbox" />
                            <label for="ac-2">Events</label>
                            <article class="ac-small">
                                <p class="p2-legal">Event listeners are callback functions that allow the programmer to trigger the associated callback to an event(click, touch). </p>
                                <p class="p2-legal">Starts at: 10:03 <a href="https://github.com/Maevios/React-tutorial-files/blob/master/React%20tutorial/Events/Events2.js">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-3" name="accordion-1" type="checkbox" />
                            <label for="ac-3">Refs</label>
                            <article class="ac-small">
                                <p class="p2-legal">Ref is returning a reference to the element. Ref attribute allows to reference a DOM node in order to access it and  to interact with it.</p>
                                <p class="p2-legal">Starts at: 13:15 <a href="https://github.com/Maevios/React-tutorial-files/blob/master/React%20tutorial/Refs/Refs.js">GitHub Files</a></p>
                            </article>
                        </div>
                        
                        <div>
                            <input id="ac-4" name="accordion-1" type="checkbox" />
                            <label for="ac-4">State and setState</label>
                            <article class="ac-small">
                                <p class="p2-legal">One of the most basic ideas of React and a way to hold and process information for your React component </p>
                                <p class="p2-legal">Starts at: 17:42  <a href="https://github.com/Maevios/React-tutorial-files/blob/master/React%20tutorial/state/App.js">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-5" name="accordion-1" type="checkbox" />
                            <label for="ac-5">Props</label>
                            <article class="ac-small">
                                <p class="p2-legal">Learn how to pass custom data using props</p>
                                <p class="p2-legal">Starts at: 22:55  <a href="https://github.com/Maevios/React-tutorial-files/tree/master/React%20tutorial/props">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-6" name="accordion-1" type="checkbox" />
                            <label for="ac-6">Lifecycle methods</label>
                            <article class="ac-small">
                                <p class="p2-legal">Learn about React’s lifecycle concept and the different methods that you can use. Code along with the video to implement the componentWillMount and componentDidMount methods.
</p>                            <p class="p2-legal">Starts at: 42:35  <a href="https://github.com/Maevios/React-tutorial-files/blob/master/React%20tutorial/lifecycle/myComponent.js">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-7" name="accordion-1" type="checkbox" />
                            <label for="ac-7">Controlled and uncontrolled inputs</label>
                            <article class="ac-small">
                                <p class="p2-legal">Learn how to dynamically control an input using events and states. </p>
                                <p class="p2-legal">Starts at: 37:44  <a href="https://github.com/Maevios/React-tutorial-files/blob/master/React%20tutorial/Controlled%20inputs/App.js">GitHub Files</a></p>

                            </article>
                        </div>
                        <div>
                            <input id="ac-8" name="accordion-1" type="checkbox" />
                            <label for="ac-8">React Router</label>
                            <article class="ac-small">
                                <p class="p2-legal">Learn how to pass custom data using props</p>
                                <p class="p2-legal">Starts at: 46:40  <a href="https://github.com/Maevios/React-tutorial-files/blob/master/React%20tutorial/Router/App.js">GitHub Files</a></p>

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