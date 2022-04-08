import { useState } from 'react'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(0);
    const [producto, setProducto] = useState(initial)

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <div className='divBotones'>
                <ButtonGroup disableElevation variant="contained">
                    <Avatar sx={{ bgcolor: grey[500] }} variant="rounded">
                        <p>{count}</p>
                    </Avatar>
                    <Button onClick={increment} className='boton botonSuma' variant="contained" color="success" size="medium">+</Button>
                    <Button onClick={decrement} className='boton botonResta' variant="contained" color="error" size="medium">-</Button>
                    <Button onClick={() => onAdd(count)} ><AddShoppingCartIcon fontSize="medium"></AddShoppingCartIcon></Button>
                </ButtonGroup>

            </div>
        </div>
    )
}

export default ItemCount;