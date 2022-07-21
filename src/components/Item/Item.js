import ItemCount from '../ItemCount/ItemCount';

const onAdd = (quantity) => {
    alert("Cantidad de productos agregados " + quantity)
}

const Item = ({product}) => {
    return (
        <div key={product.id} className="card">
            <img className="img" src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <h4>{product.price} $</h4>
            <p>{product.description}</p>
            <ItemCount stock={product.stock} valInicial={0} onAdd={onAdd}/>
        </div>
    )
}

export default Item