import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';

function Footer() {

    return (
        <>
            <div className='d-flex justify-content-end'>
                <Button className='boton-facebook'>
                    <FacebookIcon className='facebook-icon'/>
                </Button>
                <Button>
                    <WhatsAppIcon className='whatsapp-icon'/>
                </Button>
                <Button>
                    <InstagramIcon className='instagram-icon'/>
                </Button>
                <Button>
                    <LinkedInIcon className='linkedin-icon'/>
                </Button>
            </div>
        </>
    )
}

export {Footer}