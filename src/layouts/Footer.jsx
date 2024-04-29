import { Facebook, YouTube, Instagram, LinkedIn } from '@mui/icons-material';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {

    const EstiloIcono = {
        backgroundColor: 'white',
        color: 'blue',
        padding: '10%',
        borderRadius: '50%',
        fontSize: '200%'
    }

    const socialIcons = [
        { icon: <Facebook style={EstiloIcono} />, link: '/' },
        { icon: <YouTube style={EstiloIcono} />, link: '/' },
        { icon: <Instagram style={EstiloIcono} />, link: '/' },
        { icon: <LinkedIn style={EstiloIcono} />, link: '/' }
    ]

    return (
        <div className='footer mt-5'>
            <Container>
                <Grid container justifyContent="center">
                    <Grid item md={6} lg={5} xs={12} className='mt-5 mx-5'>
                        <Typography variant="body1" align="justify" color="white">
                            Institución de Educación Superior de carácter Tecnológico de derecho privado, de utilidad común y sin ánimo de lucro, redefinida mediante Resolución del MEN 747 del 19 de febrero de 2009, para ofertar programas Técnicos, Tecnológicos, Profesionales y Especializaciones.
                        </Typography>                                                
                    </Grid>                    
                    <Grid item md={6} lg={5} xs={12}>
                        <Typography variant="h4" color="white" className='mt-5 fw-semibold text-center'>
                            ¡Conversemos!
                        </Typography>
                        <hr/>                        
                        <Typography className='d-flex justify-content-evenly'>
                            {socialIcons.map((socialIcon, index) => (
                                <Link key={index} href={socialIcon.link} rel="noopener" className="icono btn btn-floating btn-lg mb-4">
                                    {socialIcon.icon}
                                </Link>
                            ))}
                        </Typography>
                    </Grid>
                </Grid>
                <hr/>
                <Box className="text-center">
                    <Typography variant="body1" color="white">
                        Desarrollado por: <span className='fw-semibold'>Jhon Alexander Rodríguez Zapata</span>
                    </Typography>
                    <Typography variant="body1" color="white">
                        © 2024: Todos los derechos
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export { Footer }