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

                <div className='btns'>
                    <button onClick={() => this.setState({liste_stags:[]})}>Clear All</button>
                    <button onClick={() => this.setState({liste_stags:this.props.stagiaires})}>All</button>
                    <button onClick={() => this.setState({liste_stags:this.props.stagiaires.filter(s => s.filiere === 'TDI')})}>Filiere TDI</button>
                    <button onClick={() => this.setState({liste_stags:this.props.stagiaires.filter(s => s.filiere === 'TRI')})}>Filiere TRI</button>
                </div>
            </div>
        )
    }
}
