import React, { Component } from 'react'

export default class Autre extends Component {

    constructor(props) {
        super(props)

        this.state = {
            autre: {
                certificat: "",
                arretDeTravail: "",
                renouvellementOrrdonnance: "",
                demandeDeBilan: ""
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                certificat: this.state.certificat,
                arretDeTravail: this.state.arretDeTravail,
                renouvellementOrrdonnance: this.state.renouvellementOrrdonnance,
                demandeDeBilan: this.state.demandeDeBilan,
            })
        })
        console.log(this.state.autre)
        console.log("click")
    }

    handleClick(e) {
        e.preventDefault();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
            <div className="col-sm-4 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>Autre demande</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label className="checkbox-inline">
                                <input onChange={this.handleChange} type="checkbox" name="certificat" value="certificat" /> Certificat
                                    </label>
                            <label className="checkbox-inline">
                                <input onChange={this.handleChange} type="checkbox" name="arretDeTravail" value="arret de travail" /> Arrêt de travail
                                    </label>
                            <label className="checkbox-inline">
                                <input onChange={this.handleChange} type="checkbox" name="renouvellementOrrdonnance" value="renouvellement ordonnance" /> Renouvellement ordonnance
                                    </label>
                            <label className="checkbox-inline">
                                <input onChange={this.handleChange} type="checkbox" name="demandeDeBilan" value="demande de bilan" /> Demande de bilan
                                    </label>

                            <p><a onClick={this.handleClick} className="btn btn-warning">Button</a></p>
                        </form>
                    </div>
                </div>
                </div>
            </div>    
        )
    }
}
