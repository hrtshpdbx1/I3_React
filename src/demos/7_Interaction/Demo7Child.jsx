import style from './Demo7.module.css';

export const Demo7Child = (props) => {

    const { child, onAdoptReveal } = props;
    // child -> descendant -> on a reçu cette information du parent
    // onAdoptReveal -> montant -> on a réçu cette fonction à déclencher via le parent mais on va la déclencher ici
    const { id, name, skin, adopted } = child

    return (
        <div className={style.enfant} >
            <h3>{skin} : Je suis {name} !</h3>

            {adopted ?

                <span>Je suis adopté</span> :

                // On déclenche l'évènement onAdoptReveal en envoyant l'id de l'enfant sur lequel on a cliqué (on peut envoyer ce qu'on veut, pas forcément un id)
                <button onClick={() => { onAdoptReveal(id) }}>Annoncer que je suis adopté·e</button>}
        </div>
    )
}