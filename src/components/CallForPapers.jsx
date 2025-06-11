import React from 'react';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArticleIcon from '@mui/icons-material/Article';
import TimelineIcon from '@mui/icons-material/Timeline';
import TopicIcon from '@mui/icons-material/Topic';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CallForPapers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const topics = [
    'Artificial Intelligence and Machine Learning',
    'Internet of Things (IoT)',
    'Cloud Computing and Big Data',
    'Cybersecurity and Privacy',
    'Blockchain Technology',
    'Robotics and Automation',
    'Sustainable Technology',
    'Digital Transformation',
    'Smart Cities and Urban Technology',
    'Emerging Trends in Management'
  ];

  const guidelines = [
    'Papers should be original and unpublished',
    'Maximum length: 6 pages including references',
    'Format: IEEE double-column format',
    'Language: English only',
    'All submissions will be peer-reviewed',
    'Authors must follow the IEEE template'
  ];

  return (
    <Box 
      ref={ref}
      sx={{ 
        py: 8,
        background: 'linear-gradient(180deg, rgba(227, 242, 253, 0.34) 0%, #bbdefb 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
                borderRadius: '2px',
              },
            }}
          >
            Call for Papers
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6} sx={{ maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
                  <TopicIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Topics of Interest
                  </Typography>
                </Box>
                <List>
                  {topics.map((topic, index) => (
                    <ListItem key={index} sx={{ py: 0.5, justifyContent: 'center' }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary={topic} sx={{ textAlign: 'center' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
                  <ArticleIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Submission Guidelines
                  </Typography>
                </Box>
                <List>
                  {guidelines.map((guideline, index) => (
                    <ListItem key={index} sx={{ py: 0.5, justifyContent: 'center' }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary={guideline} sx={{ textAlign: 'center' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} sx={{ maxWidth: '1200px' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
                  <TimelineIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Important Dates
                  </Typography>
                </Box>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                        March 1, 2024
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Call for Papers Opens
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                        May 15, 2024
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Paper Submission Deadline
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                        June 30, 2024
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Notification of Acceptance
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                        July 15, 2024
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Camera Ready Submission
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CallForPapers;
