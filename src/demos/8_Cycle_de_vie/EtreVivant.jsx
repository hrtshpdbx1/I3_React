import { useEffect } from "react";

export const EtreVivant = (props) => {
    const { etre } = props;


    //useEffect est une fonction qui se déclanche quand le composant aparait à l'écran et qui déclenche la fonction mise en paramètre

    useEffect(()=> {
        console.log(etre.id + ' est né·e 🐣')
        // se déclenche au moment de l'apparition à l'écran 
        // Dans cette fonction, si on renvoie une fonction, c'est celle ci qui sera executée si le composant disparait de l'écran
   return () => {
    console.log(etre.id + ' est mort 🥀'); 
   }
    })

    return (
        <div>

            {
                etre.type === 'Humain·e' && '👩🏻‍🦳'
            }
            {
                etre.type === 'Animal non-humain·e' && '🐮'
            }
            {
                etre.type === 'Alien·e' && '👽'
            }

        </div>
    )
}

