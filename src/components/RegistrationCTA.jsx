import React from 'react';
import { Box, Button, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RegistrationCTA = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        bottom: isMobile ? '1rem' : '2rem',
        right: isMobile ? '1rem' : '2rem',
        left: isMobile ? '1rem' : 'auto',
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
          width: '100%',
          maxWidth: { xs: '100%', sm: '320px' },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
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
            sx={{ 
              mb: 2, 
              fontStyle: 'italic',
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
          >
            Limited spots available at discounted rates
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
            endIcon={<ArrowForwardIcon />}
            fullWidth={isMobile}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              px: { xs: 3, sm: 4 },
              py: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' },
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