import React from 'react'
import Konyv from './Konyv'

export default function Konyvek(props) {
    return (

        <div className="row">
            <h2>Könyveink</h2>

            {
                props.konyvLista.map((adat, index) => {
                    <Konyv adat={props.konyvLista[0]} />

                })

            }
        </div>
    )
}
