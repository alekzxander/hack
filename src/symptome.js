import React, { Component } from 'react'

export default class Symptome extends Component {

    constructor(props) {
        super(props)

        this.state = {
            symp: {
                fievre: "",
                toux: "",
                mauxDeTete: "",
                malAuDos: "",
                nausee: ""
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {

        fetch('http://localhost:3000/symptome')
            .then((sympthome) => {
                return sympthome.json();
            })
            .then((getSympthome) => {
                this.setState({
                    symp: getSympthome
                })
            })
    }

    handleClick(e) {
        e.preventDefault();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(name)
        this.setState({
            [name]: value
        });

    }

    render() {

        return (

            <div>
                <div className="col-sm-6 col-md-7">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3>Sympthôme</h3>
                            <form onSubmit={this.handleSubmit}>
                                <label className="checkbox-inline">
                                    <input onChange={this.handleChange} type="checkbox" name="fievre" value="fievre" /> Fièvre
                                    </label>
                                <label className="checkbox-inline">
                                    <input onChange={this.handleChange} type="checkbox" name="toux" value="toux" /> Toux
                                    </label>
                                <label className="checkbox-inline">
                                    <input onChange={this.handleChange} type="checkbox" name="mauxDeTete" value="maux de tête" /> Maux de tête
                                    </label>
                                <label className="checkbox-inline">
                                    <input onChange={this.handleChange} type="checkbox" name="malAuDos" value="mal au dos" /> Mal au dos
                                    </label>
                                <label className="checkbox-inline">
                                    <input onChange={this.handleChange} type="checkbox" name="nausee" value="nausée" /> Nausée
                                    </label>
                                <p><a onClick={this.handleSubmit} href="" className="btn btn-warning">Envoyer</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
