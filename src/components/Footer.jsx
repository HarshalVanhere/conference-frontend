import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, useTheme, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const footerLinks = {
    'Quick Links': [
      { text: 'Home', href: '#home' },
      { text: 'About', href: '#about' },
      { text: 'Call for Papers', href: '#call-for-papers' },
      { text: 'Registration', href: '#registration' },
      { text: 'Contact', href: '#contact' },
    ],
    'Important Dates': [
      { text: 'Call for Papers', href: '#', date: 'March 1, 2024' },
      { text: 'Paper Submission', href: '#', date: 'May 15, 2024' },
      { text: 'Acceptance Notification', href: '#', date: 'June 30, 2024' },
      { text: 'Conference Dates', href: '#', date: 'August 15-17, 2024' },
    ],
    'Contact Info': [
      { icon: <EmailIcon />, text: 'icetm2025@viswam.edu' },
      { icon: <PhoneIcon />, text: '+91 1234567890' },
      { icon: <LocationOnIcon />, text: 'Viswam Engineering College, [Address], [City], [State], [Country]' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 4, md: 6 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* Logo and Description */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
            Conference 2024
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.8, maxWidth: '600px', mx: 'auto' }}>
            Join us for a transformative experience where leading experts, researchers, and industry professionals come together to share knowledge and foster innovation.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
            <IconButton color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Quick Links - Horizontal */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, textAlign: 'center' }}>
            Quick Links
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, sm: 4 },
          }}>
            {footerLinks['Quick Links'].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  opacity: 0.8,
                  whiteSpace: 'nowrap',
                }}
              >
                {link.text}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Important Dates - Horizontal */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, textAlign: 'center' }}>
            Important Dates
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, sm: 4 },
          }}>
            {footerLinks['Important Dates'].map((item, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {item.text}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {item.date}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Contact Information */}
        <Box sx={{ 
          mt: 4, 
          pt: 3, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 2, sm: 4 },
        }}>
          {footerLinks['Contact Info'].map((item, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                minWidth: { xs: '100%', sm: 'auto' },
                justifyContent: { xs: 'center', sm: 'flex-start' },
              }}
            >
              {item.icon}
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Copyright */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Conference 2024. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 