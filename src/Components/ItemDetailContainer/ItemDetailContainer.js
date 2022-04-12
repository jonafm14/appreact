import { useState, useEffect } from 'react'
import { getProductsById } from '../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(item => {
            setProduct(item)
        }).catch (err => {
            console.log(err);
        })

        return (() => {
            setProduct()
        })
    },[])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer