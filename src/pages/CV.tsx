import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Chip,
    Divider,
    Avatar,
    Link
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const CV = () => {
    // Projects data representing the folders in your Cursor directory
    const projects = [
        {
            title: "Social Media Analytics Dashboard",
            description: "A comprehensive dashboard for analyzing social media metrics, engagement, and trends across multiple platforms.",
            skills: ["React", "TypeScript", "Material-UI", "FastAPI", "Data Visualization"],
            githubUrl: "https://github.com/kouropalatis/Social-Media-Analytics-Dashboard",
            folder: "Social-Media-Analytics-Dashboard"
        },
        {
            title: "Energy Consumption Forecasting",
            description: "A machine learning application that predicts energy consumption patterns using historical data and external factors.",
            skills: ["Python", "TensorFlow", "Time Series Analysis", "Data Science"],
            githubUrl: "https://github.com/kouropalatis/energy-consumption-forecasting",
            folder: "energy-consumption-forecasting"
        },
        {
            title: "Social Media Predictor",
            description: "A tool for predicting social media engagement and virality potential for new content.",
            skills: ["Python", "Machine Learning", "NLP", "React"],
            githubUrl: "https://github.com/kouropalatis/Social-media-predictor",
            folder: "Social-media-predictor"
        },
        {
            title: "Time Series Forecasting",
            description: "Advanced time series forecasting models for various business applications.",
            skills: ["Python", "Statistics", "Machine Learning", "Data Visualization"],
            githubUrl: "https://github.com/kouropalatis/TimeSeriesForecasting",
            folder: "TimeSeriesForecasting"
        }
    ];

    // Technical skills
    const technicalSkills = [
        "Python", "R", "SQL", "JavaScript", "TypeScript", "React",
        "Data Analysis", "Machine Learning", "Time Series Analysis",
        "Data Visualization", "Statistical Modeling", "NLP"
    ];

    // Business skills
    const businessSkills = [
        "Project Management", "Business Strategy", "Process Optimization",
        "Data-Driven Decision Making", "Stakeholder Management", "Agile Methodologies"
    ];

    // Languages
    const languages = [
        { language: "English", proficiency: "Fluent" },
        { language: "Greek", proficiency: "Native" },
        { language: "Danish", proficiency: "Intermediate" },
        { language: "German", proficiency: "Basic" }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            {/* Header / Intro Section */}
            <Box mb={6}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Konstantinos Lykostratis
                        </Typography>
                        <Typography variant="h5" color="textSecondary" gutterBottom>
                            Business and Data Analytics Engineer
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Production and Management Engineer pursuing a MSc in Business Analytics at
                            the Technical University of Denmark (DTU). I combine technical expertise with
                            business acumen to deliver data-driven solutions. With proven success in
                            educational program and process optimization, I bring a unique blend of
                            technical foundation, management experience, and analytics expertise.
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                            <Button
                                variant="contained"
                                startIcon={<GitHubIcon />}
                                href="https://github.com/kouropalatis"
                                target="_blank"
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<LinkedInIcon />}
                                href="https://www.linkedin.com/in/konstantinos-lykostratis/"
                                target="_blank"
                            >
                                LinkedIn
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<EmailIcon />}
                                href="mailto:your-email@example.com"
                            >
                                Contact
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar
                            sx={{
                                width: 200,
                                height: 200,
                                boxShadow: 3
                            }}
                            alt="Konstantinos Lykostratis"
                            src="/profile-photo.jpg" // Add your photo path here
                        />
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Skills Section */}
            <Box mb={6}>
                <Typography variant="h3" component="h2" gutterBottom>
                    <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Skills
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Technical Skills</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {technicalSkills.map((skill, index) => (
                                        <Chip key={index} label={skill} color="primary" variant="outlined" />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Business Skills</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {businessSkills.map((skill, index) => (
                                        <Chip key={index} label={skill} color="secondary" variant="outlined" />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Projects Section */}
            <Box mb={6}>
                <Typography variant="h3" component="h2" gutterBottom>
                    <WorkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Projects
                </Typography>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.skills.slice(0, 4).map((skill, idx) => (
                                            <Chip key={idx} label={skill} size="small" />
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        startIcon={<GitHubIcon />}
                                        href={project.githubUrl}
                                        target="_blank"
                                    >
                                        View on GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Languages Section */}
            <Box mb={6}>
                <Typography variant="h3" component="h2" gutterBottom>
                    <LanguageIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Languages
                </Typography>

                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            {languages.map((lang, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Box textAlign="center" p={2}>
                                        <Typography variant="h6">{lang.language}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {lang.proficiency}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Box>

            {/* Education Section (Optional) */}
            <Divider sx={{ my: 6 }} />

            <Box mb={6}>
                <Typography variant="h3" component="h2" gutterBottom>
                    <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Education
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant="h5">MSc in Business Analytics</Typography>
                        <Typography variant="h6" color="textSecondary">Technical University of Denmark (DTU)</Typography>
                        <Typography variant="body2" color="textSecondary">2022 - Present</Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Specializing in data-driven decision making, machine learning applications, and business intelligence.
                        </Typography>
                    </CardContent>
                </Card>

                <Box mt={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Production and Management Engineering</Typography>
                            <Typography variant="h6" color="textSecondary">Technical University of X</Typography>
                            <Typography variant="body2" color="textSecondary">2016 - 2021</Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Focused on industrial engineering, operations research, and process optimization.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            {/* Footer */}
            <Box textAlign="center" mt={8} mb={4}>
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Konstantinos Lykostratis
                </Typography>
            </Box>
        </Container>
    );
};

export default CV; 