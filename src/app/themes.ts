import { ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }

  export const themeOptions: ThemeOptions = {
    palette: {
      primary: {
        main: '#71986C',
      },
      secondary: {
        main: '#D6E8D4',
      },
    },
  };