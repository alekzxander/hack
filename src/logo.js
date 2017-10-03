import React, { Component } from 'react'
import logo from './images/atomic.png'

export default class Logo extends Component {
  render() {
    return (
        <div>
            <img src={logo} className='logo' alt="" />

        </div>
    )
  }
}
