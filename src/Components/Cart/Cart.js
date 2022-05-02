import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import './Cart.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'

const Cart = () => {

    const { cart, clearCart, removeItem, getTotal, getQuantity } = useContext(CartContext)
    
    const createOrder = () => {
        const objOrder = {
            items: cart,
            buyer: {
                name: 'Jonatan Musciachio',
                phone: `342 5123123`,
                email: 'ejemplo@gmail.com',
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb);

        const collectionRef = collection(firestoreDb, 'products');

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            })
    }




    if (cart.length === 0) {
        return (
            <div className="vacio">
                <h1>No hay productos</h1>
                <Button variant="contained"><Link className="blanco" to='/'>Volver al Inicio</Link></Button>
            </div>
        )
    }

    return (
        <div className="cartContainer">
            <h1 className="cartContainer__h1">Cart</h1>
            <ul className="cartContainer__ul">
                {
                    cart.map(prod => <li key={prod.id}><h4>{prod.name} </h4> <p><b>CANTIDAD: </b>{prod.quantity}</p> <p><b>PRECIO UNI: </b>${prod.price}</p>  <p><b>SUBTOTAL: </b>${prod.quantity * prod.price}</p> <Button variant="contained" color="error" onClick={() => removeItem(prod.id)}>X</Button></li>)
                }
            </ul>
            
            <h3>Total: ${getTotal()}</h3>
            
            <div>
                <Button variant="contained" onClick={() => clearCart()} className="Button">Limpiar carrito</Button>
                <Button variant="contained" onClick={() => createOrder()} className="Button">Generar Orden</Button>
            </div>
        </div>
    )
}

export default Cart