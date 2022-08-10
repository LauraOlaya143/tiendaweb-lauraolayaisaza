import '../CartContainer/CartContainer.css';
import CartList from '../CartList/CartList'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <h1 className="greeting">Este es tu carrito!</h1>
            <div>
                <CartList products={cart}/>
            </div>
        </div>
    )
};

export default CartContainer;