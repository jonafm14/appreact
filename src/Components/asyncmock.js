const products = [
{ "id": '1', "name": "Televisor", "price": 1548, "category": "televisor", "stock": 16, "description": "Descripcion Televisor", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '2', "name": "Computadora", "price": 2818, "category": "computadora", "stock": 8, "description": "Descripcion Computadora", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '3', "name": "Consola", "price": 2041, "category": "consola", "stock": 15, "description": "Descripcion Consola", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '4', "name": "Celular", "price": 999, "category": "celular", "stock": 19, "description": "Descripcion Celular", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '5', "name": "Televisor", "price": 1486, "category": "televisor", "stock": 25, "description": "Descripcion Televisor", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '6', "name": "Computadora", "price": 1020, "category": "computadora", "stock": 7, "description": "Descripcion Computadora", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '7', "name": "Consola", "price": 1279, "category": "consola", "stock": 7, "description": "Descripcion Consola", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '8', "name": "Celular", "price": 1665, "category": "celular", "stock": 21, "description": "Descripcion Celular", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '9', "name": "Televisor", "price": 1033, "category": "televisor", "stock": 12, "description": "Descripcion Televisor", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '10', "name": "Computadora", "price": 935, "category": "computadora", "stock": 6, "description": "Descripcion Computadora", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '11', "name": "Consola", "price": 1548, "category": "consola", "stock": 13, "description": "Descripcion Consola", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '12', "name": "Celular", "price": 1613, "category": "celular", "stock": 19, "description": "Descripcion Celular", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '13', "name": "Televisor", "price": 2446, "category": "televisor", "stock": 18, "description": "Descripcion Televisor", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '14', "name": "Computadora", "price": 1049, "category": "computadora", "stock": 17, "description": "Descripcion Computadora", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '15', "name": "Consola", "price": 1531, "category": "consola", "stock": 13, "description": "Descripcion Consola", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '16', "name": "Celular", "price": 2007, "category": "celular", "stock": 18, "description": "Descripcion Celular", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '17', "name": "Televisor", "price": 1868, "category": "televisor", "stock": 22, "description": "Descripcion Televisor", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '18', "name": "Computadora", "price": 750, "category": "computadora", "stock": 5, "description": "Descripcion Computadora", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '19', "name": "Consola", "price": 2978, "category": "consola", "stock": 1, "description": "Descripcion Consola", "img": "https://dummyimage.com/600x400/000/fff" },
{ "id": '20', "name": "Celular", "price": 740, "category": "celular", "stock": 1, "description": "Descripcion Celular", "img": "https://dummyimage.com/600x400/000/fff" }
]

const categories = [
    {id: 'televisor', description: 'Televisores'},
    {id: 'computadora', description: 'Computadoras'},
    {id: 'consola', description: 'Consolas'},
    {id: 'celular', description: 'Celulares'},
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve(categories)
        })
    }, 500)
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        },1000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },1000)
    })
}