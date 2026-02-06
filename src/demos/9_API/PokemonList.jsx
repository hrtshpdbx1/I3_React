import { useEffect, useState } from 'react'
import style from './Demo9.module.css'
import axios from 'axios';

export const PokemonList = (props) => {
    const {onPkmSelection} = props;

    //#region
    // --- ÉTATS (STATES) ---
    // ? Pour gérer les précédents ou suivants
    // *  soit on fait un state pour offset et limit et l'avantage c'est qu'on peut changer comme on veut le nombre de pokemon qu'on récupère
    // * soit on utilise les valeurs de base de l'API qui nous renvoie la requête précédente et la requête suivant
    //#endregion

    // On stocke les URLs pour la pagination fournies par l'API
    const [prevRequest, setPrevRequest] = useState(null);
    const [nextRequest, setNextRequest] = useState(null);
    // null pour faire le lien avec les btn qui sont desactivé s'ils sont vides -> disabled={!nextRequest}/{!prevRequest}>

    //#region
    //* Variable pour stocker les pokemon affiché à l'écran
    // Il nous faut aussi une variable pour stocker les pokemons affichés à l"écran. Elle est vide parce qu'on va la remplir avec un map (donc il faut un tableau vide)
    //#endregion
    const [pokemon, setPokemon] = useState([])

    // Gestion des messages d'erreur
    const [error, setError] = useState('');

    //#region
    // * --- LOGIQUE DE REQUÊTE ---
    // 👉🏻 Nous allons maintenant faire notre première requête qui va remplir la liste de pkm et les prev et next quand on arrive sur la page
    // On peut le faire avec fetch ou axios donc on va l'installer (npm i axios)

    //useEffet qui va se déclancher quand quelque chose arrive a l'écran et on n'oublie pas les [] pour qu'il ne s'exécute qu'une seule fois.
    //#endregion
    useEffect(() => {
        // Chargement initial des 20 premiers Pokémon
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((response) => {

                // On va récuperer les deux requête et les stocker dans nos Stat
                console.log(response.data);
                setPrevRequest(response.data.previous);
                setNextRequest(response.data.next);

                // On rempli la liste de pkm avec la liste renvoyée par l'API
                setPokemon(response.data.results);
            })
            .catch((error) => {
                setError('caca');
            })
    },
        [])

    // * Fonction pour naviguer entre les pages
    // - true pour suivant, false pour précédent
    const getPokemons = (next) => {
        // next est un parem qui contient un booléen pour savoir si on veut les prochains pkm pour les précédents
      
            //on va chercher les prochains grace à NextRequest
            axios.get(next ? nextRequest : prevRequest)
                // si ça dedans il y a vrai, c'est qu'on voulait les suivants, sinon les précédents
                .then((response) => {
                    console.log(response)
                    setPrevRequest(response.data.previous);
                    setNextRequest(response.data.next);
                    setPokemon(response.data.results);
                })
                .catch((error) => {
                    setError('nope déso')
                })

       
    }

    return (
        <div className={style.list}>

            <h2> ⋆🐹 Liste des Pokemons 🐛⋆</h2>

            <ul>
                {
                    pokemon.map(pokemon => (
                        <li onClick={() => onPkmSelection(pokemon.name) } key={pokemon.name}> {pokemon.name} </li>
                        // on met la fonction flechée pour que la fonction se lance au click et pas au chargement de la page (ce qui remplirai le state et s'arrêterai à la fin de la map) 
                        // Au clic on déclanche la fonction {onPkmSelection} qui prend en param le nom d'un pokemon
                    ))
                }
                {/* on a mis la valeur "name" car on a vu que dans l'API c'était comme ça. 
                On remet name pour la key car il n'y a pas d'id */}
            </ul>
            <div className={style.buttons}>
                <button onClick={() => { getPokemons(false) }} disabled={!prevRequest}> ⬅️ Précédent </button>
                <button onClick={() => { getPokemons(true) }} disabled={!nextRequest}> Suivant ➡️  </button>
                {/* on fait un boléen pour n'avoir qu'une seule fonction prev/suivant  */}
            </div>


        </div>
    )


} 