import { useState } from 'react';

import style from './Exo7.module.css';
import { Compteur } from './Compteur';

// Composant "parent"
export const Exo7 = () => {

    const [birds, setBirds] = useState([
        // * --> useState pour les variables qui seront amenée à changer
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
              <div className={style.containerCompteur}> 
            {
                birds.map(bird => (
                    <div className={style.containerJeSaisPlus} key={bird.id}> 
                        {bird.visibility && <Compteur bird={bird} />}
                        {/* same as :  */}
                        {/* {bird.visibility === true && <Compteur bird={bird} />} */}

                        <div className={style.containerToggle}> 
                            <div className={bird.visibility === true ?
                                style.toggleShow :
                                style.toggleHide }>
                            </div>
                            <div> 
                            <label className={style.switch}>
                                <input onClick={() => { hideBird(bird.id) }} type="checkbox" />
                            
                                <span className={style.slider}>

                                </span>
                               
                            </label>
                            </div>
                            </div>
                       </div>
                       

                   
                 
                )
                )
            }
        </div>
        </div>
    )

}

//* * La key doit toujours est sur l'élement le plus a l'extérieur, donc il a été mis sur la div enveloppante et non la map comme dans les exo précédents