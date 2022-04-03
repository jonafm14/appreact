import Item from '../Item/Item'
import Grid from '@mui/material/Grid'

const ItemList = ({ products }) => {
    return (
        <Grid container direction="column" justifyContent="center">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </Grid >
    )
}


export default ItemList

