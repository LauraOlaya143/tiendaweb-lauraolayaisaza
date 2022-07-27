import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, valInicial, onAdd }) => {
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
            <div className="count count_container">
                <div className="count">
                    <button onClick={min} className="buttons"> - </button>
                    <h5 className="elements">{count}</h5>
                    <button onClick={plus} className="buttons"> + </button>
                </div>
            </div>
            <div>
                <button onClick={() => onAdd(count)} className="button">Agregar al carrito</button>
            </div>
            
        </div>
    )
}

export default ItemCount