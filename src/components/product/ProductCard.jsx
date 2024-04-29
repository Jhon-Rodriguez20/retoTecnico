import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ProductDetail } from './ProductDetail';
import { ModalExtended } from '../modal/ModalExtended';
import productsData from '../../data/productsData';

function ProductCard({ filters }) {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId)); // Si ya está en favoritos, lo quita
    } else {
      setFavorites([...favorites, productId]); // Si no está en favoritos, lo agrega
    }
  };

  // Filtrar productos basados en los filtros seleccionados
  const filteredProducts = productsData.filter(product => {
    // Filtrar por categoría
    if (filters.category !== 'Todos' && product.category !== filters.category) {
      return false;
    }

    // Filtrar por rango de precios
    if (filters.minPrice !== '' && filters.maxPrice !== '') {
      const price = parseInt(product.price);
      const minPrice = parseInt(filters.minPrice);
      const maxPrice = parseInt(filters.maxPrice);
      if (price < minPrice || price > maxPrice) {
        return false;
      }
    }

    // Filtrar por rating si se ha seleccionado un valor mínimo de rating
    if (filters.minRating !== 0 && product.review !== filters.minRating) {
      return false;
    }

    // Si pasa todos los filtros, mantener el producto en la lista filtrada
    return true;
  });

  return (
    <Grid container spacing={2}>
      {filteredProducts.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <Card className='my-card m-3'>
            <CardMedia
              className='mt-0'
              component='img'
              alt={product.name}
              image={product.image}
            />
            <CardContent>
              <Button onClick={() => handleOpen(product)} className='fs-6 fw-bold'>
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
                <Button className="button-wantIt">Lo Quiero</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {selectedProduct && (
        <ModalExtended open={open} onClose={handleClose}>
          <ProductDetail product={selectedProduct} />
        </ModalExtended>
      )}
    </Grid>
  )
}

export { ProductCard }