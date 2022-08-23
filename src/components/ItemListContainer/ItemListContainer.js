import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import { fetcher } from '../../utils/fetcher'

const ItemListContainer = () => {
    const {category} = useParams()

    const {loading, data, error} = useAsyncCall(fetcher(getProducts, category), [category])

    const categoryDoll = "Category: " + category

    const welcome = "Welcome to My FairyTale!"

    if(loading) {
        return <div className="loader"></div>
    }
    if(error){
        return <h1>Hubo un error en la pagina :C</h1>
    }
    return (
        <div>
            <div className={`${category ? 'no_number' : 'greeting'}`}>
                <h1 className="greeting">{welcome}</h1>
            </div>
            <div className={`${category ? 'greeting' : 'no_number'}`}>
                <h1 className="greeting">{categoryDoll}</h1>
            </div>
            
            <div>
                <ItemList products={data}/>
            </div>
        </div>
    )
};

export default ItemListContainer;