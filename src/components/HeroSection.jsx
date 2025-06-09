import React from 'react';
import { Box, Typography, Button, Paper, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, sm: 6, md: 8 },
        backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  component={motion.h1}
                  variants={itemVariants}
                  sx={{
                    fontWeight: 700,
                    mb: { xs: 1.5, md: 2 },
                    color: 'white',
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                    lineHeight: { xs: 1.2, md: 1.3 },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  International Conference 2024
                </Typography>
                <Typography
                  variant="h4"
                  component={motion.h4}
                  variants={itemVariants}
                  sx={{
                    mb: { xs: 2, md: 4 },
                    color: 'white',
                    fontWeight: 500,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  Advancing Technology and Innovation
                </Typography>
                <Typography
                  variant="body1"
                  component={motion.p}
                  variants={itemVariants}
                  sx={{
                    mb: { xs: 3, md: 4 },
                    color: 'white',
                    maxWidth: '800px',
                    mx: 'auto',
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    lineHeight: 1.6,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  Join us for a transformative experience where leading experts, researchers, and industry professionals come together to share knowledge, foster innovation, and shape the future of technology.
                </Typography>
                <Box 
                  component={motion.div}
                  variants={itemVariants}
                  sx={{ 
                    display: 'flex', 
                    gap: { xs: 1.5, sm: 2 },
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth={false}
                    sx={{
                      px: { xs: 4, sm: 5 },
                      py: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      whiteSpace: 'nowrap',
                      backgroundColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Register Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth={false}
                    sx={{
                      px: { xs: 4, sm: 5 },
                      py: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      whiteSpace: 'nowrap',
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={10}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: { xs: 2, md: 4 },
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component={motion.h5}
                    variants={itemVariants}
                    sx={{ 
                      mb: { xs: 3, md: 4 }, 
                      color: 'primary.main',
                      fontSize: { xs: '1.5rem', sm: '1.75rem' },
                      fontWeight: 600,
                    }}
                  >
                    Conference Highlights
                  </Typography>
                  <Box 
                    component={motion.div}
                    variants={containerVariants}
                    sx={{ 
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0,
                    }}
                  >
                    {[
                      'Keynote Speeches from Industry Leaders',
                      'Technical Paper Presentations',
                      'Interactive Workshops',
                      'Networking Opportunities',
                      'Poster Sessions',
                    ].map((highlight, index) => (
                      <React.Fragment key={index}>
                        <Box
                          component={motion.div}
                          variants={highlightVariants}
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            p: { xs: 2, md: 3 },
                            flex: 1,
                            minWidth: { xs: '100%', md: 'auto' },
                            borderRight: {
                              xs: 'none',
                              md: index < 4 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
                            },
                            borderBottom: {
                              xs: index < 4 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
                              md: 'none',
                            },
                          }}
                        >
                          <Box
                            component={motion.div}
                            variants={highlightVariants}
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: '50%',
                              backgroundColor: 'primary.main',
                            }}
                          />
                          <Typography 
                            variant="body1"
                            component={motion.p}
                            variants={highlightVariants}
                            sx={{
                              fontSize: { xs: '1rem', sm: '1.125rem' },
                              lineHeight: 1.5,
                              textAlign: 'center',
                              fontWeight: 500,
                            }}
                          >
                            {highlight}
                          </Typography>
                        </Box>
                      </React.Fragment>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;

