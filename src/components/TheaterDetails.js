import React, { Component } from 'react'
import { Column, Row, Container } from './ReactControls'

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
    

  render() {
    console.log('Whats the state: ', this.state)

    return (
      <Container>
        <Row>
          <Column columns="8">
            <h1>{ this.state.name }</h1>
          </Column>
          <Column columns="4">
            <h1>{ this.state.address }</h1>
          </Column>
        </Row>
        <Row>
          <Column columns="12">
            {this.state.movies.map( (movie, index) => <Movie {...movie} key={`m-${index}`} /> )}
          </Column>
        </Row>
      </Container>    
    );
  }
}



export default TheaterDetails