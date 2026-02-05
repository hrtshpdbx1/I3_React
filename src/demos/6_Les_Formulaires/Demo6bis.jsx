import { useState } from "react"

export const Demo6bis = () => {
    // 👉🏻 Un state de type objet qui représente tout le formulaire
    const [splitForm, setSplitForm] = useState({
        bill: 0,
        nbPerson: 0,
        tips: 5
    });

    const [isValid, setIsValid] = useState(true);
    const [totalPerPerson, setTotalPerPerson] = useState();

    // on doit ajouter le même onChange à tous les champs (pourquoi?)

    const handleField = (event) => {
        // Ici on a besoin de savoir d'où vient l'evenement qui a été déclanché (autrement dit, d'avoir les informations sur le champs qui vient de déclencher l'évènement) pour savoir s'il faut changer bill, nbPerson ou tips ?
        console.log(event.target.name); /* le nom du champs */
        console.log(event.target.type); /* le type du champs (number,text, password) */

        // Deux const qu'on crée ici pour crée des racourcis
        const name = event.target.name;
        const type = event.target.type;


        setSplitForm(prev => { //ancien formulaire
            const newSplitForm = { // nouveau formulaire
                ...prev,
                // On récupére ce qu'il a dans prev, c'est  dire dans splitForm avec le spreadOpérator
                // puis on modifide juste la propriété qui nous interesse
                // mais d'abords on doit vérifie que c'est un number 
                // pourquoi des crochets ? car ce qu'on cherche est stocké dans une variblable, cf. revisions JS pour Node
                /* splitForm.name -> n'existe pas dans split Form  */
                /* splitForm[name] -> va chercher la propriété qui s'appelle comme la chaine contenue dans la variable name  */
                /* splitForm['bill'] -> ex: si name contient 'bill', ira chercher la propriété qui s'appelle bill */

                [name]: (type === 'checkbox') ?
                    event.target.checked :
                    (type === 'number') ?
                        event.target.valueAsNumber :
                        event.target.value
                // Si le type du champ est checkbox, on va chercher la valeur présente dans checked et ça renvoit un bouléen si coché
                // Si le type du champ est number, on va parse la valeur en nombre
                // Si ni l'un, ni l'autre, on prends la valeur telle quelle (--> utile quand on arrive au select, comme ce n'est ni checked ni un number, in prends la value qu'on a déclaré)
            }
            return newSplitForm
            // ou return { ...}

        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        setTotalPerPerson(undefined);
        if (splitForm.bill > 0 && splitForm.nbPerson > 0) {
            setTotalPerPerson((splitForm.bill + (splitForm.bill * splitForm.tips / 100)) / splitForm.nbPerson);
            setIsValid(true)
        }
        else {
            setIsValid(false)
        }
    }



    // ==================== GESTION DU SUBMIT ====================

    // * ==================== RENDU DU COMPOSANT ====================
    return (
        <div>
            <h2>🪙 Tips to give Tips - Bis 🍴</h2>

            <form onSubmit={handleSubmit}>
                {/* ===== CHAMP 1 : Montant de l'addition ===== */}
                <div>
                    <label htmlFor="bill">Check's total :</label>
                    <input id="bill" name="bill" type="number" value={splitForm.bill} onChange={handleField} />
                </div>

                {/* ===== CHAMP 2 : Nombre de personnes ===== */}
                <div>
                    <label htmlFor="nbPerson">Number of guests</label>
                    <input id="nbPerson" name="nbPerson" type="number" value={splitForm.nbPerson} onChange={handleField} />
                </div>


                <div>
                    <label htmlFor="tips">Tips :</label>
                    <select id="tips" name="tips" value={splitForm.tips} onChange={handleField}>
                        {/* {pourquoi splitForm.tips} ?*/}
                        <option value={0}>I would rather invest my money on cryto</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button> 🧮 Calculate </button>
                {
                    !isValid && <span> Please fill the form correctly </span>
                }
            </form >

            {/* ===== AFFICHAGE DU RÉSULTAT ===== */}
            {totalPerPerson &&
                <div> You should each pay {totalPerPerson.toFixed(2)} €</div>
            }
        </div>
    )
}

