import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: 8,
      }}
    >
      <Grid container spacing={4} alignItems="center">
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
                mb: 2,
                color: 'primary.main',
              }}
            >
              International Conference 2024
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontWeight: 500,
              }}
            >
              Advancing Technology and Innovation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '600px',
              }}
            >
              Join us for a transformative experience where leading experts, researchers, and industry professionals come together to share knowledge, foster innovation, and shape the future of technology.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                }}
              >
                Register Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
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
                p: 4,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                Conference Highlights
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                      }}
                    />
                    <Typography variant="body1">{highlight}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;

