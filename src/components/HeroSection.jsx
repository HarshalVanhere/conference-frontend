import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          International Conference on Emerging Trends in Engineering, Technology & Management
        </Typography>
        <Typography variant="h5" paragraph>
          Join us for an interdisciplinary forum to exchange views and share expertise in the fields of engineering, technology, and management.
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="#registration">
          Register Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;

