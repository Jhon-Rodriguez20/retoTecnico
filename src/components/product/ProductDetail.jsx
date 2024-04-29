import { Box, Typography, Rating, Stack, CardMedia, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductDetail({ product }) {

    return (
        <Box sx={{ bgcolor: 'background.paper', border: '1px solid #000', boxShadow: 24, p: 4, maxHeight: '500px', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        alt={product.name}
                        height="auto"
                        image={product.image}
                        sx={{ objectFit: 'contain' }}
                    />
                </Grid>
                <Grid item xs={12} md={8} container direction="column">
                    <Typography className='text-center mb-4 fw-semibold' variant="h5">
                        {product.name}
                    </Typography>
                    <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h6' className='fw-semibold'>
                                ${product.price} COP
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <Rating name="read-only" readOnly size='large' value={product.review} />                        
                            </Stack>
                        </Grid>
                    </Grid>
                    <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'justify' }} variant="body1">
                        {product.description}
                    </Typography>
                    <Typography className='text-center mt-4'>
                        Te vas a llevar este producto por solo
                    </Typography>
                    <Typography className='text-center fw-semibold'>
                        $80.000 p/semana
                    </Typography>
                    <Typography className='d-flex justify-content-center mt-3'>
                        <Button component={Link} to={`/product/${product.id}`} className='button-wantIt fs-6 fw-bold'>
                            Comprar a crédito
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export { ProductDetail }