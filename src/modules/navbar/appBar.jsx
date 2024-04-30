import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function appBarContent({ toggleDrawer, menuLinks }) {
    return (
        <AppBar position="fixed" className='app-bar-container'>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                >
                    <Menu />
                </IconButton>
                <Button component={Link} to="/" color="inherit" className='fw-bold ms-4 fs-5 mx-4'>
                    Macro<span className='span-logo'>Pay</span>
                </Button> 
                <div className="ms-auto me-0 menu-links-container">
                    {menuLinks.map((link, index) => (
                        <Link key={index} to="/" className="menu-link text-decoration-none">
                            {link.text} {link.icon}
                        </Link>
                    ))}
                </div>
            </Toolbar>
        </AppBar>
    );
}

appBarContent.propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
    menuLinks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired
        })
    ).isRequired
}

export default appBarContent;