import { Facebook, YouTube, Instagram, LinkedIn } from '@mui/icons-material';
import { Container, Grid,  Typography, Link } from '@mui/material';

const Footer = () => {

    const EstiloIcono = {
        backgroundColor: 'white',
        color: 'blue',
        padding: '10%',
        borderRadius: '50%',
        fontSize: '200%'
    };

    return (
        <div className='footer'>
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
                            <Link href="/" rel="noopener" className="icono btn btn-floating btn-lg mb-4">
                                <Facebook style={EstiloIcono} />
                            </Link>
                            <Link href="/" rel="noopener" className="icono btn btn-floating btn-lg mb-4">
                                <YouTube style={EstiloIcono} />
                            </Link>
                            <Link href="/" rel="noopener" className="icono btn btn-floating btn-lg mb-4">
                                <Instagram style={EstiloIcono} />
                            </Link>
                            <Link href="/" rel="noopener" className="icono btn btn-floating btn-lg mb-4">
                                <LinkedIn style={EstiloIcono} />
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <hr/>
                <div className="text-center">
                    <Typography variant="body1" color="white">
                        Desarrollado por: <span className='fw-semibold'>Jhon Alexander Rodríguez Zapata</span>
                    </Typography>
                    <Typography variant="body1" color="white">
                        © 2024: Todos los derechos
                    </Typography>
                </div>
            </Container>
        </div>
    );
};

export { Footer }