import { Drawer, ListItemButton, ListItemText, List, IconButton } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = ({ onLoginClick, onSignUpClick }) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <>
            <Drawer open={openDrawer} onClose={handleDrawerToggle}>
                <List>
                    <ListItemButton onClick={handleDrawerToggle}>
                        <ListItemText primary="About" />
                    </ListItemButton>
                    <ListItemButton onClick={handleDrawerToggle}>
                        <ListItemText primary="Chama" />
                    </ListItemButton>
                    <ListItemButton onClick={handleDrawerToggle}>
                        <ListItemText primary="Services" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { handleDrawerToggle(); onLoginClick(); }}>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { handleDrawerToggle(); onSignUpClick(); }}>
                        <ListItemText primary="SignUp" />
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>
        </>
    );
};

export default SideBar;
