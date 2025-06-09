import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SpeakersSection from './components/SpeakersSection';
import AboutUs from './components/AboutUs';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#0d47a1',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: { xs: 2, sm: 3, md: 4 },
          paddingRight: { xs: 2, sm: 3, md: 4 },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative' }}>
        <ParticleBackground />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
            <HeroSection />
            <SpeakersSection />
            <AboutUs />
            <TimelineSection />
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

