import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (


        <div className="row ">

            <div className="col-md-6 ">
                <Link className='btn btn-primary btn-lg' to={{ pathname: '/' }}>Espace Santé</Link>
            </div>
            <div className="col-md-6">
                <Link className='btn btn-primary perso btn-lg' to={{ pathname: '/perso' }}>Mes rendez-vous</Link>

            </div>
        </div>
   
    )
  }
}
