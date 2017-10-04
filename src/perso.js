import React, { Component } from 'react'
import profil from './images/xd.png';
import dentiste from './images/anesthesia.png'
import doctor from './images/doctor-2.png'
import oeil from './images/view.png'
import ortho from './images/learning.png'
import teddy from './images/teddy-bear.png'
import hand from './images/massage.png'
export default class Perso extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="espace">Mon espace perso</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="name">

              <img src={profil} alt="" />
              <h1>Clemence Sandance</h1>
            </div>
          </div>
          <div className="col-md-6">

          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
              <div className="carte">
                <img src={dentiste} alt=""/>
                <h3>Mon dentiste</h3>
                <p>Dr. Ledoux</p>
                <br/>
                
                <h4>Saint-Denis 97400,<br/> 74 rue du moufia</h4>
                <br/>
              <p><button className='btn btn-warning'>Plus d'info</button></p>
              <br/>
              <p><i class="fa fa-phone fa-3x"></i><i class="fa fa-envelope fa-3x"></i></p>
              
              </div>
          </div>
          <div className="col-md-4">
              <div className="carte">
                <img src={doctor} alt=""/>
                <h3>Mon medecin</h3>
                <p>Dr. Wharro</p>
                <br/>
                <h4>Saint-Denis 97400,<br/> 74 rue du moufia</h4>
                <br/>
              <p><button className='btn btn-warning'>Plus d'info</button></p>
              <br/>
              <p><i class="fa fa-phone fa-3x"></i><i class="fa fa-envelope fa-3x"></i></p>
              
              </div>
          </div>
          <div className="col-md-4">
              <div className="carte">
                  <img src={oeil} alt=""/>
                  <h3>Mon Ophtalmologue</h3>
                  <p>Dr. Berguaize</p>
                  <br/>
                <h4>Saint-Denis 97400,<br/> 74 rue du moufia</h4> 
                <br/>
              <p><button className='btn btn-warning'>Plus d'info</button></p>  
              <br/>
              <p><i class="fa fa-phone fa-3x"></i><i class="fa fa-envelope fa-3x"></i></p>
                             
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="carte">
              <img src={ortho} alt=""/>
              <h3>Mon Ortophoniste</h3>
             <p> Mme. Deveau</p>
             <br/>
             <h4>Saint-Denis 97400,<br/> 74 rue du moufia</h4>    
             <br/>
              <p><button className='btn btn-warning'>Plus d'info</button></p>    
              <br/>
              <p><i class="fa fa-phone fa-3x"></i><i class="fa fa-envelope fa-3x"></i></p>
                   
            </div>
          </div>
          <div className="col-md-4">
            <div className="carte">
                <img src={teddy} alt=""/>
                <h3>Mon piediatre</h3>
                <p>Dr. Gaouner</p>
                <br/>
                <h4>Saint-Denis 97400,<br/> 74 rue du moufia</h4>  
                <br/>
              <p><button className='btn btn-warning'>Plus d'info</button></p>     
              <br/>
              <p><i class="fa fa-phone fa-3x"></i><i class="fa fa-envelope fa-3x"></i></p>
                       
            </div>
          </div>
          <div className="col-md-4">
            <div className="carte">
              <img src={hand} alt=""/>
              <h3>Mon kinésithérapeute</h3>
              <p>Dr. Pouisson</p>
              <br/>
              <h4>Saint-Denis 97400,<br/> 74 rue du moufia</h4> 
              <br/>
              <p><button className='btn btn-warning'>Plus d'info</button></p>
              <br/>
              <p><i class="fa fa-phone fa-3x"></i><i class="fa fa-envelope fa-3x"></i></p>
            </div>
          </div>
        </div>
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}
