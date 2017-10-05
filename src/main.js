import React, { Component } from 'react'
import Categorie from './categorie'
import Perso from './perso'
import Dentiste from './dentiste'
import Medecin from './medecin'
import { Route } from 'react-router-dom';



export default class Main extends Component {
  render() {
    return (
        <div>
            <Route exact path='/' component={Categorie} />
            <Route  path='/perso' component={Perso} />
            <Route path='/dentiste' component={Dentiste} />
            <Route path='/medecin' component={Medecin} />
        </div>
    )
  }
}
