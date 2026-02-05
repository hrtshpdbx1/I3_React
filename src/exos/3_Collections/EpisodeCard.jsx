import style from './EpisodeCard.module.css';

export const EpisodeCard = (props) => {

    const { episode } = props;

    // on extrait ensuite tout ce dont a besoin du formateur
    const { id, title, host, year, image, note } = episode;

    return (
        <div className={note === 5 ? style.card + ' ' + style.fansfavorite : style.card}>
            {/* Si la note = 5, affiche les classes card + fan favorite, sinon card */}

            {note === 5 && <span className={style.heart}>❤️</span>}

            <img src={image} alt={`Thumbnail de ${title}`} />

            <h3> {title}</h3>

            <div className={style.episode_infos}>
                <p>Présenté par : {host}</p>
                <p>Diffusion : {year}</p>

                {/* <div className={style.note}>               
                    {note === 1 ?
                        <p>   ★☆☆☆☆</p> :
                        note === 2 ?
                            <p>  ★★☆☆☆</p> :
                            note === 3 ?
                                <p>  ★★★☆☆ </p> :
                                note === 4 ?
                                    <p>  ★★★★☆</p> :
                                    note === 5 ?
                                        <p>  ★★★★★</p> :
                                        <p>Pas de note</p>}
                </div> */}

                <div className={style.note}>
                    {/* Array.from =  crée un tableau de la taille de la note, ex : [ , , ] .*/}
                    {/* .map((item, index)  */}
                    {/* .map() le parcour  et y déposer le span*/}
                    {/* {Array.from({ length: note }).map((_, index) => (
                        <span key={index}>★</span>
                    ))} */}

                    {Array.from({ length: 5 }, (value, index) =>
                        index < note ?
                            (<span>★</span>) :
                            (<span style={{ opacity: 0.3 }} > ☆</span>))
                    }
                    {/* value = on peut aussi mettre un _ (underscore) pour montrer qu'on ne s'en servira pas */}
                    {/*   {Array.from({ length: 5 }, (_, index) =>
                        index < note ?
                            (<span>★</span>) :
                            (<span style={{ opacity: 0.3}} > ☆</span>))
                    }*/}

                    {/* Crée le même tableau, soutrait à 5 le nombre de la note*/}
                    {/* key={index} --> car React a besoin d'une clé unique pour chaque étoile de la boucle.  */}
                    {/* {Array.from({ length: 5 - note }).map((_, index) => (
                        <span key={index} style={{ opacity: 0.3 }}>☆</span>
                    ))} */}
                </div>

            </div>
        </div>
    )
}

