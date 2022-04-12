import { useEffect, useState } from "react";
import { getProducts } from "../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [products, setProduct] = useState([])
    const { categoryId } = useParams() 

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProduct(prods)
        })
    }, [categoryId])

    return (
        <div className="container">
            <h1 className="container__titulo">Productos</h1>
            <ItemList products={products} className="container__productos" />
        </div>
    )
}

export default ItemListContainer;