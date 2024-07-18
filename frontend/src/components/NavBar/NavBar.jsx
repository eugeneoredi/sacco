import React, { useState } from 'react';
import { AppBar, Button, IconButton, Tabs, Tab, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import LoginDialog from '../LoginDialog';
import SignUpDialog from '../SignUpDialog';
import SideBar from '../SideBar';
import DashBoard from '../../Pages/DashBoard';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);
    const [value, setValue] = useState(0); // State for managing the active tab


    const handleLoginClick = () => {
        setLoginDialogOpen(true);
    };

    const handleSignUpClick = () => {
        setSignUpDialogOpen(true);
    };

    const handleClose = () => {
        setLoginDialogOpen(false);
        setSignUpDialogOpen(false);
    };
    // const location = useLocation(); // Get current location from React Router
    const navigate = useNavigate(); // Get navigate function from React Router

    // const clickNav = () => {
    //     navigate('/dashboard');
    // }

    const clickLogo = () => {
        navigate('/');
    }

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <SavingsRoundedIcon onClick={clickLogo} />
                    </IconButton>
                    {
                        isMatch ? (
                            <>
                                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                                    SACCO
                                </Typography>
                                <SideBar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
                            </>
                        ) : (
                            <>
                                <Tabs value={value} onChange={handleChange} textColor='inherit' indicatorColor='secondary'>
                                    <Tab label='About' component={Link} to='/' />
                                    <Tab label='Chama' component={Link} to='/' />
                                    <Tab label='Services' component={Link} to='/' />
                                    <Tab label='DashBoard' component={Link} to='/dashboard' />
                                </Tabs>
                                <Button color='inherit' sx={{ flexWrap: 'nowrap' }} onClick={handleLoginClick}>
                                    Login
                                </Button>
                                <Button color='inherit' onClick={handleSignUpClick} sx={{ flexWrap: 'nowrap' }}>
                                    SignUp
                                </Button>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
            <LoginDialog open={loginDialogOpen} onClose={handleClose} />
            <SignUpDialog open={signUpDialogOpen} onClose={handleClose} />
        </>
    );
}

export default NavBar;
