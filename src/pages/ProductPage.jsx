import { useState } from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilterBox } from '../components/product/ProductFilterBox';
import { Box, Container, Typography } from '@mui/material';
import { ProductCarousel } from '../components/static/ProductCarrousel';

function ProductsPage() {
    const [filters, setFilters] = useState({
        category: 'Todos',
        minPrice: '',
        maxPrice: '',
        minRating: 0
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    }

    return (
        <Container maxWidth='lg'>
            <Typography variant='h4' className="text-center fw-semibold text-uppercase py-5 mt-5">Productos</Typography>
            <Box className='d-md-flex justify-content-between flex-column flex-md-row'>
                <ProductFilterBox onFilterChange={handleFilterChange} className='box-filter-products mb-3 mb-md-0' />
                <Box className='m-1 box-container' style={{ maxHeight: '500px' }}>
                    <ProductCard filters={filters} />
                </Box>
            </Box>
            <ProductCarousel/>
        </Container>
    );
}

export { ProductsPage }