
import { Grid } from "@mui/material";

const imageTable = ({product}) => {
    return (
        <Grid item xs={12} md={4}>
            <img src={product.image} alt={product.name} className='mt-5 img-fluid' />
        </Grid>
    )
}

export default imageTable;