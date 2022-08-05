import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, img, category, price, description, stock}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        if (quantity > 0){
            alert("Cantidad de productos agregados " + quantity)
            setQuantity(quantity)
            addItem({id, name, price, quantity})
        } else {
            alert("No seleccionaste la cantidad que deseas")
        }
        
    }
    return (
        <div key={id} className="item_card">
            <div className="img_detail">
                <img className="img_product" src={img} alt={name} />
            </div>
            <div className="text text_description">
                <h4>{category}</h4>
                <h3>{name}</h3>
                <h4>{price} $</h4>
                <div className="text_2">
                    { quantity > 0 ? <Link to='/cart' className="button_detalle">Ir al carrito</Link> : <ItemCount stock={stock} valInicial={0} onAdd={onAdd}/>}
                </div>
                
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default ItemDetail