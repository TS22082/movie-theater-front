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
        <input className= "form_box" type="text" onKeyUp={this.onTextEntered.bind(this)} />
        <button className="btn_zip" onClick={this.clicked.bind(this)}>Go</button>
        <button className="toggle_map" onClick={this.clicked.bind(this)}>Map</button>
        <button className="toggle_list" onClick={this.clicked.bind(this)}>List</button>
      </div>
    )
  }
}

export default ZipcodeForm