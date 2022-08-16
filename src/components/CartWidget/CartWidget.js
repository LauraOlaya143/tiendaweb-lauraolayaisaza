import './CartWidget.css';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <div className={`${quantity === 0 ? 'no_number' : 'div_principal'}`}>
            <Link to='/cart'>
                <i className='fas fa-cart-plus iconos'></i>
                <p className='number'>{quantity}</p>
            </Link>
        </div>
    )
};

export default CartWidget;