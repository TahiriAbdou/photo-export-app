import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="well">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Facebook App Photo Exporter</h2>
        </div>
        <p className="App-intro">
            <Button href="/login" bsStyle="primary"> Log-in with Facebook </Button>
        </p>
      </div>
    );
  }
}

export default App;
