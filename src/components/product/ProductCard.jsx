import { useState } from 'react';
import { Card, CardContent, CardMedia, CardActions, Typography, Rating, Stack,
        Grid, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ProductDetail } from './ProductDetail';
import { ModalExtended } from '../modal/ModalExtended';
import productsData from '../../data/productsData';
import { Link } from 'react-router-dom';

function ProductCard({ filters }) {

    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const handleOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
    }

    const toggleFavorite = (productId) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(productId)) {
                return prevFavorites.filter(id => id !== productId);
            } else {
                return [...prevFavorites, productId];
            }
        });
    }

    const isProductFiltered = (product) => {
        if (filters.category !== 'Todos' && product.category !== filters.category) {
            return false;
        }

        if (filters.minPrice !== '' && filters.maxPrice !== '') {
            const price = parseInt(product.price);
            const minPrice = parseInt(filters.minPrice);
            const maxPrice = parseInt(filters.maxPrice);
            if (price < minPrice || price > maxPrice) {
                return false;
            }
        }

        if (filters.minRating !== 0 && product.review !== filters.minRating) {
            return false;
        }
        return true;
    }

    const renderProducts = () => {
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
                                    <Button onClick={() => handleOpen(product)} className="button-wantIt">Lo Quiero</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            }
            return null;
        });
    }

    return (
        <Grid container spacing={2}>
            {renderProducts()}
            {selectedProduct && (
                <ModalExtended open={open} onClose={handleClose}>
                    <ProductDetail product={selectedProduct} />
                </ModalExtended>
            )}
        </Grid>
    );
}

export { ProductCard }