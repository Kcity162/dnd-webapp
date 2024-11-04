// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8b0000', // Dark red, D&D-like color for primary components
    },
    secondary: {
      main: '#ffa500', // Orange for secondary accents
    },
    background: {
      default: '#f5f5f5', // Light grey background
      paper: '#fafafa', // Slightly lighter for paper surfaces
    },
  },
  typography: {
    fontFamily: "'MedievalSharp', cursive", // Set a fantasy-themed font if available
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
