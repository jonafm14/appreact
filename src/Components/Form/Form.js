import { useState, useContext } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CartContext from "../../Context/CartContext"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { Toaster, toast } from 'react-hot-toast'
import './Form.css'



const Form = () => {

    function refreshPage() {
        window.location.reload(false);
    }

    const { cart, getTotal } = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [numero, setNumero] = useState('')
    const [email, setEmail] = useState('')


    const createOrder = () => {

        const objOrder = {
            items: cart,
            buyer: {
                name: nombre,
                phone: numero,
                email: email,
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb);

        const collectionRef = collection(firestoreDb, 'products');

        const outOfStock = [];

        if (objOrder.buyer.name !== "" && objOrder.buyer.email !== "" && objOrder.buyer.numero !== "") {
            getDocs(query(collectionRef, where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach(doc => {
                        const dataDoc = doc.data()
                        const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                        if (dataDoc.stock >= prodQuantity) {
                            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                        } else {
                            outOfStock.push({ id: doc.id, ...dataDoc })
                        }
                    })
                }).then(() => {
                    if (outOfStock.length === 0) {
                        const collectionRef = collection(firestoreDb, 'orders')
                        return addDoc(collectionRef, objOrder)
                    } else {
                        return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                    }
                }).then(({ id }) => {
                    batch.commit()
                    toast.success(`Compra realizada, id de la orden es ${id}`)
                }).catch(error => {
                    console.log(error)
                })
        } else {
            toast.error('Se tienen que completar todos los campos')
        }


    }

    return (
        <div className="containerForm">
            <div>
                <FormControl required>
                    <InputLabel htmlFor="my-input">Nombre Completo</InputLabel>
                    <Input id="my-inputNombre" aria-describedby="my-helper-text" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </FormControl>
                <FormControl required>
                    <InputLabel htmlFor="my-input">Telefono</InputLabel>
                    <Input id="my-inputNumero" aria-describedby="my-helper-text" type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
                </FormControl>
                <FormControl required>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input id="my-inputEmail" aria-describedby="my-helper-text" type="email" label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <div className="containerForm">
                    <Button variant="contained" onClick={() => { createOrder() }} className="Button">Generar Orden</Button>
                    <Button variant="contained" onClick={refreshPage}><Link className='blanco' to='/'>Inicio</Link></Button>
                </div>
            </div>
            <Toaster toastOptions={{ duration: 7000,}}/>
        </div>
    )
}

export default Form