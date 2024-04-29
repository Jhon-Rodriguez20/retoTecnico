import { useState } from 'react';
import Container from '@mui/material/Container';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilterBox } from '../components/product/ProductFilterBox';
import { Box } from '@mui/material';
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
  };

  return (
    <Container maxWidth='lg'>
      <h3 className="text-center fs-3 fw-semibold text-uppercase py-5 mt-5">Productos</h3>
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