import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../Context/CartContext';
import { useContext } from 'react';

const CartWidger = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div>
        <Badge badgeContent={getQuantity()} color="primary">
            <ShoppingCartIcon color="action" />
        </Badge>
        </div>
    )
}

export default CartWidger;