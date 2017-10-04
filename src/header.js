import React, { Component } from 'react'
import profil from './images/xd.png'
// import logo from './images/logo.png'

export default class Header extends Component {
  render() {
    return (
      <div className='enTete'>
        {/* <img src={logo} className='' alt=""/> */}
        <img src={profil} className='profil' alt=""/>
        
        <h1>Prevenir son avenir</h1>
      </div>
    )
  }
}
