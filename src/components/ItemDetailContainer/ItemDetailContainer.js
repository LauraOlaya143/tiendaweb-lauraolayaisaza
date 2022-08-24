import {useAsyncCall } from '../../hooks/useAsyncCall'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/firebase/firestore'
import { fetcher } from '../../utils/fetcher'

const ItemListContainer = () => {
    const { productId } = useParams()

    const {loading, data, error} = useAsyncCall(fetcher(getProductById,productId), [productId])

    if(loading) {
        return <div className="loader"></div>
    }

    if(error) {
        return <h1>Hubo un error en la pagina :C</h1>
    }

    return (
        <div className="detail_container">
            <ItemDetail {...data}/>
        </div>
    )
};

export default ItemListContainer;