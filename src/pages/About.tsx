import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { GridItem } from '../components/GridItem';

const About = () => {
    const skills = [
        {
            category: 'Technical Skills',
            items: ['Python', 'R', 'SQL', 'Machine Learning', 'Data & Business Analysis', 'Educational Program Design'],
        },
        {
            category: 'Soft Skills',
            items: ['Critical Thinking & Problem Solving', 'Leadership & Team Management', 'Strategic Planning', 'Communication & Stakeholder Management'],
        },
        {
            category: 'Languages',
            items: ['English (Fluent)', 'Greek (Native)', 'Spanish (Intermediate)', 'Danish (Basic)'],
        },
        {
            category: 'Tools & Technologies',
            items: ['Wordpress', 'Database Management', 'Data Visualization', 'Project Management'],
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={6}>
                <GridItem item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h2" component="h1" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body1" paragraph>
                            I am a passionate Business Analytics student at DTU, combining my
                            interest in data science with business acumen. My journey in
                            analytics began with a curiosity about how data can drive business
                            decisions, and this has evolved into a deep commitment to
                            transforming complex data into actionable insights.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Currently pursuing my Master's degree, I am focused on developing
                            expertise in data analysis, machine learning, and business
                            intelligence. I believe in the power of data-driven decision making
                            and am constantly exploring new technologies and methodologies to
                            enhance my analytical capabilities.
                        </Typography>
                    </motion.div>
                </GridItem>
                <GridItem item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h4" gutterBottom>
                                Education
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <SchoolIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="MSc in Business Analytics"
                                        secondary="Technical University of Denmark (DTU) | Feb 2025 - Present"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <SchoolIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="MSc in Production and Management Engineering"
                                        secondary="Democritus University of Thrace | 2016 - 2022"
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                    </motion.div>
                </GridItem>
                <GridItem item xs={12}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
                            Skills & Expertise
                        </Typography>
                        <Grid container spacing={3}>
                            {skills.map((skillGroup, index) => (
                                <GridItem item xs={12} sm={6} md={3} key={index}>
                                    <Paper
                                        elevation={2}
                                        sx={{
                                            p: 2,
                                            height: '100%',
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                            },
                                        }}
                                    >
                                        <Typography variant="h6" gutterBottom>
                                            {skillGroup.category}
                                        </Typography>
                                        <List dense>
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <ListItem key={skillIndex}>
                                                    <ListItemIcon>
                                                        {index === 0 && <CodeIcon color="primary" />}
                                                        {index === 1 && <AnalyticsIcon color="primary" />}
                                                        {index === 2 && <BusinessIcon color="primary" />}
                                                        {index === 3 && <BusinessIcon color="primary" />}
                                                    </ListItemIcon>
                                                    <ListItemText primary={skill} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                </GridItem>
                            ))}
                        </Grid>
                    </motion.div>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default About; 