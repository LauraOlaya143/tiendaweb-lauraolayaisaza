import '../CartContainer/CartContainer.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'

const CartContainer = () => {
    const { cart, getQuantity, getTotal, clearCart} = useContext(CartContext)

    const quantity = getQuantity()
    const total = getTotal()

    if(quantity === 0) {
        return (
            <div className="greeting_container">
                <h1 className="greeting">You have no items in your cart</h1>
                <Link className="greeting_noItem" to="/">Check out our products here!</Link>
            </div>
        )
    }

    return (
        <div>
            <h1 className="greeting">This is your cart!</h1>
            <div>
                <Cart products={cart}/>
            </div>
            <h3 className="greeting">TOTAL: ${total}</h3>
            <div>
                <button className="button_compra" onClick={() => clearCart()}>Clear Cart</button>
                <Link className="button_order" to="/orderdata">Generate Order</Link>
            </div>
        </div>
    )
};

export default CartContainer;