import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import './Cart.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, removeItem, getTotal } = useContext(CartContext)

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
                <Button variant="contained"><Link className='blanco' to='/form'>Finalizar compra</Link></Button>
            </div>
        </div>
    )
}

export default Cart