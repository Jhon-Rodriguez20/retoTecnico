import { Facebook, YouTube, Instagram, LinkedIn } from '@mui/icons-material';
import { Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {

    const EstiloIcono = {
        backgroundColor: 'white',
        color: 'blue',
        padding: '10%',
        borderRadius: '50%',
        fontSize: '250%'
    };

    return (
        <div style={{ padding: '2rem 0', marginTop: '15rem', background: 'rgb(42, 69, 224)' }}>
            <Container>
                <Grid container justifyContent="center">
                    <Grid item md={6} lg={5} xs={12} className='mt-5 mx-5'>
                        {/* <img src={logo} alt="" style={{ width: '100%', maxWidth: '300px', marginBottom: '1rem' }} /> */}
                        <Typography variant="body1" align="justify" color="white">
                            Institución de Educación Superior de carácter Tecnológico de derecho privado, de utilidad común y sin ánimo de lucro, redefinida mediante Resolución del MEN 747 del 19 de febrero de 2009, para ofertar programas Técnicos, Tecnológicos, Profesionales y Especializaciones.
                        </Typography>                                                
                    </Grid>                    
                    <Grid item md={6} lg={4} xs={12} sx={{ mt: 5 }}>
                        <Typography variant="h4" color="white" className='fw-semibold'>
                            ¡Conversemos!
                        </Typography>
                        <hr style={{ backgroundColor: 'white', border: 'none', height: '2px', margin: '0' }} />
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                            <Link href="/" rel="noopener" className="icono btn btn-floating btn-lg mx-3 mb-4">
                                <Facebook style={EstiloIcono} />
                            </Link>
                            <Link href="/" rel="noopener" className="icono btn btn-floating btn-lg mx-3 mb-4">
                                <YouTube style={EstiloIcono} />
                            </Link>
                            <Link href="/" rel="noopener" className="icono btn btn-floating btn-lg mx-3 mb-4">
                                <Instagram style={EstiloIcono} />
                            </Link>
                            <Link href="/" rel="noopener" className="icono btn btn-floating btn-lg mx-3 mb-4">
                                <LinkedIn style={EstiloIcono} />
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <hr style={{ backgroundColor: 'white', border: 'none', height: '2px', margin: '2rem 0' }} />
            <div className="text-center">
                <Typography variant="body1" color="white">
                    Desarrollado por: <span className='fw-semibold'>Jhon Alexander Rodríguez Zapata</span>
                </Typography>
                <Typography variant="body1" color="white">
                    © 2024: Todos los derechos
                </Typography>
            </div>
        </div>
    );
};

export { Footer }