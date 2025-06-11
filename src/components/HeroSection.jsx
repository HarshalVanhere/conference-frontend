import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FallingParticles from './FallingParticles';

const HeroSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="home"
      ref={ref}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(26, 35, 126, 0.3), rgba(13, 71, 161, 0.3))',
          zIndex: 1,
        },
      }}
    >
      <FallingParticles />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              align="center"
              sx={{
                mb: 3,
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                background: 'linear-gradient(45deg, #fff, #e3f2fd)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.02em',
              }}
            >
              International Conference on Sanjivani
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              sx={{
                mb: 4,
                color: 'white',
                fontWeight: 500,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                letterSpacing: '0.05em',
              }}
            >
              Advancing Innovation Through Collaboration
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
                mb: 6,
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
                  boxShadow: '0 4px 20px rgba(26, 35, 126, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #0d47a1, #1a237e)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 25px rgba(26, 35, 126, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Register Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  color: 'white',
                  borderColor: 'white',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 2, md: 4 },
                flexDirection: { xs: 'column', md: 'row' },
                mt: 4,
                p: 3,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  borderRight: { md: '1px solid rgba(255,255,255,0.3)' },
                  pr: { md: 4 },
                  mb: { xs: 2, md: 0 },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&::before': {
                    content: '""',
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4caf50',
                    boxShadow: '0 0 10px rgba(76, 175, 80, 0.5)',
                  },
                }}
              >
                June 15-17, 2024
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  borderRight: { md: '1px solid rgba(255,255,255,0.3)' },
                  pr: { md: 4 },
                  mb: { xs: 2, md: 0 },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&::before': {
                    content: '""',
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#2196f3',
                    boxShadow: '0 0 10px rgba(33, 150, 243, 0.5)',
                  },
                }}
              >
                New York City
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&::before': {
                    content: '""',
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#ff9800',
                    boxShadow: '0 0 10px rgba(255, 152, 0, 0.5)',
                  },
                }}
              >
                500+ Attendees
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;

