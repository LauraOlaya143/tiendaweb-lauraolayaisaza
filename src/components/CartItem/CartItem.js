import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartItem = ({product}) => {

    const { removeProduct } = useContext(CartContext)

    const Remove = (id) => {
        removeProduct(id)
    }
    return (
        
        <div key={product.id} className="card_cart">
            <Link to={`/detail/${product.id}`} className="text_card">
                <h4 className="text2">{product.name}</h4>
                <h4 className="text2">Price: {product.price} $</h4>
                <h4 className="text2">Quantity: {product.quantity}</h4>
                <h4 className="text2">SubTotal: {product.price * product.quantity}</h4>
            </Link>
            <div>
                <button className="button_cart" onClick={() => Remove(product.id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem