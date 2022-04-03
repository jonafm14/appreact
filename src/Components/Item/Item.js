import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({name,img,description}) => {
  return (
    
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          src={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item





const sada = ({name,img}) => {
    return (
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <button>Ver detalle</button>
        </section>
    )
}