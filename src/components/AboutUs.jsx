import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(180deg, #bbdefb 0%, #90caf9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
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
              mb: { xs: 4, md: 6 },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Us
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      lineHeight: 1.8,
                      color: 'text.secondary',
                    }}
                  >
                    We are dedicated to fostering innovation and collaboration in the field of technology. Our conference brings together leading experts, researchers, and industry professionals to share knowledge, discuss emerging trends, and explore future possibilities.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: 'text.secondary',
                    }}
                  >
                    Through engaging discussions, workshops, and networking opportunities, we aim to create an environment where ideas flourish and meaningful connections are formed.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    What to Expect
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      lineHeight: 1.8,
                      color: 'text.secondary',
                    }}
                  >
                    Join us for three days of intensive learning and networking. Experience keynote speeches from industry leaders, interactive workshops, panel discussions, and poster presentations showcasing cutting-edge research.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: 'text.secondary',
                    }}
                  >
                    Our conference provides a unique platform for professionals to exchange ideas, collaborate on projects, and stay updated with the latest developments in their field.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutUs; 