import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GridItem } from '../components/GridItem';

const Home = () => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    minHeight: '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py: 8,
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    <GridItem item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 700,
                                }}
                            >
                                Hi, I'm Konstantinos Lykostratis
                            </Typography>
                            <Typography
                                variant="h2"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    color: 'text.secondary',
                                    mb: 4,
                                }}
                            >
                                Business and Data Analytics Engineer
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{ fontSize: '1.1rem', mb: 4 }}
                            >
                                Production and Management Engineer pursuing a MSc in Business Analytics at
                                the Technical University of Denmark (DTU). I combine technical expertise with
                                business acumen to deliver data-driven solutions. With proven success in
                                educational program and process optimization, I bring a unique blend of
                                technical foundation, management experience, and analytics expertise.
                            </Typography>
                            <Box sx={{ mt: 4 }}>
                                <Button
                                    component={RouterLink}
                                    to="/projects"
                                    variant="contained"
                                    size="large"
                                    sx={{ mr: 2 }}
                                >
                                    View My Work
                                </Button>
                                <Button
                                    component={RouterLink}
                                    to="/contact"
                                    variant="outlined"
                                    size="large"
                                >
                                    Contact Me
                                </Button>
                            </Box>
                        </motion.div>
                    </GridItem>
                    <GridItem item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '400px',
                                    backgroundColor: 'grey.200',
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h6" color="text.secondary">
                                    Add your profile image here
                                </Typography>
                            </Box>
                        </motion.div>
                    </GridItem>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home; 