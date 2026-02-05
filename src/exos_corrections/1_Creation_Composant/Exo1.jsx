import style from "./Exo1.module.css";

export const Exo1 = (props) => {

    const { name, age = 18 } = props;

    // la fonction renvoie du jsx
    return (
        // Le jsx doit renvoyer une seule balise finale dans laquelle on peut mettre toutes les balises qu'on veut.
        // Si on ne veut pas rajouter de balise juste pour rajouter de balise, on peut utiliser un fragment qui s'écrit <Fragment></Fragment> ou <> </>
        <>
            <p className={style.gros}>Bienvenue { name } sur l'application React</p>
            <p className={style.petit}>Vous avez { age } ans</p>
        </>
    )
} 