import React, { useState } from 'react';
import { Menu, Home, CreditCard, Store, TrackChanges, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Box, Drawer, AppBar, Toolbar, IconButton, List, Divider, ListItem,
    ListItemButton, ListItemText, Button } from '@mui/material';

function Navigation() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    const menuItems = [
        { text: 'Home', icon: <Home className='navbar-icon' />, link: '/' },
        { text: 'Tus préstamos', icon: <CreditCard className='navbar-icon' />, link: '/' },
        { text: 'Tiendas', icon: <Store className='navbar-icon' />, link: '/' },
        { text: 'Tracking', icon: <TrackChanges className='navbar-icon' />, link: '/' },
        { text: 'Usuario', icon: <AccountCircle className='navbar-icon' />, link: '/', loggedIn: true }
    ];

    const menuLinks = [
        { text: 'Crea una cuenta' },
        { text: 'Iniciar sesión'}
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
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
                    <div className="ms-auto me-4 menu-links-container">
                        {menuLinks.map((link, index) => (
                            <Link key={index} to="/" className="menu-link text-decoration-none">
                                {link.text}
                            </Link>
                        ))}
                    </div>                   
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ minWidth: 250, maxWidth: 320 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem disablePadding>
                                    <ListItemButton component={Link} to={item.link}>
                                        {item.icon}
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                                {index < menuItems.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export { Navigation }