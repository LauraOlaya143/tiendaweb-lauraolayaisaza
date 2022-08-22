import { useState, useEffect } from 'react'

export const useAsyncCall = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect (() =>{
        setLoading(true)

        asyncFunction().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(()=> {
            setLoading(false)
        })

    }, dependencies)
    
    return {data,loading,error}
}