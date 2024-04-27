import { useState } from 'react';
import Container from '@mui/material/Container';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilterBox } from '../components/product/ProductFilterBox';

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
      <div className='d-md-flex justify-content-md-between flex-column flex-md-row'>
        <ProductFilterBox onFilterChange={handleFilterChange} className='mb-3 mb-md-0' />
        <ProductCard filters={filters} />
      </div>
    </Container>
  );
}

export { ProductsPage }