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
    Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const SinglePage: React.FC = () => {
    // Skills data - Updated for Business/Data Analyst
    const analyticalSkills = [
        { name: 'Data Analysis' },
        { name: 'Statistical Analysis' },
        { name: 'Data Visualization' },
        { name: 'Business Intelligence' },
        { name: 'Financial Analysis' },
        { name: 'Market Research' },
    ];

    const technicalSkills = [
        { name: 'Excel/Google Sheets' },
        { name: 'SQL' },
        { name: 'Python' },
        { name: 'Tableau/Power BI' },
        { name: 'R' },
        { name: 'Machine Learning' },
    ];

    // Languages data
    const languages = [
        { name: 'English', level: 'Fluent' },
        { name: 'Greek', level: 'Native' },
        { name: 'Spanish', level: 'Intermediate' },
        { name: 'Danish', level: 'Beginner' },
    ];

    // Education data
    const education = [
        {
            degree: 'MSc in Business Analytics',
            institution: 'Technical University of Denmark (DTU)',
            period: 'Feb 2025 - Present'
        },
        {
            degree: 'MSc in Production and Management Engineering',
            institution: 'Democritus University of Thrace',
            period: '2016 - 2022'
        }
    ];

    // Work Experience
    const workExperience = [
        {
            title: 'Vocational Education Manager',
            company: 'Vocational Education Center',
            location: 'Veria, Greece',
            period: 'Jun 2020 – Jan 2025',
            responsibilities: [
                'Designed and implemented data-informed vocational training programs aligned with EU labor market demands, supporting strategic workforce development.',
                'Led digital transformation of curriculum by integrating data analytics tools, learning management systems (LMS), and modern educational technologies.',
                'Developed KPI-based program evaluation models to monitor training effectiveness and optimize learner outcomes.',
                'Managed cross-functional teams to deliver customized upskilling initiatives for adult learners based on demographic and market data insights.',
                'Oversaw social media strategy using data analytics to measure engagement and improve campaign effectiveness.'
            ]
        },
        {
            title: 'Reservation Manager',
            company: 'Olganos VI, Luxury Rooms & Suites',
            location: 'Veria, Greece',
            period: 'Jul 2018 – Jan 2019',
            responsibilities: [
                'Analyzed customer and booking data to optimize dynamic pricing models',
                'Monitored a data-driven customer feedback dashboard, achieving a 95% satisfaction rate.',
                'Automated reporting processes using Excel and SQL',
                'Leveraged customer behavior analytics to increase repeat bookings through personalized offers and communication.'
            ]
        }
    ];

    // Projects data - Reframed for business/data analysis
    const projects = [
        {
            title: 'Course Project: Social Data Analysis and Visualization',
            description: 'An interactive, magazine-style data story exploring trends in San Francisco crime data from 2014 to 2024. The project involved collecting, cleaning, and analyzing the data to uncover patterns and communicate them through clear visualizations and storytelling. Visuals include time-series charts, maps, and a custom interactive Bokeh plot.',
            technologies: ['Data wrangling (Pandas)', 'Bokeh', 'Data storytelling', 'HTML/CSS', 'GitHub Pages'],
            github: 'https://github.com/kouropalatis/kouropalatis.github.io',
            website: 'https://kouropalatis.github.io/',
            icon: <ShowChartIcon fontSize="large" />
        },
        {
            title: 'Energy Consumption Forecasting',
            description: 'I Will upload the project here soon.',
            technologies: ['Data Visualization', 'Business Intelligence', 'Excel', 'Python'],
            icon: <AnalyticsIcon fontSize="large" />
        },
        {
            title: 'Social Media Analytics Dashboard',
            description: 'I Will upload the project here soon.',
            technologies: ['Data Visualization', 'Business Intelligence', 'Excel', 'SQL'],
            icon: <AnalyticsIcon fontSize="large" />
        },
        {
            title: 'Time Series Analysis & Forecasting',
            description: 'I Will upload the project here soon.',
            technologies: ['R', 'Python', 'Statistical Analysis', 'Business Reporting'],
            icon: <TimelineIcon fontSize="large" />
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
                    title="Konstantinos Lykostratis"
                >
                    K
                </Avatar>
                <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                    Konstantinos Lykostratis
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Business & Data Analyst
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
                    Currently on my first semester of a MSc in Business Analytics at the Technical University of Denmark (DTU).
                    I am passionate about using data to drive business decisions and improve operations and this is the reason why I chose this MSc.
                    I recently moved to Copenhagen and I am here to stay, I love the city, the culture and the people and I could see myself living here for a long time.
                    Before moving here, I earned a MSc in Production and Management Engineering and gained over 5 years of professional experience as a Vocational Education Manager and a Reservations Manager.
                    I build this website to showcase my work and to share my knowledge and to connect with other professionals in the field.
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
                        href="https://www.linkedin.com/in/konstantinos-lykostratis/"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<EmailIcon />}
                        component={Link}
                        href="mailto:lykostratisk@gmail.com"
                    >
                        Email
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
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {analyticalSkills.map((skill) => (
                                    <Chip key={skill.name} label={skill.name} />
                                ))}
                            </Box>
                        </Paper>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Paper elevation={2} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Technical Skills
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {technicalSkills.map((skill) => (
                                    <Chip key={skill.name} label={skill.name} />
                                ))}
                            </Box>
                        </Paper>
                    </Box>
                </Stack>
            </Box>

            <Divider sx={{ mb: 6 }} />

            {/* Education Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
                    Education
                </Typography>

                <Stack spacing={3} sx={{ mt: 3 }}>
                    {education.map((edu, index) => (
                        <Paper key={index} elevation={2} sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <SchoolIcon color="primary" sx={{ mt: 0.5, mr: 2 }} />
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {edu.degree}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {edu.institution}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {edu.period}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    ))}
                </Stack>
            </Box>

            <Divider sx={{ mb: 6 }} />

            {/* Work Experience Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" textAlign="center">
                    Work Experience
                </Typography>

                <Stack spacing={4} sx={{ mt: 3 }}>
                    {workExperience.map((work, index) => (
                        <Paper key={index} elevation={2} sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <WorkIcon color="primary" sx={{ mt: 0.5, mr: 2 }} />
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {work.title}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {work.company}, {work.location}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {work.period}
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                                        {work.responsibilities.map((resp, i) => (
                                            <Box component="li" key={i} sx={{ mb: 1 }}>
                                                <Typography variant="body2">
                                                    {resp}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
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
                                        {project.website && (
                                            <Button
                                                size="small"
                                                startIcon={<LanguageIcon />}
                                                component={Link}
                                                href={project.website}
                                                target="_blank"
                                            >
                                                Live Demo
                                            </Button>
                                        )}
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
                                        {project.website && (
                                            <Button
                                                size="small"
                                                startIcon={<LanguageIcon />}
                                                component={Link}
                                                href={project.website}
                                                target="_blank"
                                            >
                                                Live Demo
                                            </Button>
                                        )}
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
                    © {new Date().getFullYear()} Konstantinos Lykostratis. All rights reserved.
                </Typography>
            </Box>
        </Container>
    );
};

export default SinglePage; 