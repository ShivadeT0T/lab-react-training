import React, { Component } from 'react'

export class CreditCard extends Component {
  render() {
    
    const divStyle = {
        backgroundColor: `${this.props.bgColor}`,
        color: `${this.props.color}`
    }

    const lastFour = this.props.number.slice(-4)

    return (
      <div className='CreditCard' style={divStyle}>
        <div className="type">
            {this.props.type === "Visa" && <img style={{width: '57px', height:'20px'}} src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png" alt="visa" />}
            {this.props.type === "Master Card" && <img style={{width: '33px', height:'20px'}} src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg" alt="master card" />}
        </div>
        <div className='number'>
            •••• •••• •••• {lastFour}
        </div>
        <div className='expires-bank'>
            <span>Expires {this.props.expirationMonth}/{this.props.expirationYear}</span>
            <span className='bank'>{this.props.bank}</span>
        </div>
        <div className='owner'>
            {this.props.owner}
        </div>
      </div>
    )
  }
}

export default CreditCard