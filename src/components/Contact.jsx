import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Email',
      content: 'icetm2025@viswam.edu',
      link: 'mailto:icetm2025@viswam.edu',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Phone',
      content: '+91 1234567890',
      link: 'tel:+911234567890',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Address',
      content: 'Viswam Engineering College, [Address], [City], [State], [Country]',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, rgba(227, 242, 253, 0.34) 0%, #bbdefb 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
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
            Contact Us
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: 'primary.main',
                    textAlign: 'center',
                  }}
                >
                  Get in Touch
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        textDecoration: 'none',
                        color: 'inherit',
                        p: 3,
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.1)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 64,
                          height: 64,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ 
                            fontWeight: 600, 
                            color: 'primary.main',
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          color="text.secondary"
                          sx={{
                            fontSize: '1.1rem',
                          }}
                        >
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
