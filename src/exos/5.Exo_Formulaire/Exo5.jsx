import { useState } from "react"
import { useForm } from "react-hook-form";

export const Exo5 = () => {
    const [total, setTotal] = useState('');
    // ici on a mis une change de caractère vide en param de useState car il n'aime pas qu'un undified deviennent difined


    // ? INITIALISATION avec userForm
    // on établit des valeurs pas défauts
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange', //mode de detection des erreurs (onChange mais peut aussi être onBlur, onSudmit)
        defaultValues: {
            nb1: '',
            nb2: '',
            operator: '+'
        }
    });

    // ? Fonction du calul
    const makeCalcul = (data) => {
        // data contient les données de notre formulaire auto-gérées par notre useForm grâce à register
        console.log(data);


        // switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
        // switch(laVariableAComparer) {
        // case 
        // "Si c'est égal à ça, fais le code suivant".}
        // break 
        // "Passe au suivant"
        // default
        // equivalent du else

        switch (data.operator) { //on va comparer la valeur de notre select
            case '+':
                setTotal(parseFloat(data.nb1) + parseFloat(data.nb2))
                // parseFloat transforme une chaîne de caractères en un nombre 
                // idem que
                // setTotal(+(data.nb1) + +(data.nb2)))
                break
            case '-':
                setTotal((data.nb1) - (data.nb2))
                break
            case 'x':
                setTotal((data.nb1) * (data.nb2))
                break;
            case '/':
                setTotal((data.nb1) / (data.nb2))
                break;
            default:
                console.log(`Oupsi, quelque chose s'est mal passé`);
        }

    }
    return (

        <div>
            <h2> Calculatrice  </h2>

            {/* {handleSubmit permet d'empecher le chargement automatique de la page 
            Elle prend deux fonctions en paramètre, la première est celle exécutée en cas de formulaire valide, la deuxième est la fonction exécutée en cas de formulaire non valide} */}
            {/* Si tout se passe bien on lancer makeCalcul, sinon on met setTota l = 0 */}
            <form onSubmit={handleSubmit(makeCalcul, () => setTotal(undefined))}>

                {/*Nb1 */}
                <label htmlFor="nb1"> Nb1 :</label>
                <input id="nb1" name="nb1" type="text"
                    // dans son corrigé Aude a mis un AriaLabel car elle n'a pas mis de label, donc c'est mieux niveau accessibilité

                    // ? Vérificateurs
                    {...register('nb1', {
                        // valueAsNumber: true,  Conversion auto en nombre
                        required: true,     // Champ obligatoire
                        // patern //todo:completer
                    })} />

                {/* && afficher quelque chose uniquement si la condition est remplie */}
                {/* condition && traitement à faire si condition vraie */}

                {/*  Nb2 */}
                <label htmlFor="nb2"> Nb2 :</label>
                <input id="nb2" name="nb2" type="text"
                    {...register('nb2', {

                        // valueAsNumber: true, Conversion auto en nombre
                        required: true,     // Champ obligatoire
                    })} />


                {/*Sélecteur pour l’opération */}
                <div>
                    <label htmlFor="operator">Opération:</label>
                    <select id="operator" name="operator"
                        {...register('operator', { valueAsNumber: false, required: true })}>

                        <option value={'+'}>+</option>
                        <option value={'-'}>-</option>
                        <option value={'x'}>x</option>
                        <option value={'/'}>/</option>
            
                    </select>
                </div>

                <button>Calculer </button>
                <input id="result" name="result" type="number" value={total} readOnly />

                {/* Si erreur sur nb1 et que le type est requis et idem pour nb2 */}
                {(errors['nb1']?.type === 'required') || (errors['nb1']?.type === 'required') &&
                    <span>Ce champs est requis</span>
                }
                {/* S'il y a une erreur de patern' */}
                {(errors['nb1']?.type === 'pattern') && 
                    <span>Vous n'avez pas rentré un champ requis'</span>
                }


            </form>
        </div>
    )

}