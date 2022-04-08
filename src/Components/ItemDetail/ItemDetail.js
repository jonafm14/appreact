import ItemCount from '../ItemCount/ItemCount'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemDetail = ({ name, img, description, price, stock }) => {
    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`);
    }
    return (
        <div>
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
                <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
            </Card>
        </div>
    );
}

export default ItemDetail;