import React, { Component } from 'react'

class TheaterDetails extends Component {
     
    const url = `http://localhost:3002/theaters/id/${id}`
    const id = this.props.id
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
            this.setState({ id, theaters, center })   
          })
      
      .catch( error => console.log( error ))
  

  render() {
    return (
      <div>
        {this.props.id}
      </div>
    );
  }
}
export default TheaterDetails