import React, { Component } from 'react'
import profil from './images/man.png'

export default class Header extends Component {
  render() {
    return (
      <div className='enTete'>
        <img src={profil} className='profil' alt=""/>
      </div>
    )
  }
}
