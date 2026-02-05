import style from './Exo6.module.css'


// ? C'est ici qu'on aura les fonctions onComplete et onDelete
export const Exo6Child = (props) => {

    // ↓ Destructuring pour simplifier l'affichage
    // ! Ne pas oublier l'ajouter les callbacks !!
    const { id, name, description, priority, isDone, onDelete, onDone } = props;

    return (
        <div> 
            <div>             
                <div className={`
         ${style.enfant} 
         ${priority === 'Urgent' && style.isUrgent}
         ${isDone === true && style.isDone}`}>
            {/* Ici le && fait une sorte de condition    { // Si c'est urgent met la classe (pas de "sinon" nécessaire) 
             Si c'est urgent met la classe (pas de "sinon" nécessaire) }*/}
                
                        <h3>{name}</h3>

                    <div className={description}>
                        <p>{description}</p>
                        <p>Priorité : {priority}</p>
                    </div>
                  
                    <div className={style.btnContainer}>
                        {/* Dans le composant enfant, on ajoute cette fonction en utilisant un evenement */}
                        <button onClick={() => { onDelete(id) }}>🗑️ Supprimer </button>
                        {/* On déclenche l'évènement onDelete en envoyant l'id de de la task sur lequel on a cliqué (on peut envoyer ce qu'on veut, pas forcément un id)  */}
                        <button disabled={isDone} onClick={() => { onDone(id) }}>✅ Terminer </button>
                    </div>
               </div>
            </div>
        </div>
       
    )

}

//  task -> descendant -> on a reçu cette information du parent
// onTaskAdded --> montant -> on a réçu cette fonction à déclencher via le parent mais on va la déclencher ici
// onTaskAdded : le Callback -> C'est la variable qui contient la fonction du parent

