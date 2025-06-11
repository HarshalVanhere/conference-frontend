import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const speakers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Keynote Speaker',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    expertise: 'Artificial Intelligence & Machine Learning',
  },
  {
    name: 'Prof. Michael Chen',
    title: 'Plenary Speaker',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    expertise: 'Quantum Computing',
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Invited Speaker',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    expertise: 'Data Science & Analytics',
  },
  {
    name: 'Prof. David Kim',
    title: 'Panel Speaker',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
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
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(180deg,rgba(227, 242, 253, 0.34) 0%, #bbdefb 0%)',
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
              mb: { xs: 3, md: 6 },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: '40px', md: '60px' },
                height: { xs: '3px', md: '4px' },
                background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
                borderRadius: '2px',
              },
            }}
          >
            Distinguished Speakers
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid 
            container 
            spacing={3}
            sx={{
              justifyContent: 'center',
              alignItems: 'stretch',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
            }}
          >
            {speakers.map((speaker, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index}
                sx={{
                  width: { md: '25%' },
                  minWidth: { md: '25%' },
                  flex: { md: '0 0 25%' },
                }}
              >
                <motion.div variants={cardVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 40px rgba(26, 35, 126, 0.2)',
                        '& .MuiCardMedia-root': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                  >
                    <Box sx={{ overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={speaker.image}
                        alt={speaker.name}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out',
                        }}
                      />
                    </Box>
                    <CardContent 
                      sx={{ 
                        flexGrow: 1, 
                        textAlign: 'center',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%)',
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'primary.main',
                          fontSize: '1.25rem',
                        }}
                      >
                        {speaker.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'text.secondary',
                          mb: 1,
                          fontWeight: 500,
                          fontSize: '1rem',
                        }}
                      >
                        {speaker.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: '0.875rem',
                          lineHeight: 1.5,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '30px',
                            height: '2px',
                            background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
                            borderRadius: '1px',
                          },
                        }}
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