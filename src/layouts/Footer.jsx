import { Facebook, YouTube, Instagram, LinkedIn } from '@mui/icons-material';
import { Container, Grid, Typography, Link, Button } from '@mui/material';
import faceIcon from '../assets/img/iconoFooter.jpg';

const Footer = () => {

    const socialIcons = [
        { icon: <Facebook className='icons-footer' />, link: '/' },
        { icon: <YouTube className='icons-footer' />, link: '/' },
        { icon: <Instagram className='icons-footer' />, link: '/' },
        { icon: <LinkedIn className='icons-footer' />, link: '/' }
    ]

    return (
        <div className='footer mt-5'>
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4} className='mt-5'>
                        <Typography variant="h6" className='mb-3'>
                            ¡Ofertas y Promociones!
                        </Typography>
                        <Typography variant="h5" className='fw-semibold'>
                            ¡No te pierdas nuestras ofertas!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='d-flex justify-content-center mt-5'>
                            <img src={faceIcon} alt={faceIcon} className='img-fluid' />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" className='mt-5 fw-semibold text-center'>
                            ¡Conversemos!
                        </Typography>
                        <hr/>                        
                        <Typography className='d-flex justify-content-center'>
                            {socialIcons.map((socialIcon, index) => (
                                <Link key={index} href={socialIcon.link} rel="noopener" className="icono btn btn-floating btn-lg mb-4 mx-2">
                                    {socialIcon.icon}
                                </Link>
                            ))}
                        </Typography>
                    </Grid>
                </Grid>
                <hr/>
                <Grid>
                    <Button className='logo text-decoration-none fw-semibold text-white mb-2'>
                        Macro<span className='span-logo'>Pay</span>
                    </Button>                                                
                </Grid>
                <Typography variant="p">
                    Todos los derechos reservados © 2024
                </Typography>
            </Container>
        </div>
    );
};

export { Footer }