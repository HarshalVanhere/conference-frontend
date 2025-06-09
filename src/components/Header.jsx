import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Call for Papers', href: '#call-for-papers' },
    { text: 'Registration', href: '#registration' },
    { text: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      sx={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'rgba(255, 255, 255, 0.98)',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700,
            color: 'primary.main',
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
          }}
        >
          Conference 2024
        </Typography>
        <IconButton
          color="primary"
          onClick={handleDrawerToggle}
          sx={{ ml: 2 }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2, py: 1 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(26, 35, 126, 0.04)',
                  borderRadius: '8px',
                },
              }}
            >
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: 'primary.main',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                }}
              />
            </ListItem>
            <Divider sx={{ opacity: 0.1 }} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            sx={{ 
              px: { xs: 1, sm: 2 },
              minHeight: { xs: 64, sm: 70 },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: 'primary.main',
                fontWeight: 700,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
              }}
            >
              Conference 2024
            </Typography>

            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  ml: 2,
                  p: { xs: 1, sm: 1.5 },
                }}
              >
                <MenuIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
              </IconButton>
            ) : (
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: { xs: 1, sm: 2 },
                  alignItems: 'center',
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    href={item.href}
                    color="primary"
                    sx={{
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      px: { xs: 1, sm: 2 },
                      py: { xs: 0.5, sm: 1 },
                      '&:hover': {
                        backgroundColor: 'rgba(26, 35, 126, 0.04)',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '100%', sm: 320 },
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </motion.div>
  );
};

export default Header;
