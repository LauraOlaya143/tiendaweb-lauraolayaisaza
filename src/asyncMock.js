const products  = [
    { 
        id: '1',
        name: 'Draculaura - Boo-riginal creeproductions',
        price: 25,
        category: 'monster high',
        img: "images/draculaura_mh.jpg",
        stock: 20,
        description: 'Muñeca Montser High del 2022, hija del conde Drácula.'
    },
    { 
        id: '2',
        name: 'Raven Queen - First Chapter - Basic Outfit',
        price: 40,
        category: 'ever after high',
        img: "images/raven_eah.jpg",
        stock: 15,
        description: 'Muñeca Ever After high del 2013, Hija de la reina malvada.'
    },
    { 
        id: '3',
        name: 'Daphne Minton - Mint Fashion - Serie 3',
        price: 35,
        category: 'rainbow high',
        img: "images/minton_rh.jpg",
        stock: 25,
        description: 'Muñeca Rainbow High del 2020 de color menta.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}