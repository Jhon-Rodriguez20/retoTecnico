import { useState } from 'react';
import { Box } from '@mui/material';
import AppBarContent from '../modules/navbar/appBar';
import DrawerContent from '../modules/navbar/drawer';
import menuLinks from '../modules/navbar/appBarLinks';
import menuItems from '../modules/navbar/navbarOffcanvasLinks';

function Navigation() {
    const [open, setOpen] = useState(false);
    
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBarContent toggleDrawer={toggleDrawer} menuLinks={menuLinks} />
            <DrawerContent open={open} toggleDrawer={toggleDrawer} menuItems={menuItems} />
        </Box>
    );
}

export { Navigation }