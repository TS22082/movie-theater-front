import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

class App extends Component {
  zipcodeSubmitted( zipCode ) { 
    console.log(zipCode)
    const url = `http://localhost:3002/theaters/${zipCode}`
    const options = {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    fetch( url, options )
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
