import React, { Component } from 'react'
import Stagiaire from './Stagiaire'

export default class Etablissement extends Component {

    constructor(props) {
        super(props)

        this.state = {
            liste_stags: this.props.stagiaires
        }
    }

    render() {
        return (
            <div className='etablissement'>
                <h1>Nombre de stagiaires : {this.state.liste_stags.length}</h1>
                {this.state.liste_stags.map(s =>
                    <Stagiaire key={s.id} nom={s.nom} filiere={s.filiere} age={s.age} image={s.image}/>
                )}
            </div>
        )
    }
}
