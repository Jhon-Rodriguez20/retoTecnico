import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Accordion,
    AccordionSummary, AccordionDetails, Typography, Rating, Stack, Grid } from '@mui/material';

function ProductDetailRow({ label, value }) {

    return (
        <TableRow>
            <TableCell className='fw-semibold' component="th" scope="row">{label}</TableCell>
            <TableCell>{value}</TableCell>
        </TableRow>
    );
}

function ProductCreditSection({ product }) {
    
    const isCellPhone = product.category === 'Celulares';
    const origin = isCellPhone && "China" || "Korea del Norte";
    const screen = isCellPhone && '1280x720 píxeles' || '3840x2160 píxeles';
    const weight = isCellPhone && '2.5 gr' || '25 kg';

    const rowsTable = [
        { label: "Nombre", value: product.name },
        { label: "Precio", value: `$${product.price} COP` },
        { label: "Descripción", value: product.description },
        { label: "Categoría", value: product.category },
        { label: "Reviews", value: <Stack spacing={1}><Rating name="read-only size-small" readOnly size='small' value={product.review} /></Stack> },
        { label: "Origen", value: origin },
        { label: "Tamaño de pantalla", value: screen },
        { label: "Peso", value: weight },
    ];

    return (
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
                        <img src={product.image} alt={product.name} className='mt-5 img-fluid' />
                    </Grid>
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
};

export { ProductCreditSection }