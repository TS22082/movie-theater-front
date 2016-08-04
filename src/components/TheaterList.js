import React, { Component } from 'react'

export default class TheaterList extends Component {
  render() {
    return (
      <div>
        {this.props.theaters.map( theater => theater.name )}
      </div>
    )
  }
}