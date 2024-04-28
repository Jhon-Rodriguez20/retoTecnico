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
    <Container>
      <h3 className="text-center fs-3 fw-semibold text-uppercase py-5 mt-5">Productos</h3>
      <Box className='d-md-flex justify-content-md-between flex-column flex-md-row' style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <ProductFilterBox onFilterChange={handleFilterChange} className='mb-3 mb-md-0' />
        <Box className='mt-3 mx-2 box-container' style={{ overflowY: 'auto', maxHeight: '460px', scrollbarWidth: 'thin' }}>
          <ProductCard filters={filters} />
        </Box>
      </Box>
      <ProductCarousel/>
      {/* <ProductMostSelled/> */}
    </Container>
  );
}

export { ProductsPage }
