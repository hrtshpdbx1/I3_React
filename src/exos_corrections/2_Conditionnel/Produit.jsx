import style from './Produit.module.css';

export const Produit = (props) => {

    const { isAvailable, name, image, description, price, promoPrice } = props;


    if (!isAvailable) {
        return (
            <div className={style.card}>
                <div className={style.image}>
                    {
                        image ?
                            <img src={image} alt={`photo de notre pull ${name}`} /> :
                            <img src='/src/assets/images/NoImage.png' alt="Il n'y a pas d'image pour ce produit" />
                    }
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
                <div className={style.desc}>
                    Ce produit a été victime de son succès.
                </div>
            </div>
        )
    }


    return (
        <div className={style.card}>
            <div className={style.image}>
                {
                    image ?
                        <img src={image} alt={`photo de notre pull ${name}`} /> :
                        <img src='/src/assets/images/NoImage.png' alt="Il n'y a pas d'image pour ce produit" />
                }
            </div>

            <div>
                <h3>{name}</h3>
            </div>

            { description && <div className={style.desc}> {description} </div> }

            {/* option 1 afficher un prix ou l'autre */}
            {/* <div>
                { promoPrice || price } €
            </div> */}

            {/* option 2 afficher le prix en promo ET le prix initial mais barré */}
            <div className={`${style.price}`}>
                { promoPrice && <span className={style['price-promo']}>{promoPrice.toFixed(2) } €</span> }

                <span className={ promoPrice && style.strike }>{price.toFixed(2)} €</span>
            </div>
        </div>
    )
}