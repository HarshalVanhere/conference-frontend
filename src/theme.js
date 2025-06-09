// src/theme.js

import { createTheme } from '@mui/material/styles';
import { blue, amber } from '@mui/material/colors'; // or use a custom shades object

export default createTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: amber[500] },
  },
});
