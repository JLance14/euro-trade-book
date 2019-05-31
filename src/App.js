import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Templates/Navbar.js'
import Home from './Components/Pages/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <h1>Euro Trade Book</h1>


          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
