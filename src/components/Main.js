import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server'
import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyAM7VdvORTJeo8DihlqK4wT1dHCF6m2VpY'

import TheaterWindow from './TheaterWindow.js'

class Main extends Component {
  componentDidMount() {
    console.log('componentDidMount')
    this.updateMap()
  }

  componentDidUpdate( previousProps, previousState ) {
    console.log('componentDidUpdate')
    this.updateMap()
  }

  updateMap() {
    if( this.props === undefined ) {
      return
    }

    const element = document.querySelector( '.map' )
    const options = {
      center: this.props.center,
      scaleControl: true,
      zoom: 12
    }

    GoogleMapsLoader.load( google => { 
      const map = new google.maps.Map( element, options )

      console.log(this.props.theaters)
      
      this.props.theaters.forEach( theater => {
        const infoWindow = new google.maps.InfoWindow({
          content: ReactDOMServer.renderToString( <TheaterWindow {...theater} /> )
        })

        const marker = new google.maps.Marker({
          position: theater.position,
          map,
          title: theater.name
        })

        marker.addListener( 'click', () => infoWindow.open( map, marker ))
      })

      const recenter = () => {
        console.log( recenter )
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
      }

      google.maps.event.addDomListener(element, 'load', this.updateMap );
      google.maps.event.addDomListener(element, "resize", recenter.bind(this));
    })
  }

  render() {
    console.log( 'render', this.props )
    return (
      <div className="map"></div>
    )
  }
}

export default Main