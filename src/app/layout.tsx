import type { Metadata } from "next";
import localFont from "next/font/local";
import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themes';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { roboto } from './fonts';

export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              {children}
+           </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}