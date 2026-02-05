import { useState } from "react"


export const Exo4 = () => {

}

const [products, setProducts] = useState([
// On pet prendre tout nos produits et les transformer, a condition qu'il respecte la condition

const : newProducts = products.map(product)
]); 

const chageQuantity (id, value)
// id pour identifier le produit

return ( 
    <>
    
    <div className="flex flex-col gap-2"> 
{/* logo */}


{/*! todo a rajouter */}
{/* Map */}
{products.map(product => (
{/* pour chasque produit on génére le l'HTML  et ajoutant une key à chaque div */}

    < div className = {'flex flex-row gap-3'} ${style.product} key={product.id}>

    <img scr={product.image} alt={product.name}> </img> 
                <p>{product.name} </p>
                <p>{product.price.tofixed(2)}€ </p>
               
                <div className={'flex-grow gap-2'}>     
                    <button onClick={() => chageQuantity(product.id)}> ➖ </button> 
                    <p>{product.quantity}</p>
                    </div>        
</div>
))}
    </div>
    
    </>
)