import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <div key={product.id} className="card">
            <img className="img" src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <h4>{product.price} $</h4>
            <Link to={`/detail/${product.id}`} className="button_detalle">Ver Detalle</Link>
        </div>
    )
}

export default Item