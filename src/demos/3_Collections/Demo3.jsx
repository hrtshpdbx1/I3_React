import { TrainerCard } from "./TrainerCard";

export const Demo3 = () => {

    const trainers = [
        { 
            id : 1, 
            firstname : 'Aude',
            lastname : 'Beurivé',
            gender : 'f',
            vacations : false,
            hobbies : [ 'Dessin', 'Tricot', 'Soup' ]
        },
        { 
            id : 2,
            firstname : 'Aurélien',
            lastname : 'Strimelle',
            gender : 'm',
            vacations : false,
            hobbies : [ 'Randonnée', 'Jeux de société']
        },
        { 
            id : 3,
            firstname : 'Quentin',
            lastname : 'Geerts',
            gender : 'm',
            vacations : true,
            hobbies : [ 'Mangas', 'Jeux Vidéos' ]
        }
    ];

    return (
        <div>
            <h2>Liste des formateurs : </h2>

            <div className="flex flex-row justify-center items-center gap-3">
                {/* Pour afficher plusieurs fois la même chose mais n'écrire qu'une seule fois le code, on va utiliser une "boucle" */}
                {/* Cette boucle, sera la méhode .map() des tableaux puisqu'elle permet de tranformer chaque élément du tableau en autre chose */}
                {/* On va donc s'en servir pour transformer chaque élément du tableau en JSX */}
                {/* 👉🏻 Étape 1 : Afficher juste le prénom des formateurs */}

                {/* { trainers.map(trainer => ( <p key={trainer.id}> {trainer.firstname} </p> ) ) } */}

                {/* ⚠️ Quand on affiche des collections (lists), on va devoir rajouter une clef unique sur l'élément construit pour des questions d'optimisation. Cette clef doit être associée à une valeur unique (idéalement un id mais si on n'en a pas, l'indice dans le tableau fait l'affaire). Cela se fait avec un attribut key={valeur} */}
                {/* 🗒️ Quand on a beaucoup de HTML à afficher avec notre map, c'est, en général, qu'on a besoin d'en faire un composant. Nous allons donc faire un composant pour l'affichage d'un formateur. */}

                {/* 👉🏻 Étape 2 : Afficher un composant pour chaque formateur */}

                { trainers.map( trainer => ( <TrainerCard key={trainer.id} trainer={trainer} /> )) }

              
            </div>
        </div>
    )
}