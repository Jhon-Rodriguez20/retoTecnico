import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { Table, TableBody, TableContainer, Paper, Accordion,
    AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ProductDetailRow from '../../modules/product/productCreditSection/rowTable';
import productTableData from '../../modules/product/productCreditSection/tableData';
import ImageProductTable from '../../modules/product/productCreditSection/imageTable'

function ProductCreditSection({ product }) {  
    const rowsTable = productTableData(product);

    return (
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography className='fw-semibold'>Detalle del producto</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    <ImageProductTable product={product}/>
                    <Grid item xs={12} md={8}>
                        <TableContainer component={Paper} sx={{ boxShadow: 'none', border: 'none' }}>
                            <Table aria-label="product information">
                                <TableBody>
                                    {rowsTable.map((row, index) => (
                                        <ProductDetailRow key={index} label={row.label} value={row.value} />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}

ProductCreditSection.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string,
        review: PropTypes.number,
        image: PropTypes.string
    })
}

export { ProductCreditSection }