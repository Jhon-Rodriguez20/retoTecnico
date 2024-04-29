import { useParams } from 'react-router-dom';
import { Container } from "@mui/material";
import productsData from "../data/productsData";
import { ProductCreditSection } from "../components/product/ProductCreditSection";

function ProductDetailPage() {
  const { id } = useParams();
  const product = productsData.find(product => product.id === Number(id));

  return (
    <Container>
        <h3 className='text-center mt-5 py-5 fw-semibold text-uppercase'>Información detallada del producto</h3>
        <ProductCreditSection product={product} />
    </Container>
  );
}

export { ProductDetailPage };