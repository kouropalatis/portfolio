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
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DataArrayIcon from '@mui/icons-material/DataArray';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BusinessIcon from '@mui/icons-material/Business';
import PieChartIcon from '@mui/icons-material/PieChart';

const SinglePage: React.FC = () => {
    // Skills data - Updated for Business/Data Analyst
    const analyticalSkills = [
        { name: 'Data Analysis', proficiency: 95 },
        { name: 'Statistical Analysis', proficiency: 90 },
        { name: 'Data Visualization', proficiency: 92 },
        { name: 'Business Intelligence', proficiency: 88 },
        { name: 'Financial Analysis', proficiency: 85 },
        { name: 'Market Research', proficiency: 82 },
    ];

    const technicalSkills = [
        { name: 'Excel/Google Sheets', proficiency: 95 },
        { name: 'SQL', proficiency: 90 },
        { name: 'Python', proficiency: 88 },
        { name: 'Tableau/Power BI', proficiency: 85 },
        { name: 'R', proficiency: 80 },
        { name: 'Machine Learning', proficiency: 78 },
    ];

    // Languages data
    const languages = [
        { name: 'English', level: 'Fluent' },
        { name: 'Greek', level: 'Native' },
        // Add more languages as needed
    ];

    // Projects data - Reframed for business/data analysis
    const projects = [
        {
            title: 'Energy Consumption Analytics',
            description: 'Comprehensive analysis of energy consumption patterns with actionable business insights, cost-saving recommendations, and future consumption forecasts.',
            technologies: ['Python', 'Data Analysis', 'Statistical Modeling', 'Tableau'],
            github: 'https://github.com/kouropalatis/energy-consumption-forecasting',
            icon: <ShowChartIcon fontSize="large" />
        },
        {
            title: 'Social Media Analytics Dashboard',
            description: 'Interactive business intelligence dashboard for tracking KPIs, audience engagement metrics, and ROI across multiple social media platforms.',
            technologies: ['Data Visualization', 'Business Intelligence', 'Excel', 'SQL'],
            github: 'https://github.com/kouropalatis/Social-Media-Analytics-Dashboard',
            icon: <AnalyticsIcon fontSize="large" />
        },
        {
            title: 'Time Series Analysis & Forecasting',
            description: 'Advanced statistical analysis of time-series data to identify business trends, seasonality patterns, and create reliable forecasting models.',
            technologies: ['R', 'Python', 'Statistical Analysis', 'Business Reporting'],
            github: 'https://github.com/kouropalatis/TimeSeriesForecasting',
            icon: <TimelineIcon fontSize="large" />
        },
        {
            title: 'Social Media Performance Metrics',
            description: 'End-to-end analysis of social media performance with comprehensive reporting, competitor benchmarking, and content strategy optimization.',
            technologies: ['Power BI', 'Market Analysis', 'KPI Tracking', 'Python'],
            github: 'https://github.com/kouropalatis/Social-media-predictor',
            icon: <PieChartIcon fontSize="large" />
        }
    ];

    // Additional business-relevant experience
    const businessExperience = [
        {
            title: "Market Research & Competitive Analysis",
            description: "Conducted in-depth market research and competitive analysis to identify market gaps and opportunities."
        },
        {
            title: "Data-Driven Decision Making",
            description: "Provided actionable insights from complex datasets to support strategic business decisions."
        },
        {
            title: "Financial Reporting & Analysis",
            description: "Created financial reports, dashboards, and KPI tracking systems for performance monitoring."
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
                    title="Konstantinos Kouropalatis"
                >
                    K
                </Avatar>
                <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                    Konstantinos Kouropalatis
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Business & Data Analyst
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
                    Analytical professional with expertise in transforming complex data into actionable business insights.
                    Specialized in financial analysis, business intelligence, and creating data visualizations that drive strategic decision-making.
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
                                Analytical Skills
                            </Typography>
                            {analyticalSkills.map((skill) => (
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
                </Stack>
            </Box>

            <Divider sx={{ mb: 6 }} />

            {/* Business Experience Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
                    Business Experience
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph textAlign="center" sx={{ mb: 4 }}>
                    Proven track record in delivering data-driven business solutions
                </Typography>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                    {businessExperience.map((experience, index) => (
                        <Box key={index} sx={{ width: '100%' }}>
                            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <BusinessIcon color="primary" sx={{ mr: 1.5 }} />
                                    <Typography variant="h6" fontWeight="medium">
                                        {experience.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body1">
                                    {experience.description}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
                </Stack>
            </Box>

            <Divider sx={{ mb: 6 }} />

            {/* Projects Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
                    Analytics Projects
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph textAlign="center" sx={{ mb: 4 }}>
                    Showcasing my work in business intelligence, data analysis, and reporting
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
                                            Project Repository
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
                                            Project Repository
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