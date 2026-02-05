// Import fichier css classique
import './Demo1.css';

// Import fichier module css
// Quand on importe un module, on a accès un objet dans lequel il y aura toutes les classes
import style from './Demo1.module.css';

export const Demo1Component = (props) => {
    //#region Explications Props
    //props est un objet dans lequel il y aura des propriétés qui porteront le nom de ce qui aura été envoyé lors de l'utilisation du composant
    // <Demo1Component name="HTML" type="Front-End"/>
    
    // Avec le destructuring, je vais chercher dans l'objet props, tout ce qui m'intéresse pour mon composant
    // Si vous voulez rajouter des valeurs par défaut, on le fait avec un =
    //#endregion
    
    const { name = '...Cours...', type = '...Domaine...', difficulty = 'X' } = props;

    return (
        <>
        <p className={style['grey-text']}>Bienvenue au cours de {name} qui est du {type}</p>

        <img src="" alt="" srcset="" />
       
        {/* Utilisation du css classique */}
        <p className="grey-text">Difficulté : {difficulty}/5</p>
        </>
    );
}

