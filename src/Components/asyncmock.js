const products = [
{ "id": 1, "name": "Producto 1", "price": 1548, "category": "", "stock": 16, "description": "Descripcion Producto 1", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 2, "name": "Producto 2", "price": 2818, "category": "", "stock": 8, "description": "Descripcion Producto 2", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 3, "name": "Producto 3", "price": 2041, "category": "", "stock": 15, "description": "Descripcion Producto 3", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 4, "name": "Producto 4", "price": 999, "category": "", "stock": 19, "description": "Descripcion Producto 4", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 5, "name": "Producto 5", "price": 1486, "category": "", "stock": 25, "description": "Descripcion Producto 5", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 6, "name": "Producto 6", "price": 1020, "category": "", "stock": 7, "description": "Descripcion Producto 6", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 7, "name": "Producto 7", "price": 1279, "category": "", "stock": 7, "description": "Descripcion Producto 7", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 8, "name": "Producto 8", "price": 1665, "category": "", "stock": 21, "description": "Descripcion Producto 8", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 9, "name": "Producto 9", "price": 1033, "category": "", "stock": 12, "description": "Descripcion Producto 9", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 10, "name": "Producto 10", "price": 935, "category": "", "stock": 6, "description": "Descripcion Producto 10", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 11, "name": "Producto 11", "price": 1548, "category": "", "stock": 13, "description": "Descripcion Producto 11", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 12, "name": "Producto 12", "price": 1613, "category": "", "stock": 19, "description": "Descripcion Producto 12", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 13, "name": "Producto 13", "price": 2446, "category": "", "stock": 18, "description": "Descripcion Producto 13", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 14, "name": "Producto 14", "price": 1049, "category": "", "stock": 17, "description": "Descripcion Producto 14", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 15, "name": "Producto 15", "price": 1531, "category": "", "stock": 13, "description": "Descripcion Producto 15", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 16, "name": "Producto 16", "price": 2007, "category": "", "stock": 18, "description": "Descripcion Producto 16", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 17, "name": "Producto 17", "price": 1868, "category": "", "stock": 22, "description": "Descripcion Producto 17", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 18, "name": "Producto 18", "price": 750, "category": "", "stock": 5, "description": "Descripcion Producto 18", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 19, "name": "Producto 19", "price": 2978, "category": "", "stock": 1, "description": "Descripcion Producto 19", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": 20, "name": "Producto 20", "price": 740, "category": "", "stock": 1, "description": "Descripcion Producto 20", "img": "https://dummyimage.com/600x400/000/fff" }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },2000)
    })
}