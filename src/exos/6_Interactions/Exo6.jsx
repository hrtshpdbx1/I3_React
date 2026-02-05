import style from './Exo6.module.css';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Exo6Child } from './Exo6Child';

// Création du composant "parent"
export const Exo6 = () => {

    // Création du state 
    // [valeur actuelle, fonction qui permet de la modifier] 
    const [tasks, setTasks] = useState([

        {
            id: 1,
            name: 'Rafraichir le levain chef',
            description: 'Ajouter 30g d\'eau tiède et 30g de farine à Bernard le Levain',
            priority: 'Basse',
            isDone: true
        },
        {
            id: 2,
            name: 'Faire le levain tout point',
            description: 'Calculer les proportions pour obtenir 125g de levain et faire le dernier rafraichis',
            priority: 'Urgent',
            isDone: false
        },
        {
            id: 3,
            name: 'Préparer la pâte',
            description: 'Mélanger le sel, la farine et le levain.  Façonner le paton',
            priority: 'Normale',
            isDone: false
        },
        {
            id: 4,
            name: 'Pétrir et laisser fermenter',
            description: 'Avec les mains étirer et rabattre la pâte sur elle - même à 6 à 8 reprises.La pâte deviendra de plus en plus ferme.Couvrir et laisser reposer',
            priority: 'Normale',
            isDone: false
        },
        {
            id: 5,
            name: 'Façonnage',
            description: 'Avec les mains légèrement mouillées, étirer légèrement la pâte pour former un carré. Joindre les coins vers le centre pour former une boule ronde et retourner la pâte pour que les replis soient face au comptoir.',
            priority: 'Basse',
            isDone: false
        },


    ]);

    // Librarie Hook Form + defaut value
    // old : const { register, handleSubmit, reset, errors } = useForm({
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: "",
            description: "",
            priority: "",
            isDone: false
        }
    });

    const [filter, setFilter] = useState('');

    const filterTodo = () => {
        if (filter === 'high') {
            return tasks.filter(task => task.priority === 'high');
        }

        if (filter === 'done') {
            return tasks.filter(task=> task.complete === true);
        }

        if (filter === 'todo') {
            return tasks.filter(task => task.complete === false);
        }

        return task;
    }


    // const deleteTodo = (id) => {
    //     setTodos(tasks.filter(task => tssk.id !== id));
    // }


    // ? Modifier l'état
    // Créer une nouvelle tache en reprenant les taches d&jà existantes et en ajoutant celle du formulaire

    const addTask = (data) => {

        const newTask = {
            ...data, // =name, description, priority 
            // ajouter les infos manquante sur les dates
            id: Date.now()
        };
        // crée un UUID 

        // Créer un nouveau tableau avec setTask
        // on remplace le tableau par : [toutes les anciennes tâches + la nouvelle]
        setTasks([...tasks, newTask]);
        console.log("Nouvelle liste :", [...tasks, newTask]);
        reset();

    }

    // * 1/ CALLBACK DELETE
    // on crée dans le parent une fonction que l’on va ensuite activer
    // C'est le parent crée la fonction removeTask. Il la passe à l'enfant sous le nom onDelete. L'enfant connecte ce onDelete à son bouton onClick. 
    const removeTask = (id) => {
        // On récupère l'id qui est émit lors du déclenchement de l'event onDelete
        // Créer une nouvelle liste taskUpdated qui contient toutes les tâches dont l'ID est différent de idToDelete
        const taskUpdated = tasks.filter((task) => task.id !== id)
        // On remplace l'ancienne liste par la nouvelle liste filtrée
        setTasks(taskUpdated);
        //! Pas compris comment on récupérait l'ID ici 
    }

    //* 2 CALLBACK FINISHED
    const finishTask = (id) => {
        const newTasks = tasks.map((task) => {
            // vérification ID
            if (task.id === id) {
                // si les ID correspondent
                //return l'objet task + isDone: !task.isDone
                // Si false, !task.isDone devient true.
                // Si true, !task.isDone devient false.
                //↓ remplace isDone par son inverse
                return { ...task, isDone: !task.isDone };
            }
            else {
                return task;
            }
        });
        setTasks(newTasks);
    }


    // //* 3 CALLBACK PRIORITY HIGH
    // const filterHigh = () => {
    //     reset(setTasks)
    //     const taskUpdated = tasks.filter((task) => task.priority === 'Urgent');
    //     setTasks(taskUpdated);
    // }

    // //* 4 CALLBACK PRIORITY NORMAL
    // const filterNormal = () => {
    //     reset(setTasks)
    //     const taskUpdated = tasks.filter((task) => task.priority === 'Normale');
    //     setTasks(taskUpdated);
    // }

    // //* 5 CALLBACK PRIORITY LOW
    // const filterLow = () => {
    //     reset(setTasks)
    //     const taskUpdated = tasks.filter((task) => task.priority === 'Basse');
    //     setTasks(taskUpdated);

    // }

    // ** ------ RETURN ----------- ** 
    return (
        <div>
            <div className={style.mainContainer}>
                <div>
                    <h1> THE TO DOUGH LIST </h1>

                    <img src="data:image/jpeg;base64,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" alt="" />

                    <div>
                        {/* FILTER version pas bonne = si on fait comme ça, les taches sinon elles seront modifiées pour toujours */}
                        {/* <div className={style.filterContainer}>
                            <p>Trier les tâches par priorité :</p>
                            <button onClick={() => { filterHigh() }}>🔥Haute </button>
                            <button onClick={() => { filterNormal() }}>🪷Normale </button>
                            <button onClick={() => { filterLow() }}>🧘🏻 Basses </button>
                        </div> */}

                        <select onChange={(e) => setFilter(e.target.value)}>
                            <option value="">Toutes</option>
                            <option value="high">Urgentes</option>
                            <option value="done">Terminées</option>
                            <option value="todo">À faire</option>
                        </select>

                        // * Communication Parent ➔ Enfant (Descendant)
                        {/* * Affichage du composant enfant */}
                        {
                        filterToDo().map(task => <Exo6Child
                                key={task.id} // clé unique
                                {...task} // On envoie toutes les infos (id, name, description, etc.) à l'enfant
                                onDelete={removeTask}
                                onDone={finishTask}/>)
                        }
                    </div>

                    //! Transmission : A l’intérieur du return, Le parent envoie les fonctions à l'enfant via une prop.

                </div>
            </div>
            <div className={style.formContainer}>
                <h2> Ajouter une nouvelle tâche</h2>

                {/* ---- FORMULAIRE ----- */}

                <form onSubmit={handleSubmit(addTask)}>
                    <div className={style.form}>
                        <div>
                            <label htmlFor="name">Nom :</label>
                            <input type="text" name="name" id="name"
                                {...register('name', { required: true })} />
                            {
                                errors['name']?.type === 'required' &&
                                <span>Ce champs est requis</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="description">Description :</label>
                            <input type="text" name="description" id="description"
                                {...register('description', { required: true })} />
                            {
                                errors['description']?.type === 'required' &&
                                <span>Ce champs est requis</span>
                            }
                        </div>

                        <div>
                            <label htmlFor="priority">Priorité :</label>
                            <select onChange={(e) => setFilter(e.target.value)} id="priority" name="priority"
                                {...register('priority', { required: false })}>
                                <option value={'Basse'}>Basse</option>
                                <option value={'Normale'}>Normal</option>
                                <option value={'Urgent'}>Urgent</option>
                            </select>
                        </div>

                        <div>
                            <button> Ajouter </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    )
}

// child={child} onAdoptReve{changeAdoptionStatus} />)
// Ici, la prop 'onAdoptReveal' contient notre fonction 'changeAdoptionStatus'

// task = {task} on