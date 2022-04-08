import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidger = () => {
    return(
        <div>
        <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="action" />
        </Badge>
        </div>
    )
}

export default CartWidger;