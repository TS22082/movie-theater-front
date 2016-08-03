import React, { Component } from 'react'

export default class TheaterWindow extends Component {
  render() {
    return (
      <div className="theater-window">
        <div className="name">{this.props.name}</div>
        <div className="address">{this.props.address}</div>
        <div className="phone">{this.props.phoneNumber}</div>
        <button>Showtimes</button>
      </div>
    )
  }
}