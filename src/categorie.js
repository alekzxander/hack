import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import dentiste from './images/anesthesia.png'
import doctor from './images/doctor-2.png'
import oeil from './images/view.png'
import ortho from './images/learning.png'
import teddy from './images/teddy-bear.png'
import hand from './images/massage.png'

export default class Categorie extends Component {
  render() {
    return (
      <div>
            <div id="categorie">
                <div className="row">
                    <div className="col-md-4">
                        <Link to={{ pathname: '/dentiste' }}><img src={dentiste} alt="" /></Link>
                        <h3>Dentiste</h3>
                    </div>
                    <div className="col-md-4">
                        <Link to={{ pathname: '/medecin' }}><img src={doctor} alt="" /></Link>
                        <h3>Mon Medecin</h3>
                    </div>
                    <div className="col-md-4">
                        <Link to={{ pathname: '/ophtalmo' }}><img src={oeil} alt="" /></Link>
                        <h3>Ophtalmo</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={ortho} alt="" />
                        <h3>Ortophoniste</h3>
                    </div>
                    <div className="col-md-4">
                        <img src={teddy} alt="" />
                        <h3>Pediatre</h3>
                    </div>
                    <div className="col-md-4">
                        <img src={hand} alt=""/>
                        <h3>Kiné</h3>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
