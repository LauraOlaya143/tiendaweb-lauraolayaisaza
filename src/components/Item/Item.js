import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <Link to={`/detail/${product.id}`} className="card">
            <div key={product.id}>
                <img className="img" src={product.img} alt={product.name} />
                <h4 className="text_cart">{product.name}</h4>
                <h4 className="text_cart">{product.price} $</h4>
                <Link to={`/detail/${product.id}`} className="button_detalle">Ver Detalle</Link>
            </div>
        </Link>
    )
}

export default Item