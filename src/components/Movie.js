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
                <a href={this.props.trailer} target="_blank" className="">View trailer</a>          
              </div>
            </Column>          
          </Row>
        </Jumbo>
      </Container>
    )
  }
}

