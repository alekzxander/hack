import React, { Component } from 'react'
import Horraire from './horraire'
import Symptome from './symptome'
import Autre from './autre'

export default class Medecin extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="dent">
                            <p>Cabinet</p>
                            <h3>Medecin</h3>
                        </div>
                        <div className="cabinet">
                            <ul>
                                <li>Docteur <strong>Hosreau</strong></li>
                                <li>Docteur <strong>Strauch</strong></li>
                                <li>Docteur <strong>Folamour</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 horaire">
                        <h2>Horaires</h2>
                        <Horraire />
                    </div>
                </div>
                
                <div className="trait"></div>

                <div className="row">
                    <Symptome />
                    <Autre />
                </div>

                <div className="row">
                    <div className="col-md-6 prevention">
                        <h2>Prévention :</h2>
                        <ul>
                            <li>Pour votre santé, pratiquez une une activité physique régulière</li>
                            <li>Manger 5 fruits et légumes par jour</li>
                        </ul>
                    </div>
                    <div className="col-md-6">

                        <div className="map">
                            <iframe title="medecin" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14910.877158345642!2d55.44481059591998!3d-20.883361785267176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827fab69a28343%3A0xd87444a35748665!2sDr+Pierre-%C3%89tienne+BULTH%C3%89!5e0!3m2!1sfr!2sus!4v1507100018422"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
