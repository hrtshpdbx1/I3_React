import { useState } from "react"

export const Demo6 = () => {
    // ==================== GESTION DU STATE ====================
    // * Pour gérer les formulaires nativement en React avec le state, nous avons deux options :
    // 1️⃣) Un state pour chaque donnée du formulaire (easy mais pas idéal si gros formulaire)
    const [bill, setBill] = useState(); // Montant total de l'addition
    const [nbPerson, setNbPerson] = useState(); // Nombre de personnes à table
    const [tips, setTips] = useState(5); // Pourcentage de pourboire (5% par défaut)
    // puis on relit les variable à notre input ci-dessus (dans value={})
    const [isValid, setIsValid] = useState(true); // booléen savoir si le formulaire est valide (gestion du message d'erreur)

    // et un total de notre tableau
    const [totalPerPerson, setTotalPerPerson] = useState(); // Résultat du calcul : pourboire par personne


    // * Pour pouvoir relier un state avec un champ, on devrait rajouter 2 choses sur le champs
    //     - l'attribut value pour lier le champs à notre state : value={nomState}
    //     - L'évenement onChange qui sera déclanché à chaque fois que quelque chose sera tappé
    //       Syntaxe : onChange = {(event) => fonctionMAJ (event.target.value) }
    //       (event.target.value) récupère la valeur actuelle saisie dans le champ input
    // resultat : à chaque frappe au clavier, onChange capture la nouvelle valeur et met à jour le state via setBill(), setNbPerson(), ou setTips().


    // 2️⃣)--> cf Demo2_bis

    // * ==================== GESTION DU SUBMIT ====================
    //  Fonction appelée lors de la soumission du formulaire
    // on prends le nom du calcul que l'on essaye de faire ou handleSubmit 

    const handleSubmit = (event) => {
        // event contiendra l'event qui bien d'être déclanché, c a d notre submit
        event.preventDefault(); // empêche le comportement par défaut du submit qui recharge la page
        setTotalPerPerson(undefined); /* Pour remettre le total à 0*/
        setTotalPerPerson((bill + (bill * tips / 100)) / nbPerson);
        // vérification que la note et le nombre de guest ne sont pas = zéro
        if (bill > 0 && nbPerson > 0) {
            setIsValid(true)
        }
        else {
            setIsValid(false)
        }
    }

// * ==================== RENDU DU COMPOSANT ====================
return (

    <div>
        <form onSubmit={handleSubmit}>
            {/* onSubmit={handleSubmit} : déclenche notre fonction quand on clique sur le bouton */}
            <h2>🪙 Tips to give Tips 🍴</h2>

            {/* ===== CHAMP 1 : Montant de l'addition ===== */}
            <div>
                <label htmlFor="bill">Check's total</label>
                <input type="number" 
                value={bill}  // Lié au state 'bill'
                onChange={(event) => setBill(event.target.valueAsNumber)} />
                {/* À chaque frappe, on met à jour le state avec la nouvelle valeur */}
                {/* event.target.value = on récupére la valeur qui est dans l'input -> On veut modifier et on veut récuper la valeur de l'input */}
            </div>
            <div>
                {/* ===== CHAMP 2 : Nombre de personnes ===== */}
                <label htmlFor="nbPerson">Number of guests</label>
                <input type="number" 
                value={nbPerson} 
                onChange={(event) => setNbPerson(event.target.valueAsNumber)} 
                />
            </div>

            {/* ===== CHAMP 3 : Pourcentage de pourboire ===== */}
            <div>
                <label htmlFor="tips">Tips</label>
                <select value={tips} 
                onChange={(event) => setTips(event.target.value)}>
                    {/* value{quelqueChose} : la valeur par défaut */}
                    <option value={0}>I would rather die !😡</option>
                    <option value={5}>5%</option>
                    <option value={10}>10%</option>
                    <option value={15}>15%</option>
                </select>
            </div>

            {/* ===== BOUTON DE SOUMISSION ===== */}
            <button> 🧮 Calculate </button>
            {
                !isValid && <span> Please fill the form correctly </span>
            }
        </form>

        {/* ===== AFFICHAGE DU RÉSULTAT ===== */}
        {/* Affiche le résultat seulement si totalPerPerson a une valeur */}
        {totalPerPerson && (
            <div> You should each pay {totalPerPerson.toFixed(2)} € tips 
            </div>
        )}
    </div>
)
}



// 3️⃣
// 4️⃣



