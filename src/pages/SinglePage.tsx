import React from 'react';
import {
    Container,
    Typography,
    Box,
    Stack,
    Paper,
    Chip,
    Divider,
    Card,
    CardContent,
    CardActions,
    Button,
    Avatar,
    LinearProgress,
    Link,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DataArrayIcon from '@mui/icons-material/DataArray';

const SinglePage: React.FC = () => {
    // Skills data
    const technicalSkills = [
        { name: 'Python', proficiency: 95 },
        { name: 'JavaScript/TypeScript', proficiency: 90 },
        { name: 'React', proficiency: 85 },
        { name: 'Data Analysis', proficiency: 90 },
        { name: 'Machine Learning', proficiency: 85 },
        { name: 'Time Series Forecasting', proficiency: 88 },
    ];

    const softwareSkills = [
        { name: 'Git', proficiency: 90 },
        { name: 'Docker', proficiency: 80 },
        { name: 'SQL', proficiency: 85 },
        { name: 'AWS', proficiency: 75 },
        { name: 'TensorFlow/PyTorch', proficiency: 80 },
    ];

    // Languages data
    const languages = [
        { name: 'English', level: 'Fluent' },
        { name: 'Greek', level: 'Native' },
        // Add more languages as needed
    ];

    // Projects data
    const projects = [
        {
            title: 'Energy Consumption Forecasting',
            description: 'A machine learning application for forecasting energy consumption patterns using time series analysis and predictive modeling.',
            technologies: ['Python', 'TensorFlow', 'Time Series Analysis', 'Pandas'],
            github: 'https://github.com/kouropalatis/energy-consumption-forecasting',
            icon: <ShowChartIcon fontSize="large" />
        },
        {
            title: 'Social Media Analytics Dashboard',
            description: 'Interactive dashboard for tracking and visualizing social media metrics, engagement, and trends across multiple platforms.',
            technologies: ['React', 'Node.js', 'Material-UI', 'Data Visualization'],
            github: 'https://github.com/kouropalatis/Social-Media-Analytics-Dashboard',
            icon: <AnalyticsIcon fontSize="large" />
        },
        {
            title: 'Time Series Forecasting',
            description: 'Advanced time series forecasting models for predicting future trends using statistical methods and deep learning approaches.',
            technologies: ['Python', 'Statistical Modeling', 'Deep Learning', 'Forecasting'],
            github: 'https://github.com/kouropalatis/TimeSeriesForecasting',
            icon: <TimelineIcon fontSize="large" />
        },
        {
            title: 'Social Media Predictor',
            description: 'Prediction engine for social media performance metrics using machine learning algorithms to optimize content strategy.',
            technologies: ['Python', 'React', 'Machine Learning', 'API Integration'],
            github: 'https://github.com/kouropalatis/Social-media-predictor',
            icon: <DataArrayIcon fontSize="large" />
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            {/* Header Section - Name and Description */}
            <Box sx={{ mb: 8, textAlign: 'center' }}>
                <Avatar
                    sx={{
                        width: 120,
                        height: 120,
                        margin: '0 auto 16px',
                        bgcolor: 'primary.main'
                    }}
                >
                    K
                </Avatar>
                <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                    Konstantinos Kouropalatis
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Data Scientist & Full Stack Developer
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
                    Passionate about creating innovative solutions at the intersection of data science and software development.
                    Specialized in time series forecasting, predictive analytics, and building interactive web applications.
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        component={Link}
                        href="https://github.com/kouropalatis"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<LanguageIcon />}
                        component={Link}
                        href="https://linkedin.com/in/yourprofile" // Update with your actual LinkedIn
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                </Stack>
            </Box>

            <Divider sx={{ mb: 6 }} />

            {/* Skills Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
                    Skills & Expertise
                </Typography>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ mt: 2 }}>
                    <Box sx={{ width: '100%' }}>
                        <Paper elevation={2} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Technical Skills
                            </Typography>
                            {technicalSkills.map((skill) => (
                                <Box key={skill.name} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="body1">{skill.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">{skill.proficiency}%</Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.proficiency}
                                        sx={{ height: 8, borderRadius: 4 }}
                                    />
                                </Box>
                            ))}
                        </Paper>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Paper elevation={2} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Software & Tools
                            </Typography>
                            {softwareSkills.map((skill) => (
                                <Box key={skill.name} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="body1">{skill.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">{skill.proficiency}%</Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.proficiency}
                                        sx={{ height: 8, borderRadius: 4 }}
                                    />
                                </Box>
                            ))}
                        </Paper>
                    </Box>
                </Stack>
            </Box>

            <Divider sx={{ mb: 6 }} />

            {/* Projects Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
                    Projects
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph textAlign="center" sx={{ mb: 4 }}>
                    Showcasing my recent work in data science, machine learning, and web development
                </Typography>

                <Stack spacing={4}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                        {projects.slice(0, 2).map((project) => (
                            <Box key={project.title} sx={{ width: '100%' }}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center' }}>
                                        {project.icon}
                                        <Typography variant="h6" sx={{ ml: 1 }}>
                                            {project.title}
                                        </Typography>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="body1" paragraph>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {project.technologies.map((tech) => (
                                                <Chip key={tech} label={tech} size="small" />
                                            ))}
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            startIcon={<GitHubIcon />}
                                            component={Link}
                                            href={project.github}
                                            target="_blank"
                                        >
                                            GitHub Repository
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        ))}
                    </Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                        {projects.slice(2, 4).map((project) => (
                            <Box key={project.title} sx={{ width: '100%' }}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center' }}>
                                        {project.icon}
                                        <Typography variant="h6" sx={{ ml: 1 }}>
                                            {project.title}
                                        </Typography>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="body1" paragraph>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {project.technologies.map((tech) => (
                                                <Chip key={tech} label={tech} size="small" />
                                            ))}
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            startIcon={<GitHubIcon />}
                                            component={Link}
                                            href={project.github}
                                            target="_blank"
                                        >
                                            GitHub Repository
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Box>

            <Divider sx={{ mb: 6 }} />

            {/* Languages Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
                    Languages
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                    {languages.map((language) => (
                        <Paper key={language.name} elevation={2} sx={{ p: 2, textAlign: 'center', minWidth: 160 }}>
                            <Typography variant="h6">{language.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{language.level}</Typography>
                        </Paper>
                    ))}
                </Stack>
            </Box>

            {/* Footer */}
            <Box sx={{ textAlign: 'center', mt: 8, color: 'text.secondary' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Konstantinos Kouropalatis. All rights reserved.
                </Typography>
            </Box>
        </Container>
    );
};

export default SinglePage; 