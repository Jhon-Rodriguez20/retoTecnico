import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

function Carrousel({ images, imageStyle }) {
    return (
        <Container maxWidth='md'>
            <Carousel
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
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Imagen ${index + 1}`} style={imageStyle} />
                    </div>
                ))}
            </Carousel>
        </Container>
    );
}

Carrousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageStyle: PropTypes.object
}

export default Carrousel;