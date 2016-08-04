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

      // The problem was that we were doing too many things - firing updateMap
      // on load, which was giving us an extra updateMap call since the component
      // was firing updateMap on didMount
      // As well, we were triggering the resize event *in* the recenter function
      // which was causing an infinite loop
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
      ReactDOM.render( <TheaterWindow />, infoDiv )
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