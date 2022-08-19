import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import NoStock from "../NoStock/NoStock"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({id, name, img, category, price, description, stock}) => {
    const [quantity, setQuantity] = useState(0)
    const { addProduct, getProductQuantity } = useContext(CartContext)

    const quantityAdded = getProductQuantity(id)

    const linkToCart = () => (
        <div>
            <Link to='/cart' className="link_tostify">¡El producto se agrego al carrito con exito!</Link>
        </div>
    );

    const AddItem  = (quantity) => {
        setQuantity(quantity)
        addProduct({id, name, price, quantity})
        toast.success(linkToCart, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
                <div className={`${stock === 0 ? 'no_number' : 'text_2'}`}>
                    { quantity > 0 ? <Link to='/cart' className="button_detalle">Ver Carrito</Link> : <ItemCount stock={stock} initial={quantityAdded} onAdd={AddItem}/>}
                    <ToastContainer />
                </div>
                <div className={`${stock > 0 ? 'no_number' : 'text_2'}`}>
                    <NoStock/>
                </div>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default ItemDetail