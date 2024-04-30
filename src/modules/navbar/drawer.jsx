import React from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function drawerContent({ open, toggleDrawer, menuItems }) {
    return (
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
    );
}

drawerContent.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
};

export default drawerContent;