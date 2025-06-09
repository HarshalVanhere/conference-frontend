import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RegistrationCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        type: 'spring',
        stiffness: 100,
      }}
      style={{
        position: 'fixed',
        bottom: { xs: '1rem', sm: '2rem' },
        right: { xs: '1rem', sm: '2rem' },
        zIndex: 1000,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, sm: 3 },
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          maxWidth: { xs: '280px', sm: '320px' },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600,
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Early Bird Registration
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, fontStyle: 'italic' }}
          >
            Limited spots available at discounted rates
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              px: { xs: 3, sm: 4 },
              py: 1,
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              '&:hover': {
                background: 'linear-gradient(45deg, #0d47a1, #1a237e)',
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default RegistrationCTA; 