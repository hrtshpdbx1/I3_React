import { useEffect, useState } from "react"
import { EtreVivant } from "./EtreVivant"
import { EtreSpecial } from "./EtreSpecial";

export const Lavie = () => {
    const [etreVivants, setEtreVivants] = useState([]);

    const [montrerEtreSpecial, setMontrer] = useState(false)
    // pour ne pas afficher on mets un boléens faux

    const types = ['Humain·e', 'Animal non-humain·e', 'Alien·e'];

    useEffect(() => {
        console.log('et Dieu créa La vie');
    })
    const naissance = () => {
        const nouvelEtre = {
            id: Date.now(),
            type: types[Math.floor(Math.random() * 3)] //
        }
        // setEtreVivants devient etreVivants + nouvelEtre
        setEtreVivants([...etreVivants, nouvelEtre])

    }
    return (

        <div>
            <h2> La vie </h2>
            <h3>c'est aussi une marque de viande végétale 🥓🌱</h3>
            {/* on déclanche une fonction naissance en cliquant sur le btn */}
            <button onClick={naissance}> Faire naitre quelque chose</button>
            {
                etreVivants.map(etre => <EtreVivant key={etre.id} etre={etre} />)

            }


            <h3> L'être spécial dont personne ne veut : (aka ne faites jamais ça) ⚠️</h3>
            <button onClick={() => setMontrer(!montrerEtreSpecial)}> Montrer/cacher l'être spécial</button>
            {/* !montrerEtreSpecial)
            Si montrerEtreSpecial est Vrai (True) → !Vrai devient Faux.
            Si montrerEtreSpecial est Faux (False) → !Faux devient Vrai. */}
            {/* Quand on clique sur "Afficher/Cacher", montrerEtreSpecial passe à false. 
            React supprime <EtreSpecial /> du DOM
            -> La fonction return dans son useEffect se lance (Nettoyage) */}

            {
                // Quand montrerEtreSpecial passe à true -> <EtreSpecial /> est créé 
                // Son useEffect se lance ("Je suis spécial").
                montrerEtreSpecial && <EtreSpecial />
            }
        </div>
    )
}