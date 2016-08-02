import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js'

class App extends Component {
  zipcodeSubmitted( zipCode ) {
    console.log( zipCode )
  }

  render() {
    return (
      <div className="App">
        <Header onZipCode={this.zipcodeSubmitted.bind(this)} />
        // <div className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h2>Welcome to React</h2>
        // </div>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
      </div>
    );
  }
}

export default App;
