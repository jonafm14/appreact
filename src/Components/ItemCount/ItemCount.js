import { useState } from 'react'
import './ItemCount.css' 


const ItemCount = () => {
    const [count,setCount] = useState(0);
    const [producto,setProducto] = useState({nombre:'producto',stock:10})

    const decrement = () =>{
        if (count>0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count<producto.stock) {
            setCount (count + 1)
        }
    }

    return (
        <div>
            <div className='divBotones'>
                <button onClick={increment} className='botonSuma' >+</button>
                    <p>{count}</p>
                <button onClick={decrement} className='botonResta' >-</button>
            </div>
        </div>
    )
}

export default ItemCount;