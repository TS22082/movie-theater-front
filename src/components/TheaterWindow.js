import React, { Component } from 'react'

export default class TheaterWindow extends Component {
  clickShowtimes( event ) {
    event.preventDefault()

    this.props.history.push( `/theater/${this.props.id}` )
  }

  render() {
    return (
      <div className="theater-window">
        <div className="name">{this.props.name}</div>
        <div className="address">{this.props.address}</div>
        <div className="phone">{this.props.phoneNumber}</div>

        <a href="#" onClick={this.clickShowtimes.bind(this)}>Showtimes</a>
      </div>
    )
  }
}