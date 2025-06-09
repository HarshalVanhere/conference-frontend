import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const speakers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Keynote Speaker',
    image: 'https://source.unsplash.com/random/400x400?portrait=1',
    expertise: 'Artificial Intelligence & Machine Learning',
  },
  {
    name: 'Prof. Michael Chen',
    title: 'Plenary Speaker',
    image: 'https://source.unsplash.com/random/400x400?portrait=2',
    expertise: 'Quantum Computing',
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Invited Speaker',
    image: 'https://source.unsplash.com/random/400x400?portrait=3',
    expertise: 'Data Science & Analytics',
  },
  {
    name: 'Prof. David Kim',
    title: 'Panel Speaker',
    image: 'https://source.unsplash.com/random/400x400?portrait=4',
    expertise: 'Cybersecurity',
  },
];

const SpeakersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Distinguished Speakers
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid 
            container 
            spacing={{ xs: 3, md: 4 }}
            sx={{
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {speakers.map((speaker, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={cardVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={speaker.image}
                      alt={speaker.name}
                      sx={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    />
                    <CardContent 
                      sx={{ 
                        flexGrow: 1, 
                        textAlign: 'center',
                        p: { xs: 2, sm: 3 },
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 600, color: '#1a237e' }}
                      >
                        {speaker.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        sx={{ mb: 1, fontWeight: 500 }}
                      >
                        {speaker.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontStyle: 'italic' }}
                      >
                        {speaker.expertise}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SpeakersSection; 