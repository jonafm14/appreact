import { useEffect, useState } from "react";
import { getProducts } from "../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProduct(prods)
        })
    }, [])

    return (
        <div>
            <h1 className="titulo">Productos</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;