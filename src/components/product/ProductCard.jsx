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
import { ProductDetail } from './ProductDetail';
import { ModalExtended } from '../modal/ModalExtended';
import productsData from '../../data/productsData';

function ProductCard({ filters }) {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  // Filtrar productos basados en los filtros seleccionados
  const filteredProducts = productsData.filter(product => {
    // Filtrar por categoría
    if (filters.category !== 'Todos' && product.category !== filters.category) {
      return false;
    }
    // Filtrar por rango de precios
    if (filters.minPrice && filters.maxPrice) {
      const price = parseFloat(product.price.replace('.', '').replace(',', ''));
      if (price < filters.minPrice || price > filters.maxPrice) {
        return false;
      }
    }
    // Filtrar por reviews
    if (filters.minRating && product.review < filters.minRating) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={6}>
            <Card sx={{ maxWidth: 340 }} className='my-card mt-3 mb-5'>
              <CardMedia
                component="img"
                alt={product.name}
                height="350"
                image={product.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Button onClick={() => handleOpen(product)} className='text-decoration-none fs-6 fw-bold'>
                    {product.name}
                  </Button>
                </Typography>
                <Typography className='fw-semibold' gutterBottom component="div">
                  ${product.price} COP
                </Typography>
                <Typography>
                  <Stack spacing={1}>
                    <Rating name="read-only size-small" readOnly size='small' value={product.review} />
                  </Stack>
                </Typography>
              </CardContent>
              <CardActions className='d-flex justify-content-center'>
                <Button variant="outlined">Lo Quiero</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedProduct && (
        <ModalExtended open={open} onClose={handleClose}>
          <ProductDetail product={selectedProduct} />
        </ModalExtended>
      )}
    </>
  );
}

export { ProductCard };