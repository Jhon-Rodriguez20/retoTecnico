import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import useProductState from '../../modules/product/productCard/useProductState';
import isProductFiltered from '../../modules/product/productCard/productFilters';
import renderProducts from '../../modules/product/productCard/productRender';
import { ModalExtended } from '../modal/ModalExtended';
import { ProductDetail } from './ProductDetail';
import productsData from '../../data/productsData';

function ProductCard({ filters }) {
    const { open, selectedProduct, favorites, handleOpen, handleClose, toggleFavorite } = useProductState();

    return (
        <Grid container spacing={2}>
            {renderProducts(productsData, favorites, toggleFavorite, handleOpen, product => isProductFiltered(product, filters))}
            {selectedProduct && (
                <ModalExtended open={open} onClose={handleClose}>
                    <ProductDetail product={selectedProduct} />
                </ModalExtended>
            )}
        </Grid>
    );
}

ProductCard.propTypes = {
    filters: PropTypes.shape({
        category: PropTypes.string,
        minPrice: PropTypes.string,
        maxPrice: PropTypes.string,
        minRating: PropTypes.number
    }).isRequired
};

export { ProductCard }