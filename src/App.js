import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import Basic from './pages/Basic.jsx';
import Crud from './pages/Crud.jsx';
import Api from './pages/Api.jsx';


 

class App extends Component {
  render() {
    return (
    <Router>
      <div>
       <Route exact path="/" component={Home} />
       <Route path="/basic" component={Basic} />
       <Route path="/crud" component={Crud} />
       <Route path="/api" component={Api} />
     </div>
    </Router>
    );
  }
}

export default App;
