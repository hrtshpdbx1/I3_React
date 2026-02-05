import { useEffect, useState } from 'react';
import style from './Exo7.module.css';
export const Compteur = (props) => {

    const { bird } = props;
    const { id, name, skin } = bird

    //* Variable pour Compter
    // Permet de créer des variables
    const [count, setCount] = useState();

    // * useEffect #1
    // but : Quand le compteur est modifié, on va sauvegarder son état actuel dans le localStorage.
    useEffect(() => {
        if (!isNaN(count)) {
            localStorage.setItem(id, count)
        }
    },
        [count]
    )
    // 1. On vérifie que c'est un nombre car localStorage fait toujours des chaines de caractère, donc "undefined" si zéro
    // Si (ce n'est PAS not a Number) --> donc si c'est un nombre
    // On stocke dans le local storage la valeur
    // Syntaxe = localStorage.setItem(nomClé, valeurClé)
    // méthode setItem : ajoute dans le localstorage
    // pas besoin de else ni de return 
    
    // 2. On mets [count] en dépendance car on veut le lancer quand on modifier notre compteur

    //! Problème : notre fonction hideBird active le useState
    // --> la valeur précédente est écrasé par la nouvelle 
    // on a donc besoin d'un second useEffect

    // * useEffect #2
    // But : que le useState() ne remette pas à 0 la valeur de count 

    useEffect(() => {
        const initCount = +localStorage.getItem(id)
        setCount(initCount)
        // getItem : récupère dans le localstorage
        //  on va chercher son ancien état dans le localStorage qu'on stock dans une variable(initCount)
    },
        []    // --> pas besoin de dépendance car va se lancer au démarrage / apparition de l'élément à l'écran

    )


    return (
        <div className={style.mainContainerChild}>
            <div className={style.counter}>
                <button onClick={() => setCount(prev => prev - 1)}> ➖ </button>
                {/*  */}
                <h3> Compteur de {name} {skin}</h3>
                <h3> {count}</h3>
                <button onClick={() => setCount(prev => prev + 1)}> ➕ </button>

            </div>


        </div>
    )
}

