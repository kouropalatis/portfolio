import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { GridItem } from '../components/GridItem';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const ProjectChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Business Analytics Dashboard',
            description: 'A comprehensive dashboard for analyzing business performance metrics, featuring interactive visualizations and predictive analytics.',
            image: 'https://source.unsplash.com/random/800x600?dashboard',
            technologies: ['Python', 'React', 'D3.js', 'Machine Learning'],
            github: '#',
            demo: '#',
        },
        {
            title: 'Process Optimization Analysis',
            description: 'Data-driven analysis of manufacturing processes to identify bottlenecks and optimize production efficiency.',
            image: 'https://source.unsplash.com/random/800x600?analytics',
            technologies: ['R', 'Statistical Analysis', 'Process Mining'],
            github: '#',
            demo: '#',
        },
        {
            title: 'Market Research Analytics',
            description: 'Advanced market research analysis using statistical methods and data visualization to identify market trends and opportunities.',
            image: 'https://source.unsplash.com/random/800x600?market',
            technologies: ['Python', 'Data Visualization', 'Statistical Analysis'],
            github: '#',
            demo: '#',
        },
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
                        Projects
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
                        {projects.map((project, index) => (
                            <GridItem key={index}>
                                <StyledCard>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.image}
                                        alt={project.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#1a237e', fontWeight: 600 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" paragraph sx={{ color: '#546e7a' }}>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                            {project.technologies.map((tech, techIndex) => (
                                                <ProjectChip
                                                    key={techIndex}
                                                    label={tech}
                                                    size="small"
                                                />
                                            ))}
                                        </Box>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Button
                                                startIcon={<GitHubIcon />}
                                                variant="outlined"
                                                color="primary"
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Code
                                            </Button>
                                            <Button
                                                startIcon={<LaunchIcon />}
                                                variant="contained"
                                                color="primary"
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Demo
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </StyledCard>
                            </GridItem>
                        ))}
                    </Box>
                </motion.div>
            </Box>
        </Container>
    );
};

export default Projects; 