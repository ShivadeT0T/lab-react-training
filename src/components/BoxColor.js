import React, { Component } from 'react'

export class BoxColor extends Component {
  render() {

    const divStyle = {
        backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
        color: `${this.props.textColor}`
    }

    const hex = (this.props.r).toString(16) + (this.props.g).toString(16) + (this.props.b).toString(16)

    return (
      <div style={divStyle}>
        rgb({this.props.r}, {this.props.g}, {this.props.b}) <br />
        #{hex}
      </div>
    )
  }
}

export default BoxColor