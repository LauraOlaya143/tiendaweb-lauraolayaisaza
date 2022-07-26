import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getProducts().then(response =>{
            setProducts(response)
        }).catch (error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, []) 

    if(loading) {
        return <div className="loader"></div>
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <div>
                <ItemList products={products}/>
            </div>
            
        </div>
    )
};

export default ItemListContainer;