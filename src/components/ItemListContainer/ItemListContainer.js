import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { database } from "../../services/firebase"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() =>{

        const collectionRef = !categoryId ? collection(database, 'products') : query(collection(database, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc => {
                const values = doc.data()
                return { id : doc.id, ...values}
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })

    }, [categoryId]) 

    if(loading) {
        return <div className="loader"></div>
    }

    return (
        <div>
            <h1 className="greeting">{props.greeting}</h1>
            <div>
                <ItemList products={products}/>
            </div>
            
        </div>
    )
};

export default ItemListContainer;