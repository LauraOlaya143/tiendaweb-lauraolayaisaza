import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProduct = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const getQuantity = () => cart.reduce((total, prod) => (total += prod.quantity), 0);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeProduct = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const productById = cart.find(prod => prod.id === id)

        return productById?.quantity
    }

    const getTotal = () => cart.reduce((total, prod) => (total += prod.quantity * prod.price), 0);

    return (
        <CartContext.Provider value={{ cart, addProduct, isInCart, removeProduct, clearCart, getQuantity, getProductQuantity, getTotal }}>
            {children}
        </CartContext.Provider> 
    )
}

