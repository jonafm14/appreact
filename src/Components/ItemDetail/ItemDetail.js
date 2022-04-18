import ItemCount from '../ItemCount/ItemCount'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { useNavigate, Link } from 'react-router-dom'
import './ItemDetail.css'


const InputCount = ({onAdd, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    console.log(stock);
    const handleChange = (e) => {
        if(e.target.value <= stock && e.target.value > 0 ) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <TextField size="small" id="outlined-number" label="Number" type="number"InputLabelProps={{shrink: true,}} onChange={handleChange} value={count} />
            <Button variant="contained" onClick={() => onAdd(count)}><AddShoppingCartIcon fontSize="medium"></AddShoppingCartIcon></Button>
        </div>
    )
}





const ItemDetail = ({id, name, img, description, price, stock, setCart, cart}) => {
    const [typeInput, setTypeInput] = useState(true)
    const handleAdd = (count) => {
        const objProd = {id, name, price, quantity}
        setQuantity(count)
        setCart([...cart, objProd])
    }
    const Count = typeInput ? ItemCount : InputCount
    const [quantity, setQuantity] =useState(0)

    return (
        <div >
            <Card sx={{ maxWidth: 345 }}>
            
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="text.primary">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">{description}</Typography>
                        <Typography variant="body1" color="text.secondary">${price}</Typography>
                    </CardContent>
                    <Switch onClick={() => setTypeInput(!typeInput)} defaultChecked />
                </CardActionArea> 
                {quantity > 0 ?<Button variant="contained"> <Link to='/cart'>Ir al carrito</Link></Button> : <Count onAdd={handleAdd} stock={stock}/> }
            </Card>
        </div>
    );
}

export default ItemDetail;