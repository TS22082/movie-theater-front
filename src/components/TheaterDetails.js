import React, { Component } from 'react'
import { Column, Row, Container } from './ReactControls'
import '../stylesheet/theater_details.css'
import Movie from './Movie'

class TheaterDetails extends Component {
  constructor( props ){
    super( props )

    this.state = {
      name: '',
      movies: []
    }
  }

  componentDidMount(){
    const url = `http://localhost:3002/theaters/id/${this.props.routeParams.id}`
    const options = {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    fetch( url, options )
      .then( response => response.json() )
      .then( theater => this.setState({...theater}) )
      .catch( error => console.log( error ))
  }

  movieList() {
    return this.state.movies.map( (movie, index) => {
      return (
        <Row key={`m-${index}`}>
          <Movie {...movie} />
        </Row>
      )
    })
  }
    
  render() {
    console.log('Whats the state: ', this.state)

    return (

      <Container>
        <div className="comic-modal-one" id="trailer-modal"></div>
        <Row>
          <Column columns="12">
            <div className="header">
              <h1>{this.state.name}</h1>
              <h3>{this.state.address} | {this.state.phoneNumber}</h3>
            </div>
          </Column>
        </Row>
        {this.movieList()}
      </Container>
    )
  }
}

export default TheaterDetails