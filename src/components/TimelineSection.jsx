import React from 'react';
import { Box, Container, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FallingParticles from './FallingParticles';

const timelineEvents = [
  {
    date: 'March 1, 2024',
    title: 'Call for Papers',
    description: 'Submission portal opens for research papers and abstracts',
    icon: <AssignmentIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />,
  },
  {
    date: 'May 15, 2024',
    title: 'Paper Submission Deadline',
    description: 'Last date for submitting research papers and abstracts',
    icon: <EventIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />,
  },
  {
    date: 'June 30, 2024',
    title: 'Notification of Acceptance',
    description: 'Authors will be notified about paper acceptance',
    icon: <SchoolIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />,
  },
  {
    date: 'August 15-17, 2024',
    title: 'Conference Dates',
    description: 'Three days of presentations, workshops, and networking',
    icon: <CelebrationIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />,
  },
];

const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <FallingParticles />
      <Container maxWidth="lg">
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
              mb: { xs: 4, md: 6 },
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Important Dates
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #1a237e, #0d47a1)',
              transform: 'translateY(-50%)',
              zIndex: 1,
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 2,
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 },
              px: { xs: 0, md: 2 },
            }}
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ flex: 1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {event.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ 
                      fontWeight: 600, 
                      color: '#1a237e',
                      mb: 1,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ 
                      mb: 1, 
                      fontWeight: 500,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    }}
                  >
                    {event.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      fontStyle: 'italic',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    }}
                  >
                    {event.description}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection; 