import React, { Component } from 'react'

class ZipcodeForm extends Component {
  constructor() {
    super()

    this.data = {
      text: '',
      counter: 1
    }
  }

  clicked() {
    this.props.onZipCode( this.data.text )
  }

  onTextEntered( event ) {
    this.data.text = this.data.counter++
  }

  render() {
    return (
      <div className="zipcode-form">
        <input type="text" onKeyDown={this.onTextEntered.bind(this)} />
        <button onClick={this.clicked.bind(this)}>Go</button>
      </div>
    )
  }
}

export default ZipcodeForm