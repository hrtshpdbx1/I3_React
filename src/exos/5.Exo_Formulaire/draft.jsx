{
    products.map((product) => (
        <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    ))
}
