import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const onAdd = (quantity) => {
    alert("Cantidad de productos agregados " + quantity)
}

const ItemDetail = ({product}) => {
    return (
        <div key={product.id} className="item_card">
            <div className="img_detail">
                <img className="img" src={product.img} alt={product.name} />
            </div>
            <div className="text">
                <h4>{product.category}</h4>
                <h3>{product.name}</h3>
                <h4>{product.price} $</h4>
                <ItemCount stock={product.stock} valInicial={0} onAdd={onAdd}/>
                <p>{product.description}</p>
            </div>
            
        </div>
    )
}

export default ItemDetail