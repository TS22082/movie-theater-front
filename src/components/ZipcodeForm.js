import React, { Component } from 'react'

class ZipcodeForm extends Component {
  constructor() {
    super()

    this.data = {
      text: ''
    }
  }

  clicked() {
    if( this.data.text.length === 5 ) {
      this.props.onZipCode( this.data.text )
    } else {
      console.log( 'TODO: Show an error somehow' )
    }
  }

  toggled( event ) {
    this.props.onToggle( event.target.className )
  }

  onTextEntered( event ) {
    this.data.text = event.target.value

    if( event.keyCode === 13 ) {
      this.clicked()
    }
  }

  render() {
    return (
      <div className="zipcode-form">
        <input className="form_box" type="text" onKeyUp={this.onTextEntered.bind(this)} />
        <button className="btn_zip" onClick={this.clicked.bind(this)}>Go</button>

        <button className="toggle_map" onClick={this.toggled.bind(this)}>Map</button>
        <button className="toggle_list" onClick={this.toggled.bind(this)}>List</button>
      </div>
    )
  }
}

export default ZipcodeForm