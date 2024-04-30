import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import Carrousel from '../carrousel/Carrousel';
import productsData from '../../data/productsData';

function ProductRelated({ category }) {
    const filteredProducts = productsData.filter(product => product.category === category);
    const images = filteredProducts.map(product => product.image);

    return (
        <Container maxWidth='sm'>
            <Carrousel images={images} imageStyle={{ width: '55%', height: 'auto' }} />
        </Container>
    );
}

ProductRelated.propTypes = {
    category: PropTypes.string.isRequired
};

export default ProductRelated;