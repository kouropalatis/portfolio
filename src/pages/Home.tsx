import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, Chip, IconButton, LinearProgress, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';
import { styled } from '@mui/material/styles';
import { GridItem } from '../components/GridItem';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    },
}));

const SkillCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: '#f8f9fa',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    '&:hover': {
        backgroundColor: '#e3f2fd',
        transform: 'translateY(-3px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
}));

const LanguageProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e3f2fd',
    '& .MuiLinearProgress-bar': {
        backgroundColor: '#1a237e',
        borderRadius: 5,
    },
}));

const SectionTitle = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(6),
    position: 'relative',
    '& h2': {
        fontWeight: 700,
        color: '#1a237e',
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: -16,
        left: 0,
        width: 60,
        height: 4,
        backgroundColor: '#1a237e',
        borderRadius: 2,
    },
}));

const Home: React.FC = () => {
    const languages = [
        { name: 'English', level: 100 },
        { name: 'Greek', level: 100 },
        { name: 'Spanish', level: 50 },
        { name: 'Danish', level: 20 },
    ];

    const skills = [
        {
            category: 'Analytics',
            items: ['Predictive Analytics', 'Time Series Analysis', 'Social Data Analysis', 'Statistical Modeling']
        },
        {
            category: 'Technical',
            items: ['Python', 'R', 'SQL', 'Machine Learning']
        },
        {
            category: 'Business',
            items: ['Business Intelligence', 'Data Visualization', 'Process Optimization', 'Project Management']
        }
    ];

    const projects = [
        {
            title: 'Time Series Forecasting Model',
            description: 'Advanced time series analysis and forecasting model for business metrics, incorporating seasonal patterns and trend analysis. Features energy consumption prediction with comprehensive data visualization and model evaluation.',
            image: 'https://source.unsplash.com/random/800x600?analytics',
            technologies: ['Python', 'Prophet', 'Pandas', 'Plotly', 'Statsmodels'],
            github: 'https://github.com/kouropalatis/Time-Series-Forecasting-Model',
            demo: 'https://github.com/kouropalatis/Time-Series-Forecasting-Model#example-use-case-energy-consumption-forecasting',
        },
        {
            title: 'Social Media Analytics Dashboard',
            description: 'Interactive dashboard for analyzing social media trends and engagement patterns, featuring predictive analytics for content performance.',
            image: 'https://source.unsplash.com/random/800x600?social',
            technologies: ['Python', 'Data Visualization', 'Social Analysis', 'Predictive Modeling'],
            github: '#',
            demo: '#',
        },
        {
            title: 'Business Performance Predictor',
            description: 'Machine learning model for predicting business performance metrics, using historical data and external factors.',
            image: 'https://source.unsplash.com/random/800x600?business',
            technologies: ['Python', 'Machine Learning', 'Statistical Analysis', 'Data Mining'],
            github: '#',
            demo: '#',
        },
    ];

    return (
        <Container maxWidth="lg">
            {/* Hero Section */}
            <Box
                sx={{
                    minHeight: '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py: 8,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            fontWeight: 700,
                            color: '#1a237e',
                            mb: 2,
                        }}
                    >
                        Konstantinos Lykostratis
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                            fontWeight: 500,
                            color: '#455a64',
                            mb: 3,
                        }}
                    >
                        Business Analyst Specializing in Predictive Analytics
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            color: '#546e7a',
                            mb: 3,
                            maxWidth: '800px',
                            lineHeight: 1.6,
                            '& p': {
                                mb: 2
                            }
                        }}
                    >
                        <p>
                            I'm a data-driven problem solver with a MSc Production and Management Engineering, currently pursuing my MSc in Business Analytics at the Technical University of Denmark (DTU), specializing in Predictive Analytics.
                        </p>
                        <p>
                            With over five years of professional experience leading educational programs and managing operations in the hospitality sector, I bring a unique blend of strategic thinking, technical expertise, and real-world business acumen.
                        </p>
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                        <IconButton
                            href="https://github.com/kouropalatis"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            size="large"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/konstantinos-lykostratis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            size="large"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            href="mailto:lykostratisk@gmail.com"
                            color="primary"
                            size="large"
                        >
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </motion.div>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* About Section */}
            <Box sx={{ py: 6 }}>
                <SectionTitle>
                    <Typography variant="h2" gutterBottom>
                        About Me
                    </Typography>
                </SectionTitle>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#546e7a',
                        maxWidth: '800px',
                        lineHeight: 1.8,
                        '& p': {
                            mb: 2
                        }
                    }}
                >
                    <p>
                        My journey in data analytics began during my first Master's in Production and Management Engineering, where I discovered my passion for using data to solve complex business problems. This led me to pursue further specialization in Business Analytics at DTU, where I'm currently focusing on advanced topics in Time Series Analysis and Social Data Analysis.
                    </p>
                    <p>
                        My professional background in the hospitality sector has given me valuable insights into real-world business operations and the importance of data-driven decision making. I've successfully led teams, managed operations, and implemented process improvements that have directly impacted business performance.
                    </p>
                    <p>
                        I'm particularly interested in predictive analytics and its applications in business forecasting, risk assessment, and performance optimization. My technical toolkit includes Python, R, and SQL, which I use to build sophisticated analytical models and create insightful visualizations.
                    </p>
                </Typography>
            </Box>

            {/* Skills Section */}
            <Box sx={{ py: 8 }}>
                <SectionTitle>
                    <Typography variant="h2" gutterBottom>
                        Expertise
                    </Typography>
                </SectionTitle>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
                    {skills.map((category, index) => (
                        <SkillCard key={index}>
                            <Typography
                                variant="h5"
                                component="h3"
                                gutterBottom
                                sx={{
                                    color: '#1a237e',
                                    fontWeight: 600,
                                    mb: 3,
                                }}
                            >
                                {category.category}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {category.items.map((skill, skillIndex) => (
                                    <Chip
                                        key={skillIndex}
                                        label={skill}
                                        size="medium"
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            color: '#1a237e',
                                            border: '1px solid #1a237e',
                                            '&:hover': {
                                                backgroundColor: '#1a237e',
                                                color: '#ffffff',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </SkillCard>
                    ))}
                </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Projects Section */}
            <Box sx={{ py: 8 }}>
                <SectionTitle>
                    <Typography variant="h2" gutterBottom>
                        Featured Projects
                    </Typography>
                </SectionTitle>
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
                                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1a237e', fontWeight: 600 }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" paragraph sx={{ color: '#546e7a' }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                        {project.technologies.map((tech, techIndex) => (
                                            <Chip
                                                key={techIndex}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    backgroundColor: '#e3f2fd',
                                                    color: '#1a237e',
                                                    '&:hover': {
                                                        backgroundColor: '#1a237e',
                                                        color: '#ffffff',
                                                    },
                                                }}
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
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Languages Section */}
            <Box sx={{ py: 6, mb: 6 }}>
                <SectionTitle>
                    <Typography variant="h2" gutterBottom>
                        Languages
                    </Typography>
                </SectionTitle>
                <Box
                    sx={{
                        maxWidth: '600px',
                        backgroundColor: '#f8f9fa',
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                        gap: 3,
                    }}
                >
                    {languages.map((language, index) => (
                        <Box key={index}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="h6" sx={{
                                    color: '#455a64',
                                    fontWeight: 500,
                                    fontSize: '1rem'
                                }}>
                                    {language.name}
                                </Typography>
                            </Box>
                            <LanguageProgress
                                variant="determinate"
                                value={language.level}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default Home; 