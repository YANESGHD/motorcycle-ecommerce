import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontWeightBold: 700
  },
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#0F110C'
    }
  },
  spacing: 0,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});
