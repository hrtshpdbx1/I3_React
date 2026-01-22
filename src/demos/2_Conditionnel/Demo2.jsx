import style from './Demo2.module.css';

export const Demo2 = (props) => {

    const { owner, havePet, name, image, type } = props;

    //! Premier type conditionnel

    // Si le owner ne possède pas d'animal, on va renvoyer un rendu sdifférent de s'il en possède un 

    if(!havePet){
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
        <div className={style.pet}> 
            <p> Ohlala {owner}, raconte moi tout sur ton animal 🫠🩷</p>
        </div> 
    )
}