export const adapterProductDB = (doc) => {
    const data = doc.data()
    const newProducts = { 
        id : doc.id,
        tittle: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        description: data.description
    }

    return newProducts
}