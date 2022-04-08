import { useState, useEffect } from 'react'
import { getProductsById } from '../asyncmock'
import ItemDetail from '../ItemDetalle/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById(3).then(item => {
            setProduct(item)
        }).catch (err => {
            console.log(err);
        })

        return (() => {
            setProduct()
        })
    },[3])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer