import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({product}) => {

    const { removeItem } = useContext(CartContext)

    const Remove = (id) => {
        removeItem(id)
    }
    return (
        <div key={product.id} className="card_cart">
            <div className="text">
                <h4 className="text2">{product.name}</h4>
                <h4 className="text2">Price: {product.price} $</h4>
                <h4 className="text2">Quantity: {product.quantity}</h4>
                <h4 className="text2">SubTotal: {product.price * product.quantity}</h4>
            </div>
            <div>
                <button className="button_cart" onClick={() => Remove(product.id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem