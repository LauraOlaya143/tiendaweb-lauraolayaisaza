import { getDocs, collection, query, where, getDoc, doc} from "firebase/firestore"
import { adapterProductDB } from '../../adapters/productAdapter'
import { database } from "./index"


export const getProducts = (category) => {
    const collectionRef = category ? query(collection(database, 'products'), where('category', '==', category)) : collection(database, 'products')

    return getDocs(collectionRef).then(response =>{
        const productsDB = response.docs.map(doc => {
            return adapterProductDB(doc)
        })
            return productsDB
        }).catch(error => {
            return error
        })
}

export const getProductById = (id) => {
    return getDoc(doc(database, 'products', id)).then(response =>{
        const data = response.data()
        const productDB = { id : response.id, ...data}
        return productDB
    }).catch(error => {
        return error
    })
}

