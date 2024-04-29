// ProductCreditSection.jsx
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

function ProductCreditSection({ product }) {

  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='fw-semibold'>Información detallada</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img src={product.image} alt={product.name} className='img-fluid' />
            </Grid>
            <Grid item xs={12} md={8}>
              <TableContainer component={Paper} sx={{ boxShadow: 'none', border: 'none' }}>
                <Table aria-label="product information">
                  <TableBody>
                    <TableRow>
                      <TableCell className='fw-semibold' component="th" scope="row">Nombre:</TableCell>
                      <TableCell>{product.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='fw-semibold' component="th" scope="row">Precio:</TableCell>
                      <TableCell>${product.price} COP</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='fw-semibold' component="th" scope="row">Descripción:</TableCell>
                      <TableCell sx={{ mt: 2, textAlign: 'justify' }}>{product.description}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='fw-semibold' component="th" scope="row">Reviews:</TableCell>
                      <TableCell>
                        <Stack spacing={1}>
                          <Rating name="read-only size-small" readOnly size='small' value={product.review} />
                        </Stack>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='fw-semibold' component="th" scope="row">Origen:</TableCell>
                      {product.category === "Celulares" ? 
                        <TableCell>China</TableCell>
                      :
                      <TableCell>Korea del Norte</TableCell>
                      }                      
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export { ProductCreditSection }