import { Box, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import typographyConfig from '../../modules/product/productDetail/typographyProduct';
import ButtonWantIt from '../../modules/product/productDetail/button';
import RatingReviews from '../../modules/product/productDetail/ratingReviews';
import ImageProduct from '../../modules/product/productDetail/imageProduct';

function ProductDetail({ product }) {
    ProductDetail.propTypes = { product: PropTypes.shape(productPropTypes).isRequired }

    return (
        <Box className='product-detail-box p-3'>
            <Grid container spacing={2}>
                <ImageProduct product={product}/>
                <Grid item xs={12} md={8} container direction="column">
                    {typographyConfig.map((config) => (
                        <Typography {...config} key={config.key}>
                            {config.content ? config.content : product[config.key]}
                        </Typography>
                    ))}
                    <RatingReviews product={product}/>
                    <ButtonWantIt product={product} />
                </Grid>
            </Grid>
        </Box>
    );
}

const productPropTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    review: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export { ProductDetail }