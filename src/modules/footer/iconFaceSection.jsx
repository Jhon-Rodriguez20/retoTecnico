import faceIcon from '../../assets/img/iconoFooter.jpg';
import { Grid } from '@mui/material';

const iconFaceSection = () => {
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <div className='d-flex justify-content-center mt-5'>
                    <img src={faceIcon} alt={faceIcon} className='img-fluid'/>
                </div>
            </Grid>
        </>
    );
}

export default iconFaceSection;