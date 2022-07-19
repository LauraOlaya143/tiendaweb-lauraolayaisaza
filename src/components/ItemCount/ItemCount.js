import './ItemCount.css';
import { useState } from 'react'

const ItemCount = ({ stock, valInicial, onAdd, name }) => {
    const [count, setCount] = useState(0)

    const min = () => {
        if ( count > valInicial) {
            setCount(count - 1)
        }
    }

    const plus = () => {
        if ( count < stock) {
            setCount(count + 1)
        }
    }

    return(
        <div className="container">
            <h3>{name}</h3>
            <div>
                <div className="count">
                    <button onClick={min}> - </button>
                    <h5>{count}</h5>
                    <button onClick={plus} > + </button>
                </div>
            </div>
            <div>
                <button onClick={() => onAdd(count)} className="button">Agregar al carrito</button>
            </div>
            
        </div>
    )
}

export default ItemCount