import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

class App extends Component {
  zipcodeSubmitted( zipCode ) {
    fetch( 'http://localhost:3002/theaters/' + zipCode, {} )
      .then( response => response.json() )
      .then( json => console.log( json ))
      .catch( error => console.log( error ))
  }

  render() {
    return (
      <div className="App">
        <Header onZipCode={this.zipcodeSubmitted.bind(this)} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
