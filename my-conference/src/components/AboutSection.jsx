import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About ICETM-2025
        </Typography>
        <Typography paragraph>
          The International Conference on Emerging Trends in Engineering, Technology, and Management (ICETM-2025) aims to provide an interdisciplinary forum for academicians, researchers, scientists, and industrial personnel working in the areas of design and implementation of emerging technologies in the field of engineering, technology, and management to exchange their views and share their expertise.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
