import { useState } from 'react';

import style from './Exo7.module.css';
import { Compteur } from './Compteur';

// Composant "parent"
export const Exo7 = () => {

    const [birds, setBirds] = useState([
        {
            id: 1,
            name: 'Pinçon',
            skin: '🐦',
            visibility: true,

        },
        {
            id: 2,
            name: 'Ara',
            skin: '🦜',
            visibility: true

        }
    ]);

    //* Variable pour compteur --> déplacée dans Compteur

    const hideBird = (id) => {
        const newBirds = birds.map((bird) => {
            if (bird.id === id)
                bird.visibility = !bird.visibility
            // on change la visibilité par sa valeur inverse
            return bird
        })
        setBirds(newBirds)

    }

    return (
        <div className={style.parent}>
            <h2> Comptage d'oiseaux au Parc de Forest 🌳🧮</h2>

            <p>Qu'avez vu aujourd'hui ?  :</p>
            {
                birds.map(bird => (
                    <div key={bird.id}>
                        {bird.visibility && <Compteur bird={bird} />}
                        {/* same as :  */}
                        {/* {bird.visibility === true && <Compteur bird={bird} />} */}

                       
                        <label className={style.switch}>
                            <input onClick={() => { hideBird(bird.id) }}type="checkbox"/>
                                <span className={style.slider}>

                                </span>
                        </label>

                        < button onClick={() => { hideBird(bird.id) }}> Cacher ce compteur </button>
                    </div>
                )
                )
            }
        </div>
    )

}
