import './ItemListContainer';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {

    const onAdd = (quantity) => {
        alert("Cantidad de items agregados " + quantity)
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
        <ItemCount stock={10} valInicial={0} onAdd={onAdd} name="Producto N°1"/>
        </div>
    )
};

export default ItemListContainer;