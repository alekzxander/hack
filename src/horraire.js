import React, { Component } from 'react'

export default class Horraire extends Component {
  render() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Lundi</th>
                    <th>Mardi</th>
                    <th>Mercredi</th>
                    <th>Jeudi</th>
                    <th>Vendredi</th>
                    <th>Samedi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Matin</th>
                    <td>8h00 - 11h45</td>
                    <td>8h00 - 11h45</td>
                    <td>8h00 - 11h45</td>
                    <td>8h00 - 11h45</td>
                    <td>8h00 - 11h45</td>
                    <td>8h00 - 11h45</td>
                </tr>
                <tr>
                    <th scope="row">Aprés-midi</th>
                    <td>13h30 - 18h45</td>
                    <td>13h30 - 18h45</td>
                    <td>13h30 - 18h45</td>
                    <td>13h30 - 18h45</td>
                    <td>13h30 - 18h45</td>
                    <td>13h30 - 18h45</td>
                </tr>
            </tbody>
        </table>
    )
  }
}
