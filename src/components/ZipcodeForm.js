import React, { Component } from 'react'

class ZipcodeForm extends Component {
  constructor() {
    super()

    this.data = {
      text: ''
    }
  }

  clicked() {
    this.props.onZipCode( this.data.text )
  }

  onTextEntered( event ) {
    this.data.text = event.target.value
  }

  render() {
    return (
      <div className="zipcode-form">
        <input type="text" onKeyUp={this.onTextEntered.bind(this)} />
        <button onClick={this.clicked.bind(this)}>Go</button>
      </div>
    )
  }
}

export default ZipcodeForm