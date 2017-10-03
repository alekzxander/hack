import React, { Component } from 'react'
import Categorie from './categorie'
import Perso from './perso'
import { Route } from 'react-router-dom';



export default class Main extends Component {
  render() {
    return (
        <div>
            <Route exact path='/' component={Categorie} />
            <Route exact path='/perso' component={Perso} />
        </div>
    )
  }
}
