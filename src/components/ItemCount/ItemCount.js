import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, initial = 0, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const minus = () => {
        if ( quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const plus = () => {
        if ( quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    return(
        <div className="container">
            <div className="count count_container">
                <div className="count">
                    <button onClick={minus} className={`${quantity === 0 ? 'buttonDisabled' : 'buttons'}`}> - </button>
                    <h5 className="elements">{quantity}</h5>
                    <button onClick={plus} className={`${quantity === stock ? 'buttonDisabled' : 'buttons'}`}> + </button>
                </div>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} className="button">Add to Cart</button>
            </div>
            
        </div>
    )
}

export default ItemCount