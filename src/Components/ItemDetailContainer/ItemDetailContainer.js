import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data() }
            setProduct(product)
        })

        return (() => {
            setProduct()
        })
    }, [])

    return (
        <div className='container'>
            <div className='container__div'>
                <ItemDetail {...product} setCart={setCart} cart={cart} />
            </div>
        </div>
    )
}

export default ItemDetailContainer