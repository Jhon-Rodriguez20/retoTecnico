import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos por defecto del carrusel
import image1 from '../../assets/img/Carrouselimg1.jpg';
import image2 from '../../assets/img/Carrouselimg2.jpg';
import { Box } from '@mui/material';

function ProductCarousel() {
  return (
    <Carousel
      className='mt-5'
      autoPlay={true} // Desplazamiento automático
      interval={2000} // Intervalo de tiempo entre cada desplazamiento en milisegundos (opcional)
      infiniteLoop={true} // Desplazamiento infinito
      showArrows={true} // Mostrar botones de anterior y siguiente
      showThumbs={false} // Ocultar miniaturas de las imágenes
      showStatus={false} // Ocultar estado (número de la diapositiva actual y total)
      dynamicHeight={false} // Altura dinámica para ajustarse al contenido (opcional)
      showIndicators={false} // Ocultar indicadores de las diapositivas
      swipeable={true} // Permitir deslizar con el dedo en dispositivos táctiles
    >
      <Box>
        <img src={image1} alt="Imagen 1" />
      </Box>
      <Box>
        <img src={image2} alt="Imagen 2" />
      </Box>
    </Carousel>
  );
}

export { ProductCarousel };