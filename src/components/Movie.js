import React, { Component } from 'react'
import { Column, Row, Container, Jumbo } from './ReactControls'

export default class Movie extends Component {

  tickets() {
    const tickets = this.props.showtime_tickets || {}

    return this.props.showtimes.map( (showtime, index) => {
      const url = tickets[ showtime ]

      return <p key={`st-${index}`}><a href={url} target="_blank">{showtime}</a></p>
    })
  }

  embedLink() {
    const { trailer } = this.props

    const watch = 'http://www.youtube.com/watch?v='
    const embed = 'http://www.youtube.com/embed/'

    return trailer.replace( watch, embed )
  }

  toggleTrailer( event ) {
    const element = document.querySelector( '#trailer-modal' )

    element.innerHTML =
      `<div><div><iframe src=${this.embedLink()} width="560" height="315"
        frameBorder="0" allowFullScreen>
      </iframe></div></div>`

    element.classList.add( 'show-modal' )
  }

  render() {
    return (
      <Container>
        <Jumbo>
          <Row>
            <Column columns="6">
              <div className="main_info">
                <h2> {this.props.name} </h2>
                <p>rating: {this.props.rating} </p>
                <p>genre: {this.props.genre} </p>
                <p>runtime: {this.props.runtime} </p>
              </div>
              </Column>
              <Column columns="3">
                <div className="main_info">
                  { this.tickets() }
                </div>
              </Column>
              <Column columns="3">
                <div className="main_info">
                  <button className="btn btn-danger"
                  onClick={this.toggleTrailer.bind(this)}>Trailer</button>    
                </div>
              </Column>          
            </Row>
          </Jumbo>
        </Container>
  
      
    )
  }
}

