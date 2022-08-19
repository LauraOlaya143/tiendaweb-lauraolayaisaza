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
                <h1 className="greeting">No tienes ningun producto en tu carrito</h1>
                <Link className="greeting_noItem" to="/">¡Mira nuestros productos aqui!</Link>
            </div>
        )
    }

    return (
        <div>
            <h1 className="greeting">¡Este es tu carrito!</h1>
            <div>
                <Cart products={cart}/>
            </div>
            <h3 className="greeting">TOTAL: ${total}</h3>
            <div>
                <button className="button_compra" onClick={() => clearCart()}>Limpiar Carrito</button>
                <Link className="button_order" to="/orderdata">Generar Orden</Link>
            </div>
        </div>
    )
};

export default CartContainer;