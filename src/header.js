import React, { Component } from 'react'
import profil from './images/xd.png'
import logo from './images/logoTrans.png'

export default class Header extends Component {
  render() {
    return (
      <div className='enTete'>
        <img src={logo} className='logoHeade' alt=""/>
        <img src={profil} className='profil' alt=""/>
        
      </div>
    )
  }
}
