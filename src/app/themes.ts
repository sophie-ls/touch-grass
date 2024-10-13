'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
    button: {
      textTransform: 'none',
    }
  },
  palette: {
    primary: {
      main: '#71986C',
    },
    secondary: {
      main: '#D6E8D4',
    },
  },
  shape: {
    borderRadius: 30,
  }
});

export default theme;