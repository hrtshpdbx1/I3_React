// Import fichier css classique
import './Exo1Coponent.css';

// Import fichier module css
import style from './Exo1Coponent.module.css';

// Export + création d'un composant avec une fonction fléchée dedans
export const Exo1Coponent = (props) => {

    const { name = '...Nom...', age = '18', image = '/default.jpg'  } = props;

    // la fonction renvoie du jsx
    // elle doit être composé que d'une div ou bien entre des <> </> qui stimule une balise
    return (
        <>
            <p className={style['monstyle']}>Bienvenue {name} sur l'application React !</p>

        
            <img
            className='image_carré'
                src={image}
                alt={`Photo de ${name}`}
            />

            
            <p className="monstyle">Vous avez {age} ans ! </p>

            
        </>
    );
}
