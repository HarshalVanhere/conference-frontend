import React from 'react';
import { Box, Typography, Button, Paper, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 1.5, md: 2 },
                  color: 'primary.main',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: { xs: 1.2, md: 1.3 },
                }}
              >
                International Conference 2024
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2, md: 4 },
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                }}
              >
                Advancing Technology and Innovation
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 3, md: 4 },
                  color: 'text.secondary',
                  maxWidth: '600px',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  lineHeight: 1.6,
                }}
              >
                Join us for a transformative experience where leading experts, researchers, and industry professionals come together to share knowledge, foster innovation, and shape the future of technology.
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: { xs: 1.5, sm: 2 },
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  fullWidth={false}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  Register Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth={false}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  borderRadius: { xs: 2, md: 4 },
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: { xs: 2, md: 3 }, 
                    color: 'primary.main',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                >
                  Conference Highlights
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 } }}>
                  {[
                    'Keynote Speeches from Industry Leaders',
                    'Technical Paper Presentations',
                    'Interactive Workshops',
                    'Networking Opportunities',
                    'Poster Sessions',
                  ].map((highlight, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          mt: { xs: 0.5, sm: 0.75 },
                        }}
                      />
                      <Typography 
                        variant="body1"
                        sx={{
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          lineHeight: 1.5,
                        }}
                      >
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;

