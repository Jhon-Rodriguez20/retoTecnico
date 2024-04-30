import { useState } from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilterBox } from '../components/product/ProductFilterBox';
import { Box, Container, Typography } from '@mui/material';
import ImagesCarousel from '../components/carrousel/Carrousel';
import image1 from '../assets/img/Carrouselimg1.jpg';
import image2 from '../assets/img/Carrouselimg2.jpg';

function ProductsPage() {
    const [filters, setFilters] = useState({
        category: 'Todos',
        minPrice: '',
        maxPrice: '',
        minRating: 0
    });

    const handleFilterChange = (newFilters) => setFilters(newFilters);
    const images = [image1, image2]

    return (
        <Container maxWidth='lg'>
            <Box className='d-md-flex justify-content-between flex-column flex-md-row py-5 mt-5'>
                <ProductFilterBox onFilterChange={handleFilterChange} className='box-filter-products mb-3 mb-md-0 ' />
                <Box className='m-1 box-container'>
                    <ProductCard filters={filters} />
                </Box>
            </Box>
            <section className='text-center'>
                <Typography variant='h6' className='fw-semibold mt-1'>Ofertas y Promociones</Typography>
                <ImagesCarousel images={images} imageStyle={{marginTop: 20}}/>
            </section>
        </Container>
    );
}

export { ProductsPage }