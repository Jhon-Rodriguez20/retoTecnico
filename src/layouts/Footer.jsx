import { Container, Grid } from '@mui/material';
import OfferSection from '../modules/footer/offerSection';
import IconFaceSection from '../modules/footer/iconFaceSection';
import SocialMediaIcon from '../modules/footer/socialMediaIcons';
import CopyrightSection from '../modules/footer/copyrightSection';
import PrivatePolicyLinks from '../modules/footer/privatePolicyLinks';

function Footer() {
    return (
        <div className='footer mt-5 py-2'>
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    <OfferSection />
                    <IconFaceSection />
                    <SocialMediaIcon />
                </Grid>
                <hr />                
                <Grid container spacing={1} justifyContent="center" className='mt-4'>
                    <CopyrightSection />
                    <PrivatePolicyLinks />
                </Grid>
            </Container>
        </div>
    );
}

export { Footer }