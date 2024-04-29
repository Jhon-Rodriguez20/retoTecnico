import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, AppBar, Toolbar, IconButton, List, Divider, ListItem,
    ListItemButton, ListItemText, Typography, Button } from '@mui/material';

function Navigation() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    const menuItems = [
        { text: 'Vendify' },
        { text: 'Productos' },
        { text: 'Contacto' },
        { text: 'Políticas de privacidad' },
        { text: 'Usuario Logueado', loggedIn: true }
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='ms-4 fw-bold'>
                        Vendify
                    </Typography>
                    <Button color="inherit">Iniciar sesión</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 'auto' }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem disablePadding>
                                    <ListItemButton>
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
    )
}

export { Navigation }