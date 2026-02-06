
import { useState } from 'react'
import style from './Demo9.module.css'
import { Pokemon } from './Pokemon'
import { PokemonList } from './PokemonList'
export const Demo9 = () => {

    const [pokemonName, setPokemonName] = useState();

    //Fonction qui nous permet de changer le nom du pkm
    // on doit mettre en place un dialogue enfant vers parents
    const changeName = (name) => {
        setPokemonName(name);
    }


    return (
        <div className={style.container}>
             
            <PokemonList onPkmSelection={changeName} />
            <Pokemon name={pokemonName} />
   
        </div>
    )
}