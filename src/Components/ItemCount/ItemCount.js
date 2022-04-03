import { useState } from 'react'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({initial,stock,onAdd}) => {
    const [count,setCount] = useState(0);
    const [producto,setProducto] = useState(initial)

    const decrement = () =>{
        if (count>0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count<stock) {
            setCount (count + 1)
        }
    }

    return (
        <div>
            <div className='divBotones'>
                <Button onClick={increment} className='boton botonSuma' variant="contained" color="success" size="small">+</Button>
                    <p>{count}</p>
                <Button onClick={decrement} className='boton botonResta' variant="contained" color="error" size="small">-</Button>
                <Button className='botonAgregar' onClick={() => onAdd(count)} variant="contained"><AddShoppingCartIcon  fontSize="small"></AddShoppingCartIcon></Button>
            </div>
        </div>
    )
}

export default ItemCount;