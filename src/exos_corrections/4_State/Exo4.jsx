import { useState } from 'react';
import style from './Exo4.module.css';

export const Exo4 = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            image: 'https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg?resize=500%2C500',
            name: 'Burger Cheese',
            price: 8.50,
            quantity: 0
        },
        {
            id: 2,
            name: 'Burger Chicken',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qX0jxIk2Ywj4D_G26q0gIyGfv5nCWrwEZg&s',
            price: 11,
            quantity: 0
        },
        {
            id: 3,
            name: 'Burger Triple',
            image: 'https://schweidandsons.com/wp-content/uploads/2023/07/ABC_S_S_05-TripleSmashBurger-15low.jpg',
            price: 12.50,
            quantity: 0
        },
        {
            id: 4,
            name: 'Petite Frite',
            image: 'https://recipesformen.com/wp-content/uploads/2019/03/Belgian_french_fries2.jpg',
            price: 3.50,
            quantity: 0
        },
        {
            id: 5,
            name: 'Moyenne Frite',
            image: 'https://recipesformen.com/wp-content/uploads/2019/03/Belgian_french_fries2.jpg',
            price: 4.50,
            quantity: 0
        },
        {
            id: 6,
            name: 'Grande Frite',
            image: 'https://recipesformen.com/wp-content/uploads/2019/03/Belgian_french_fries2.jpg',
            price: 6,
            quantity: 0
        },
    ]);

    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);


    const changeQuantity = (id, value) => {
        // On va créer un nouveau tableaux de produits en parcourant le tableau de produits
        const newProducts = products.map(product => {
            // Pour chaque produit, on regarde si l'id est égal à celui reçu en param dont on veut changer la quantité
            if (product.id === id) {
                /* Si les id correspondent, on modifie la quantité et on renvoie le produit modifié */

                /* On va vérifier la quantité pour ne pas tomber dans les valeurs négatives */
                if (product.quantity + value >= 0) {
                    product.quantity += value;
                }
                return product;
            }
            else {
                return product; /* Si les id ne correspondent pas, on renvoie le produit tel quel */
            }
        });
        // Plus qu'à utiliser la méthode set pour remplacer l'ancien tableau de produits par le nouveau et mettre à jour le visuel du composant
        setProducts(newProducts);

        // Recalcul du total
        // Option 1 : Boucle
        // let somme = 0;

        // products.forEach(product => {
        //     somme += product.price * product.quantity;
        // })

        // Option 2 : Reduce
        const somme = products.reduce((acc, product) => { 
            return acc + product.price * product.quantity 
        }, 0)

        setTotal(somme);

        // Mise à jour du nombre d'éléments dans le panier
        const newCount = products.reduce((acc, product) => { return acc + product.quantity }, 0);
        setCount(newCount);
    }



    return (
        <>
            {/* Logo */}
            <div className='flex flex-row gap-2 items-center mb-2'>
                <div className={style.logo}>
                    <h2><span>Inter</span><span>Frite<span className={style.number}>3</span></span></h2>
                    <div className={style.dots}>
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>

                <div className={style.slogan}>
                    <h2>Les frites <br />au féminin</h2>
                    <h3>Boissons gratuites</h3>
                </div>
            </div>

            <div className='flex flex-row gap-3 items-center'>

                <div className='flex flex-col gap-2'>

                    {products.map(product => (

                        <div className={`flex flex-row items-center gap-2 ${style.product}`} key={product.id}>

                            <div className={style.productImg}>
                                <img src={product.image} alt={product.name} />
                            </div>

                            <p>{product.name}</p>

                            <p>{product.price.toFixed(2)} €</p>

                            <div className='flex flex-row gap-1 items-center'>
                                <button disabled={product.quantity === 0} onClick={() => changeQuantity(product.id, -1)}>➖</button>
                                <p>{product.quantity}</p>
                                <button onClick={() => changeQuantity(product.id, 1)}>➕</button>
                            </div>
                        </div>
                    ))}

                </div>

                <div className='flex flex-col gap-1 justify-center'>
                    <h3>Récapitulatif de votre commande :</h3>
                    <div className='flex flex-row gap-2'>
                        <p>Nombre d'éléments dans votre panier :</p>
                        <p>{count}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <p>Coût total :</p>
                        <p>{total.toFixed(2)} €</p>
                    </div>

                </div>
            </div>


        </>
    )
}