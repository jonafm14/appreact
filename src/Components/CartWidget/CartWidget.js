import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidger = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div>
        <Badge badgeContent={getQuantity()} color="primary">
            <Link className='blanco' to='/cart'><ShoppingCartIcon className='blanco' /></Link>
        </Badge>
        </div>
    )
}

export default CartWidger;