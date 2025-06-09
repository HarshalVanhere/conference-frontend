import React from 'react';
import { Box } from '@mui/material';

const FallingParticles = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {[...Array(50)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            background: 'rgba(25, 118, 210, 0.6)',
            borderRadius: '50%',
            left: Math.random() * 100 + '%',
            top: -10,
            animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
            animationDelay: Math.random() * 5 + 's',
            '@keyframes fall': {
              '0%': {
                transform: 'translateY(0) rotate(0deg)',
                opacity: 1,
              },
              '100%': {
                transform: 'translateY(100vh) rotate(360deg)',
                opacity: 0,
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default FallingParticles; 