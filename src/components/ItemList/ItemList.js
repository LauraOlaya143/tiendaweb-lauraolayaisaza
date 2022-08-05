import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className="contenedor_cartas">
            {products.map(product => (
                <Item product={product} key={product.id}/>
        ))}
        </div>
        )
}

export default ItemList