import { Typography, Grid, Link } from '@mui/material';
import styleIcon from './styleIcon';
import { Facebook, WhatsApp, Instagram, LinkedIn } from '@mui/icons-material';

const socialMediaIcon = ()=> {

    const socialMediaIcons = [
        { icon: <Facebook style={styleIcon} />, link: '/' },
        { icon: <WhatsApp style={styleIcon} />, link: '/' },
        { icon: <Instagram style={styleIcon} />, link: '/' },
        { icon: <LinkedIn style={styleIcon} />, link: '/' }
    ]

    return (
        <>
            <Grid item xs={12} md={4}>
                <Typography variant="h4" className='mt-5 fw-semibold text-center'>
                    ¡Conversemos!
                </Typography>
                <hr/>                        
                <Typography className='d-flex justify-content-center'>
                    {socialMediaIcons.map((socialIcon, index) => (
                        <Link key={index} href={socialIcon.link} rel="noopener" className="icons-footer mb-4 mx-2">
                            {socialIcon.icon}
                        </Link>
                    ))}
                </Typography>
            </Grid>
        </>
    )
}

export default socialMediaIcon;