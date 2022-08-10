import CartItem from '../CartItem/CartItem'

const CartList = ({products}) => {
    return(
        <div className="contenedor_cartas">
            {products.map(product => (
                <CartItem product={product} key={product.id}/>
        ))}
        </div>
        )
}

export default CartList