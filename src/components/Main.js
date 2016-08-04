import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyAM7VdvORTJeo8DihlqK4wT1dHCF6m2VpY'

import TheaterWindow from './TheaterWindow.js'

class Main extends Component {
  constructor( props ) {
    super( props )

    this.element = null
    this.map = null
    this.google = null
  }

  componentDidMount() {
    this.element = document.querySelector( '.map' )

    GoogleMapsLoader.load( google => {
      this.google = google
      this.map = new this.google.maps.Map( this.element, this.mapOptions() )

      this.google.maps.event.addDomListener( this.element, 'resize', this.recenter.bind(this) )

      this.updateMap()
    })
  }

  componentDidUpdate( previousProps, previousState ) {
    this.updateMap()
  }

  mapOptions() {
    return {
      center: this.props.center,
      scaleControl: true,
      zoom: 12
    }
  }

  recenter() {
    this.map.setCenter( this.props.center )
  }

  updateMap() {
    this.recenter()

    this.props.theaters.forEach( theater => {
      const infoWindow = new this.google.maps.InfoWindow()

      const infoDiv = document.createElement( 'div' )
      ReactDOM.render( <TheaterWindow {...theater} history={this.props.history} />, infoDiv )
      infoWindow.setContent( infoDiv )

      const marker = new this.google.maps.Marker({
        position: theater.position,
        map: this.map,
        title: theater.name
      })

      marker.addListener( 'click', () => infoWindow.open( this.map, marker ))
    })
  }

  render() {
    return (
      <div className="map"></div>
    )
  }
}

export default Main