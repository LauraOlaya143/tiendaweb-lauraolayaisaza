import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() =>{

        const asyncFunction = categoryId ? getProductByCategory : getProducts;

        asyncFunction(categoryId).then(response =>{
                setProducts(response)
            }).catch (error => {
                console.log(error)
            }).finally(() => {
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