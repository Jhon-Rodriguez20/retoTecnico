import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

function ProductDetail({ product }) {
  return (
    <Box sx={style}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt={product.name}
            height="auto"
            image={product.image}
            sx={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography className='text-center' id="modal-modal-title" variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography className='d-flex justify-content-between'>
            <Typography className='fw-semibold' id="modal-modal-description" sx={{ mt: 2 }}>
              ${product.price} COP
            </Typography>
            <Typography className='mt-2'>
              <Stack spacing={1}>
                <Rating name="read-only" readOnly size='medium' value={product.review} />
              </Stack>
            </Typography>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'justify' }}>
            {product.description}
          </Typography>
          <Typography className='text-center mt-4'>
            Te vas a llevar este {product.category} por solo
          </Typography>
          <Typography className='text-center fw-semibold'>
            $80.000 p/semana
          </Typography>
          <Typography className='d-flex justify-content-center'>
            <Link to={`/product/${product.id}`} className='btn btn-outline-primary fs-6 fw-bold'>
              Comprar a crédito
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export { ProductDetail }