import React, { Component } from 'react'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

const DEFAULT_ZIP = '94607'
const DEFAULT_CENTER = { lat: 37.804444, lng: -122.270833 }

export default class Root extends Component {
  constructor( props ) {

    super( props )
    
    this.state = {
      zipCode: '',
      theaters: [],
      center: DEFAULT_CENTER
    }
  }

  componentDidMount() {
    this.zipcodeSubmitted( DEFAULT_ZIP )
  }

  zipcodeSubmitted( zipCode ) {
    const url = `http://localhost:3002/theaters/${zipCode}`
    const zipUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}`

    const options = {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    fetch( url, options )
      .then( response => response.json() )
      .then( theaters => {
        fetch( zipUrl, { mode: 'cors' } )
          .then( response => response.json() )
          .then( geocode => {
            const center = (( geocode.results[ 0 ] || {} ).geometry || {} ).location || DEFAULT_CENTER

            this.setState({ zipCode, theaters, center })
          })
      })
      .catch( error => console.log( error ))
  }

  render() {
    console.log( this.props )
    return (
      <div className="App">
        <Header onZipCode={this.zipcodeSubmitted.bind(this)} />
        <Main {...this.state} history={this.props.history} />
        <Footer />
      </div>
    );
  }
}