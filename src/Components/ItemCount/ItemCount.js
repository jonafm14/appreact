import { useState } from 'react'
import './ItemCount.css' 


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
                <button onClick={increment} className='boton botonSuma' >+</button>
                    <p>{count}</p>
                <button onClick={decrement} className='boton botonResta' >-</button>
                <button className='botonAgregar' onClick={() => onAdd(count)} >Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount;