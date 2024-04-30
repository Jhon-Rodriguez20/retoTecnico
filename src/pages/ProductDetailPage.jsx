import { useParams } from 'react-router-dom';
import { Container, Typography } from "@mui/material";
import productsData from "../data/productsData";
import { ProductCreditSection } from "../components/product/ProductCreditSection";
import ProductRelated from "../components/product/ProductRelated";

function ProductDetailPage() {
    const { id } = useParams();
    const product = productsData.find(product => product.id === Number(id));

    return (
        <Container>
            <Typography variant='h6' className='text-center fw-semibold mt-5 py-5 text-uppercase'>Información detallada del producto</Typography>
            <ProductCreditSection product={product} />
            <Typography variant='h6' className='text-center fw-semibold mt-5 text-uppercase mb-5'>Productos Relacionados</Typography>
            <ProductRelated category={product.category}/>
        </Container>
    );
}

export { ProductDetailPage };