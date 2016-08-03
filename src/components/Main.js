import React, { Component } from 'react'
import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'

class Main extends Component {
  componentDidMount() {
    this.updateMap()
  }

  componentDidUpdate( previousProps, previousState ) {
    this.updateMap()
  }

  updateMap() {
    const element = document.querySelector( '.main' )
    const options = {
      center: { lat: 37.804444, lng: -122.270833 },
      scaleControl: true,
      zoom: 10,
      draggable: false
    }

    GoogleMapsLoader.load( google => { 
      const map = new google.maps.Map( element, options )

      this.props.theaters.forEach( theater => {
        const infoWindow = new google.maps.InfoWindow({
          content: theater.address
        })

        const marker = new google.maps.Marker({
          position: theater.position,
          map,
          title: theater.name
        })

        marker.addListener( 'click', () => infoWindow.open( map, marker ))
      })
    })
  }

  render() {
    return (
      <div className="main"></div>
    )
  }
}

export default Main