import { Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Stack, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const renderProducts = (productsData, favorites, toggleFavorite, handleOpen, isProductFiltered) => {
    return productsData.map(product => {
        if (isProductFiltered(product)) {
            return (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                    <Card className='my-card m-3'>
                        <CardMedia
                            className='mt-0'
                            component='img'
                            alt={product.name}
                            image={product.image}
                        />
                        <CardContent>
                            <Button component={Link} to={`/product/${product.id}`} className='fs-6 fw-bold'>
                                {product.name}
                            </Button>
                            <Typography variant='body1' className='fw-bold'>
                                ${product.price} COP
                                <IconButton aria-label='share'>
                                    <ShareIcon/>
                                </IconButton>
                            </Typography>
                            <CardActions className='favorite-icon-container'>
                                <IconButton aria-label="add to favorites" onClick={() => toggleFavorite(product.id)}>
                                    <FavoriteIcon color={favorites.includes(product.id) ? "error" : "inherit"} />
                                </IconButton>
                            </CardActions>
                            <Stack spacing={1} className='d-flex justify-content-center'>
                                <Rating name="read-only" readOnly size='medium' value={product.review} />
                                <Button onClick={() => handleOpen(product)} className="button-wantIt fw-semibold">Lo Quiero</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            );
        }
        return null;
    });
}

export default renderProducts;