
import { useEffect, useState } from 'react';
import style from './Demo9.module.css'
import axios from 'axios';


export const Pokemon = (props) => {
    const { name } = props;

    const [pokemon, setPokemon] = useState();

    // chaque fois que le name va changer, on veut déclencher un effet qui va faire la requête pour avoir les informatiosn de ce pokemons pour les afficher
    useEffect(() => {
        //todo faire la req pour remplir pokemon avec setPokemon
        if (name) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then((response) => {
                    console.log(response.data);
                    setPokemon({
                        height: response.data.height * 10,
                        // pour avoir la taille en cm
                        weight: response.data.weight / 10,
                        image: response.data.sprites.other.showdown.front_default,
                        types: response.data.types.map(type => type.type.name),
                        // c'est un tableau donc map pour extraire seulement les noms des types
                        cries: response.data.cries.legacy

                    })
                    console.log('fsdfsfs')
                })
                .catch((error) => {

                })

        }
    }, [name])
    // 
    if (!name) {
        // Si la props name est null ou undefined; on affiche un message
        // -> !name = null ou undefined
        return (
            <div className={style.pkm} >
                <p> Cliquez sur un Pokemon pour avoir ses infos </p>


            </div>
        )
    }
    // Si la props name est remplie on va affichier les infos du pokemon
    return (
        <div className={style.pkm}>
            <h2> {name}</h2>
            <img src={pokemon?.image} alt={`image qui bouge et représente ${name}`} />
            <p> Poids : {pokemon?.weight} kg</p>
            <p> Taille :  {pokemon?.height} cm </p>
            <p>
                <h3>Type(s) </h3>
                {
                    pokemon?.types.map(type => (<span> {type} </span>))
                }
            </p>
        </div>

    )


} 