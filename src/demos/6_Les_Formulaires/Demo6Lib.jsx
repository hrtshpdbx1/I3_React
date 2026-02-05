import { useState } from "react"
import { useForm } from "react-hook-form";


// Gestion formulaire avec librairie
// 🗒️ Celle que nous allons utiliser est React-Hook-Form 
//      https://react-hook-form.com/

// Pour l'installer dans le projet : dans la console, tapez npm i react-hook-form
export const Demo6Lib = () => {
    const [totalPerPerson, setTotalPerPerson] = useState();

    // 🗒️ Nous avons maintenant accès une nouvelle Hook qui s'appele useForm et de laquelle, on va extraire plusieurs choses
    // 👉🏻 register -> c'est ce qui va nous permettre "d'enregister un nouveau champs" (il fait le value={state} + onChange={fonctionPourChangerLeState}) pour nous, en gros
    // 👉🏻 handleSubmit -> C'est une fonction qui fait le preventDefault et qui vous renvoie le state qu'elle a fabriqué. Elle prend deux fonctions en paramètre, la première est celle exécutée en cas de formulaire valide, la deuxième est la fonction exécutée en cas de formulaire non valide
    // 👉🏻 formState -> l'état du formulaire
    //      * De formState, on va récupérer errors qui contient toutes les erreurs actuelles du formulaire
    // 👉🏻 reset -> Une fonction pour remettre à 0 (ou avec les defaultValues) le formulaire

    // ? INITIALISATION avec userForm
    // Dans les paramètres de useForm, on peut mettre un objet avec des options :
    // * mode : permet de changer le mode de détection des erreurs du formulaire
    // * defaultValues permet de mettre des valeurs de base dans le formulaire, il faudra respecter le nom mis dans register
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues: {
            bill: 0,
            nbPerson: 0,
            tips: 5
        }
    });

    const splitBill = (data) => {
        // data contient les données de notre formulaire auto-gérées par notre useForm grâce à register
        console.log(data);

        setTotalPerPerson((data.bill + (data.bill * data.tips / 100)) / data.nbPerson);
        reset();
    }


    return (
        <div>
            <h2>Split'O Resto</h2>

            <form onSubmit={handleSubmit(splitBill, () => setTotalPerPerson(undefined))}>
                <div>
                    <label htmlFor="bill">Total de la note :</label>
                    {/* Grace à regsiter on définit les règles directement : */}
                    <input id="bill" name="bill" type="number"
                    // La fonction register renvoie un objet avec un onChange, un onBlur, un name et une ref. Le ... (spread operator) "déballe" tout ça et les injecte directement dans ton <input>
                        {...register('bill', { 
                            valueAsNumber: true, // Conversion auto en nombre
                            required: true,     // Champ obligatoire
                            min: 10             // Minimum 10€
                            })} />

                    {
                        errors['bill']?.type === 'required' &&
                        <span>Ce champs est requis</span>
                    }
                    {
                        errors['bill']?.type === 'min' &&
                        <span>Vous devez mettre une valeur minimum de 10€</span>
                    }
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre de personnes :</label>
                    <input id="nbPerson" name="nbPerson" type="number"
                        {...register('nbPerson', { valueAsNumber: true, 
                        required: true, 
                        min: 1 })} />

                    {
                        errors['nbPerson']?.type === 'required' &&
                        <span>Ce champs est requis</span>
                    }
                    {
                        errors['nbPerson']?.type === 'min' &&
                        <span>Vous devez être au moins 1 personne</span>
                    }
                </div>

                <div>
                    <label htmlFor="tips">Pourboire :</label>
                    <select id="tips" name="tips"
                        {...register('tips', { valueAsNumber: true, required: true })}>

                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button>Spliter 💸</button>
            </form>

            {totalPerPerson &&
                <div>Vous devrez chacun·e payer : {totalPerPerson.toFixed(2)} €</div>
            }
        </div>
    )
}