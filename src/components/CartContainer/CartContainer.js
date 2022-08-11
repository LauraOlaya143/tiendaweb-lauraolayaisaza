import '../CartContainer/CartContainer.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'

const CartContainer = () => {
    const { cart, getQuantity, getTotal, clearCart} = useContext(CartContext)

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
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
                <button className="button_compra">Generar Orden</button>
            </div>
        </div>
    )
};

export default CartContainer;