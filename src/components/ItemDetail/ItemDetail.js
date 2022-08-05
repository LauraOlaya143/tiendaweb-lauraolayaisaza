import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, img, category, price, description, stock}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)

    const quantityAdded = getProductQuantity(id)

    const onAdd  = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
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
                    { quantity > 0 ? <Link to='/cart' className="button_detalle">Ir al carrito</Link> : <ItemCount stock={stock} initial={quantityAdded} onAdd={onAdd}/>}
                </div>
                
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default ItemDetail