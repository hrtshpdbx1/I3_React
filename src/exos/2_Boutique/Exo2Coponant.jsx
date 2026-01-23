// Import fichier css classique
import './Exo2.css';
import style from '../2_Boutique/Exo2Coponant.module.css';

export const Exo2Coponant = (props) => {
    // On crée un composant qui sert à afficher un produit 
    // On extrait tout ce dont on a besoin 
    const { isAvailable, name, image, description, price, promoPrice } = props;

    // ✖️ Si le produit n'est plus vendu
    if (!isAvailable) {
        return (
            <div className={style.card + ' ' + style.notSold}>
                  <div>
                    {
                        <img src={image} alt={name} />
                    }
                </div>
                    <div>
                        <h3>{name}</h3>
                    </div>
                <div>
                    <p>{description}</p>
                </div>
                    <div>
                        <p>Le {name} n'est plus en vente </p>
                    </div>
                </div>
               
        )
    }
// 🛍️ Si le produit est encore vendu
return (
    <div className={style.card + ' ' + (promoPrice ? style.hasPromo : '')}>
        {promoPrice && <div className={style.promoTag}>💲DEAL💲</div>}

        <>
            <img src={image} alt={name} />
           <h3> {name}</h3>

            {/* le ET &&  = Si description est rempli, on va mettre le contenu de la balise description */}
            {/* Si j'ai la valeur, alors je fais ça  */}
            {description && <p>{description}</p>}
            {/* * TERNAIRE : (condition) ? traitement si vrai : traitement si faux  */}
            {/* <p> Prix : {price} €</p> */}
            {/* Quand il y a un promo --> quand promoPrice n'est pas nul */}
            <div className={style.containerPrix}> Prix :
{/* Si le prix est en promo ET */}
                {promoPrice && <p className={style.strikethrough}>  {Number(promoPrice).toFixed(2)}€</p>}
                <p> {Number(price).toFixed(2)}€</p>
            </div>

        </>
    </div >

)
}
