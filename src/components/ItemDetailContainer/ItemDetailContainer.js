import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() =>{
        getProduct(productId - 1).then(response =>{
            setProduct(response)
        }).catch (error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId ]) 

    if(loading) {
        return <div className="loader"></div>
    }

    return (
        <div className="itemdetail">
            <ItemDetail {...product}/>
        </div>
    )
};

export default ItemListContainer;