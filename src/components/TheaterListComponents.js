import React, { Component } from 'react'

export default class TheaterListComponents extends Component {
  clickShowtimes( event ) {
    event.preventDefault()

    this.props.history.push( `/theater/${this.props.id}` )
  }
  render() {
    return (
      <div className="movie jumbotron" onClick={this.clickShowtimes.bind(this)}>
        <div className="row">
          <div className="col-xs-6 col-md-12">
            <h2>{this.props.name}</h2>
            <p>{this.props.address}</p>
            <p>{this.props.phoneNumber}</p>
          </div>
        </div>
      </div>

    )
  }
}