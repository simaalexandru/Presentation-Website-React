import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render(){
      return(
        <nav className="main-menu">
        <ul>
            <li className="has-subnav">
                    <Link to="/" >
                    <i className="fa fa-home fa-2x"></i>
                    <span className="nav-text">
                        Home
                    </span>
                    </Link>
              
            </li>
            <li className="has-subnav">
                    <Link to="/basic" >
                    <i className="fa fa-graduation-cap fa-2x"></i>
                    <span className="nav-text">
                        Basic React Concepts
                    </span>
                    </Link>
                
            </li>
            <li className="has-subnav">
                   <Link to="/crud" >
                   <i className="fa fa-list fa-2x"></i>
                    <span className="nav-text">
                        CRUD 
                    </span>
                    </Link>
            </li>
            <li className="has-subnav">
                   <Link to="/api" >
                   <i className="fa fa-connectdevelop fa-2x"></i>
                    <span className="nav-text">
                        API Integration
                    </span>
                    </Link>
            </li>
        </ul>
    </nav>
      );
    }
}

export default Nav