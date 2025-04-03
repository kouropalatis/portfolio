import React from 'react';
import { Container, Typography, Box, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { GridItem } from '../components/GridItem';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const About: React.FC = () => {
    const skills = [
        'Business Analytics',
        'Data Analysis',
        'Process Optimization',
        'Project Management',
        'Statistical Analysis',
        'Data Visualization',
        'Business Intelligence',
        'Decision Making',
        'Problem Solving',
        'Team Leadership',
    ];

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            color: '#1a237e',
                            mb: 6,
                        }}
                    >
                        About Me
                    </Typography>

                    <GridItem xs={12} sx={{ mb: 6 }}>
                        <StyledPaper elevation={3}>
                            <Typography variant="h5" gutterBottom sx={{ color: '#455a64', mb: 3 }}>
                                Education
                            </Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ color: '#1a237e', fontWeight: 600 }}>
                                    MSc in Business Analytics
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#546e7a' }}>
                                    Technical University of Denmark (DTU)
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#78909c' }}>
                                    2025 - Present
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ color: '#1a237e', fontWeight: 600 }}>
                                    MSc in Production and Management Engineering
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#546e7a' }}>
                                    Technical University of Xanthi
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#78909c' }}>
                                    2016 - 2022
                                </Typography>
                            </Box>
                        </StyledPaper>
                    </GridItem>

                    <GridItem xs={12}>
                        <StyledPaper elevation={3}>
                            <Typography variant="h5" gutterBottom sx={{ color: '#455a64', mb: 3 }}>
                                Skills & Expertise
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {skills.map((skill, index) => (
                                    <SkillChip
                                        key={index}
                                        label={skill}
                                        size="medium"
                                    />
                                ))}
                            </Box>
                        </StyledPaper>
                    </GridItem>
                </motion.div>
            </Box>
        </Container>
    );
};

export default About; 