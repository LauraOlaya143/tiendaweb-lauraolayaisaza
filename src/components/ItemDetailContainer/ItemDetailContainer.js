import { useState, useEffect } from 'react'
//import { getProduct } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { database } from "../../services/firebase"

const ItemListContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() =>{

        getDoc(doc(database, 'products', productId)).then(response =>{
            const values = response.data()
            const product = { id : response.id, ...values}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
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