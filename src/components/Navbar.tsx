import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 700,
                    }}
                >
                    KL
                </Typography>
                <Box>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/"
                        sx={{ mx: 1 }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/projects"
                        sx={{ mx: 1 }}
                    >
                        Projects
                    </Button>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/about"
                        sx={{ mx: 1 }}
                    >
                        About
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar; 