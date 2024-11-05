// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B0000',  // Replace with your custom primary color
      contrastText: '#FFFFFF', // Replace with text color on primary color
    },
    secondary: {
      main: '#775651',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#dec48c',
      contrastText: '#3e2e04',
    },
    background: {
      default: '#FFF8F6',
    },
    primaryContainer: {
      default: '#ffdad4',
      contrastText: '#3a0905',
    },
    secondaryContainer: {
      default: '#ffdad4',
      contrastText: '#2c1512'
    },
    tertiaryContainer: {
      default: '#fbdfa6',
      contrastText: '#251a00'
    },
    errorContainer: {
      default: '#ffdad6',
      contrastText: '#410002'
    },
    surface: {
      default: '#fff8f6',
      contrastText: '#231918',
      varText: '#534341',
      outlineText: '#857370',

    },
    surfaceDim: {
      default: '#e8d6d3',
      contrastText: '#231918',
      varText: '#534341',
      outlineText: '#857370',
    },
    surfaceBright: {
      default: '#fff8f6',
      contrastText: '#231918',
      varText: '#534341',
      outlineText: '#857370',
    },
    surfaceInverse: {
      default: '#392e2c',
      contrastText: '#ffedea',
    },
    surfContainerHighest: {
      default: '#f1dfdc',
    },
    surfContainerHigh: {
      default: '#f7e4e1',
    },
    surfContainer: {
      default: '#fceae7',
    },
    surfContainerTert: {
      default: '#fce4c6',
    },
    surfContainerLow: {
      default: '#fff0ee',
    },
    surfContainerLowest: {
      default: '#ffffff',
    },
    text: {
      primary: '#231918',
      secondary: '#534341',
    },
    error: {
      main: '#BA1A1A',
      contrastText: '#FFFFFF',
    },
    scrim: {
      main: '#000000',
    },
    shadow: {
      main: '#000000',
    },
    primaryDark: {
      main: '#ffb4a8',  // Replace with your custom primary color
      contrastText: '#561e16', // Replace with text color on primary color
    },
    secondaryDark: {
      main: '#e7bdb6',
      contrastText: '#442925',
    },
    tertiaryDark: {
      main: '#dec48c',
      contrastText: '#3e2e04',
    },
    backgroundDark: {
      default: '#1a1110',
    },
    primaryContainerDark: {
      default: '#73342b',
      contrastText: '#ffdad4',
    },
    secondaryContainerDark: {
      default: '#5d3f3b',
      contrastText: '#ffdad4',
    },
    tertiaryContainerDark: {
      default: '#564419',
      contrastText: '#fbdfa6',
    },
    errorContainerDark: {
      default: '#93000a',
      contrastText: '#ffdad6'
    },
    surfaceDark: {
      default: '#1a1110',
      contrastText: '#f1dfdc',
      varText: '#d8c2be',
      outlineText: '#a08c89',
      varOutlineText: '#534341',

    },
    surfaceDimDark: {
      default: '#1a1110',
      contrastText: '#f1dfdc',
      varText: '#d8c2be',
      outlineText: '#a08c89',
      varOutlineText: '#534341',
    },
    surfaceBrightDark: {
      default: '#423735',
      contrastText: '#f1dfdc',
      varText: '#d8c2be',
      outlineText: '#a08c89',
      varOutlineText: '#534341',
    },
    surfaceInverseDark: {
      default: '#f1dfdc',
      contrastText: '#392e2c',
    },
    surfContainerHighestDark: {
      default: '#3d3230',
    },
    surfContainerHighDark: {
      default: '#322826',
    },
    surfContainerDark: {
      default: '#271d1c',
    },
    surfContainerLowDark: {
      default: '#231918',
    },
    surfContainerLowestDark: {
      default: '#140c0b',
    },
    textDark: {
      primary: '#231918',
      secondary: '#534341',
    },
    errorDark: {
      main: '#BA1A1A',
      contrastText: '#FFFFFF',
    },
    scrimDark: {
      main: '#000000',
    },
    shadowDark: {
      main: '#000000',
    },
  },
  typography: {
    // You can further customize fonts, sizes, and more here if needed
    summary: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
  },
  },
});

export default theme;
