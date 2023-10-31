import React, { Component } from 'react'

export class Random extends Component {
  render() {
    return (
      <div>
        <p>Random value between {this.props.min} and {this.props.max} =&gt; {Math.floor(Math.random() * (this.props.max - this.props.min + 1)) + this.props.min}</p>
      </div>
    )
  }
}

export default Random