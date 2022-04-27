import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from '../../services/firebase'
import Alert from '@mui/material/Alert';

const ItemListContainer = (props) => {
    const [products, setProduct] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        const collectioRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectioRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProduct(products);
        })
    }, [categoryId])

    if (products.length === 0) {
        return <Alert variant="filled" severity="error" className="container">NO HAY PRODUCTOS</Alert>
    }

    return (
        <div className="container">
            <div className="container__div">
                <ItemList products={products} className="container__productos" />
            </div>
        </div>
    )
}

export default ItemListContainer;