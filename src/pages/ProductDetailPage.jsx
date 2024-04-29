import { useParams } from 'react-router-dom';
import { Container, Typography } from "@mui/material";
import productsData from "../data/productsData";
import { ProductCreditSection } from "../components/product/ProductCreditSection";

function ProductDetailPage() {
    const { id } = useParams();
    const product = productsData.find(product => product.id === Number(id));

    return (
        <Container>
            <Typography variant='h4' className='text-center fw-semibold mt-5 py-5 text-uppercase'>Información detallada del producto</Typography>
            <ProductCreditSection product={product} />
        </Container>
    )
}

export { ProductDetailPage }