import React, {Component} from 'react';
import Nav from '../Nav.jsx'
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
         <div>
             <Nav />
                <div className="wrap-home">
                    <div className="cont-home">
                        <div className="logo"></div> 
                        <div className="heading">REACT FOR BEGINNERS</div>
                        <div className="sub-heading">Welcome to the best tutorial on the internet. Use the navigation on the left or click the button below to start learning. </div>
                        <Link to="/basic" >
                        <div className="button">Start</div>
                        </Link>
                    </div>
                </div>
             </div>
        );
    }

}

export default Home