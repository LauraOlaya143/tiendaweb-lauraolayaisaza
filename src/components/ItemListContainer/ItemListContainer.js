import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { database } from "../../services/firebase"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()

    useEffect(() =>{

        const collectionRef = category ? query(collection(database, 'products'), where('category', '==', category)) : collection(database, 'products')

        getDocs(collectionRef).then(response =>{
            const productsDB = response.docs.map(doc => {
                const data = doc.data()
                return { id : doc.id, ...data}
            })
            setProducts(productsDB)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })

    }, [category]) 

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