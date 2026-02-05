import { useEffect, useState } from "react"

export const EtreSpecial = () => {

    const [age, setAge] = useState(50)
    const [anniversaires, setAnniversaires] = useState(false)
    useEffect(() => {
        setAge(prev => prev +1)
     
        // ⚠️ Attention ça fait une boucle infinie
        // ! useEffet prend en paramètre 2 choses :
        // * la fonction a éxecuter quand le useEffect est déclenché
        // * les dépendances qui autorisent le useEffect à déclencher. C'est un tableau et s'il est vide, rien n'autorise le useEffect a se re-déclencher
        // Permet de ne pas faire de boucles infinies, qui peut faire planter une API ou un PC
        console.log('L\'être spécial est "né", félicitation c\'est un cisdude 🏎️')
        return () => {
            console.log('L\'être spécial est mort ⚰️')
     }
     }, [anniversaires]) 
     // ! <-- Exemple 1 ICI : on le laisse vide
    return (
        <div>
            🧛🏻 Je suis un homme, je suis spécial !
            J'ai {age} ans !

        <button onClick={() => setAnniversaires(prev => prev +1)}> 🎂 </button> 
        </div>
    )
}




