import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className="contenedor_cartas">
            {products.map(product => (
                <Item product={product}/>
        ))}
        </div>
        )
}

export default ItemList