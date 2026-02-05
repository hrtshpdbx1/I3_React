import style from './Demo2.module.css';

export const Demo2 = (props) => {

    const { owner, havePet, name, image, type } = props;

    //! Premier type conditionnel

    // Si le owner ne possède pas d'animal, on va renvoyer un rendu sdifférent de s'il en possède un 

    if (!havePet) {
        return (
            <div className={style.nopet}>
                <p>Oh non {owner}, vous n'avez pas de compagnon animal poilu qui vit chez vous sans payer de loyer ?! 😥
                    <a href="https://srpa.be/">Cliquez ici </a>
                    pour en adopter un immédiatement et ainsi réduire votre capacité d'épargne et ruiner votre canapé, vraiment vous ne le regretterez pas !</p>
            </div>
        )
    }
    // Sinon, si il a un animal, on aura ce rendu là
    return (
        <div className={style.pet + ' ' + ((type === 'chat') ? style.cat : style.dog )}> 
        <div className={style.inside}> 
            <p> Ohlala {owner}, raconte moi tout sur ton animal 🫠🩷</p>
            {/* 👉 2ème type de conditionel : la ternaire  */}
            {/* Rappel ternaire  :
             * (condition) ? traitement si vrai : traitement si faux */}
            <p> Mon animal est un {(type === 'chat') ? 
                <span> 😺 </span>  : 
                <span> 🐶 </span>  }
                ! </p>

            {/* 👉 3ème type de conditionel : le OU || */}
            {/* → Utilisé pour afficher une valeur si la première n'existe pas */}
            {/* On pourrait fait le même traitement avec un ternaire mais l'autre opérateur simplifie l'écriture */}
            {/* Affichera la valeur de droite si si ma valeur de gauche est nulle ou undifined  */}
            <p> Son petit nom est : <span>{ name || 'Inconnu' }</span> .</p>

            {/* 👉 4ème type de conditionel : le ET && */}
            {/* → Utilisé pour affiché quelque chose uniquement si la condition est remplie */}
            {/* Si Image est rempli, on va mettre le contenu de la balise img */}
            { image && <img width='150px' src={image} /> }

            </div>
        </div>
    )
}