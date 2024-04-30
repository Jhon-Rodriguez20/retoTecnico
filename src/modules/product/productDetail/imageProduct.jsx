import { Grid, CardMedia } from "@mui/material";

const imageProduct = ({product}) => {
    return (
        <Grid item xs={12} md={4}>
            <CardMedia
                component="img"
                alt={product.name}
                height="auto"
                image={product.image}
                sx={{ objectFit: 'contain' }}
            />
        </Grid>
    );
}

export default imageProduct;