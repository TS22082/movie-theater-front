import React, { Component } from 'react'

export class Column extends Component {
  render() {
    return <div className={`col-md-${this.props.columns}`}>{this.props.children}</div>
  }
}

export class Row extends Component {
  render() {
    return <div className="row">{this.props.children}</div>
  }
}

export class Container extends Component {
  render() {
    return <div className="container">{this.props.children}</div>
  }
}

export class Jumbo extends Component {
  render() {
    return <div className="jumbotron">{this.props.children}</div>
  }
}