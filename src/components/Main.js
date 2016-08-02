import React, { Component } from 'react'
import GoogleMapsLoader from 'google-maps'

class Main extends Component {
  componentDidMount() {
    const element = document.querySelector( '.map' )
    const options = {
      center: { lat: 37.7918786, lng: -122.3688786 },
      scrollwheel: false,
      zoom: 10
    }

    GoogleMapsLoader.load( google => new google.maps.Map( element, options ))
  }

  render() {
    return (
      <div className="main">
        <div className="map"></div>
      </div>
    )
  }
}

export default Main