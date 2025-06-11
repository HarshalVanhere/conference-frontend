import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
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
          About Us
        </Typography>
        <Typography paragraph>
          The International Conference on Emerging Trends in Engineering, Technology, and Management (ICETM-2025) aims to provide an interdisciplinary forum for academicians, researchers, scientists, and industrial personnel working in the areas of design and implementation of emerging technologies in the field of engineering, technology, and management to exchange their views and share their expertise.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
