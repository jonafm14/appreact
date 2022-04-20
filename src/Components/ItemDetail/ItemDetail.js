import ItemCount from '../ItemCount/ItemCount'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext';
import Button from '@mui/material/Button';
import './ItemDetail.css'


const ItemDetail = ({id, name, img, description, price, stock}) => {

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        const productObj = {
            id, name,price, quantity: count
        }
        addItem(productObj)
    }
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
                </CardActionArea> 
                {
                    isInCart(id)
                    ? <Button variant="contained"><Link to='/cart'>Ir al carrito</Link></Button>
                    :<ItemCount onAdd={handleAdd} stock={stock}/>
                }
            </Card>
        </div>
    );
}

export default ItemDetail;