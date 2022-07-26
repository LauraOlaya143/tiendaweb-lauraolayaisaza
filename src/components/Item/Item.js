const Item = ({product}) => {
    return (
        <div key={product.id} className="card">
            <img className="img" src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <h4>{product.price} $</h4>
        </div>
    )
}

export default Item