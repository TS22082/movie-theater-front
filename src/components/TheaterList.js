import React, { Component } from 'react'
import { Row } from './ReactControls'

import TheaterComponents from './TheaterListComponents.js'


export default class TheaterList extends Component {

  list() {
    return this.props.theaters.map( (theater, index) => {
      return (
        <Row key={`m-${index}`}>
          <TheaterComponents {...theater} history={this.props.history} />
        </Row>
      )
    })
  }

  render() {
    return (
      <div className="container-fluid">
        {this.list()}
      </div>


    )
  }
}