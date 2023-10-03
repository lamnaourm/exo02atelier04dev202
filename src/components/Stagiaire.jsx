import React from 'react'

export default function Stagiaire({ nom, filiere, image }) {
    return (
        <div className='stagiaire'>
            <img src={image} alt={nom} />
            <div>
                <h1>{nom} - {filiere}</h1>
                <h4>Age : {age}</h4>
            </div>
        </div>
    )
}
