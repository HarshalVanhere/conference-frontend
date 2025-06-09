import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ bgcolor: 'primary.light', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography paragraph>
          For any inquiries, please reach out to us at:
        </Typography>
        <Typography paragraph>
          Email: <a href="mailto:icetm2025@viswam.edu">icetm2025@viswam.edu</a>
        </Typography>
        <Typography paragraph>
          Venue: Viswam Engineering College, [Address], [City], [State], [Country]
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;
