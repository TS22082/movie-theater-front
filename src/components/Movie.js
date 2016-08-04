import React, { Component } from 'react'
import { Column, Row, Container, Jumbo } from './ReactControls'

export default class Movie extends Component {

  tickets() {
    const tickets = this.props.showtime_tickets || {}

    return this.props.showtimes.map( (showtime, index) => {
      const url = tickets[ showtime ]

      return <p key={`st-${index}`}><a href={url} target="_blank">{showtime}</a></p>
    })

    // let result = []
    // for (var time of this.props.showtimes) {
    //   var url = this.props.showtime_tickets[time]
    //   result.push( `<a href="${url}">${time}</a>` )
    // }

    // return result
  }

  render() {
    return (
      <Container>
        <Jumbo>
          <Row>
            <Column columns="6">
              <h2> {this.props.name} </h2>
              <p>rating: {this.props.rating} </p>
              <p>genre: {this.props.genre} </p>
              <p>runtime: {this.props.runtime} </p>
            </Column>
            <Column columns="3">
              { this.tickets() }
            </Column>
            <Column columns="3">
              <p>this will work</p>
            </Column>
          </Row>
        </Jumbo>
      </Container>

      
    )
  }
}

