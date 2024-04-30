import { Typography } from '@mui/material';

const copyrightSection = () => {
    return (
        <>
            <Typography variant='h6' className='logo fw-semibold text-white mb-2 ps-3 px-3 rounded-3 ms-3 mx-3'>
                Macro<span className='span-logo'>Pay</span>
            </Typography>
            
            <Typography variant="p" className='mt-1 mx-2'>
                Todos los derechos reservados © 2024
            </Typography>
        </>
    );
}

export default copyrightSection;