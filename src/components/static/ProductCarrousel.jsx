import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos por defecto del carrusel
import image1 from '../../assets/img/Carrouselimg1.jpg';
import image2 from '../../assets/img/Carrouselimg2.jpg';
import { Container } from '@mui/material';

function ProductCarousel() {
  return (
    <Container maxWidth='lg'>
      <Carousel
        className='mt-5 mb-5'
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
        showIndicators={true}
        swipeable={true}
      >
        <div>
          <img src={image1} alt="Imagen 1" />
        </div>
        <div>
          <img src={image2} alt="Imagen 2" />
        </div>
      </Carousel>
    </Container>
  );
}

export { ProductCarousel }