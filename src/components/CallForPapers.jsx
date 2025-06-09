import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CallForPapers = () => {
  return (
    <Box sx={{ bgcolor: 'secondary.light', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Call for Papers
        </Typography>
        <Typography paragraph>
          We invite researchers and academicians to submit their papers on the latest trends and innovations in engineering, technology, and management. Please refer to the submission guidelines for more details.
        </Typography>
      </Container>
    </Box>
  );
};

export default CallForPapers;
