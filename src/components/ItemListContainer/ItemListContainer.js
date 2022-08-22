import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import { fetcher } from '../../utils/fetcher'

const ItemListContainer = (props) => {
    const {category} = useParams()

    const {loading, data, error} = useAsyncCall(fetcher(getProducts, category), [category])

    if(loading) {
        return <div className="loader"></div>
    }
    if(error){
        return <h1>Hubo un error en la pagina :C</h1>
    }
    return (
        <div>
            <h1 className="greeting">{props.greeting}</h1>
            <div>
                <ItemList products={data}/>
            </div>
        </div>
    )
};

export default ItemListContainer;