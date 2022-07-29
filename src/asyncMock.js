const products  = [
    { 
        id: '1',
        name: 'Draculaura - Boo-riginal creeproductions',
        price: 25,
        category: 'Monster High',
        img: "../images/draculaura_mh.jpg",
        stock: 20,
        description: "Monster High returns with spooktacular reproductions of the original ghouls, and they’re just as freaky-fabulous as they were on the first day of school! Draculaura may be sweet and sensitive, but she’s ready to slay in her gore-geous 4-piece outfit. From her killer lace-up boots to the delicate lace details, Draculaura's style is to-die-for. She also comes with her pet bat, Count Fabulous, plus a batty umbrella, her top eek-ret diary, and skullete hairbrush."
    },
    { 
        id: '2',
        name: 'Raven Queen - First Chapter - Basic Outfit',
        price: 40,
        category: 'Ever After High',
        img: "../images/raven_eah.jpg",
        stock: 15,
        description: 'Muñeca Ever After high del 2013, Hija de la reina malvada.'
    },
    { 
        id: '3',
        name: 'Daphne Minton - Mint Fashion - Serie 3',
        price: 35,
        category: 'Rainbow High',
        img: "../images/minton_rh.jpg",
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

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[id])
        }, 2000)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}