import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Registration = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Registration
        </Typography>
        <Typography paragraph>
          Registration for ICETM-2025 is now open. Please click the button below to register and secure your spot at the conference.
        </Typography>
        <Button variant="contained" color="primary" size="large" href="https://forms.gle/RR5Px8VNR547AsNj9">
          Register Now
        </Button>
      </Container>
    </Box>
  );
};

export default Registration;
