import { Typography, Grid } from '@mui/material';
import Forms from '../../components/forms/Forms';
import { Send } from '@mui/icons-material';

const offerSection = () => {
    const fields = [
        { label: "Correo electrónico", style: { width: '90%', marginTop: '5%' }, icon: <Send/> },
    ]

    return (
        <>
            <Grid item xs={12} sm={6} md={4} className='mt-5'>
                <Typography variant="h6" className='mb-3'>
                    ¡Ofertas y Promociones!
                </Typography>
                <Typography variant="h5" className='fw-semibold'>
                    ¡No te pierdas nuestras ofertas!
                </Typography>
                <Forms fields={fields} />
            </Grid>
        </>
    );
}

export default offerSection;