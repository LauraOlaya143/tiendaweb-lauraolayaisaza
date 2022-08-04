import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
    const [quantity, setQuantity] = useState(0)

    const onAdd = (q) => {
        alert("Cantidad de productos agregados " + q)
        setQuantity(q)
    }
    return (
        <div key={product.id} className="item_card">
            <div className="img_detail">
                <img className="img_product" src={product.img} alt={product.name} />
            </div>
            <div className="text text_description">
                <h4>{product.category}</h4>
                <h3>{product.name}</h3>
                <h4>{product.price} $</h4>
                <div className="text_2">
                    { quantity > 0 ? <Link to='/cart' className="button_detalle">Ir al carrito</Link> : <ItemCount stock={product.stock} valInicial={0} onAdd={onAdd}/>}
                </div>
                
                <p>{product.description}</p>
            </div>
            
        </div>
    )
}

export default ItemDetail