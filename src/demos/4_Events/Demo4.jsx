
export const Demo4 = () => {

    let count = 0;

    const increment = () => {
        count++;
        console.log(count);
        // ! ⚠️ Problème : Notre count augmente et diminue vraiment mais le composant n'est actuellement pas capable de re-déclencher la mise à jour de son rendu pour qu'on puisse voir que la variable a changé.
        // Dès qu'on commence à jouer avec les évènements, nous aurons alors besoin des hooks de React et notamment de celle appelée useState qui permet d'avoir des states (états) local à notre composant.
        
    }

    const decrement = () => {
        count--;
        console.log(count);
        
    }

    return (
        <div>
            <h2>Les events :</h2>
            
            <div className="flex flex-row justify-center items-center gap-3">
                <button onClick={decrement}>➖</button>
                <p>{count}</p>
                <button onClick={increment}>➕</button>
            </div>
        </div>
    )
}