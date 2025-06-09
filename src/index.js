// Remove any existing ReactDOM.render(...) usage

import React from 'react';
import { createRoot } from 'react-dom/client';  // ✅ Use the new API
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';  // Ensure this matches your export (default or named)
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
