import React, { Component } from 'react'
import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'

class Main extends Component {
  componentDidMount() {
    const element = document.querySelector( '.main' )
    const options = {
      center: { lat: 37.804444, lng: -122.270833 },
      scaleControl: true,
      zoom: 10
    }

    GoogleMapsLoader.load( google => new google.maps.Map( element, options ))
  }
  render() {
    return (
      <div className="main">

      </div>
    )
  }
}

export default Main