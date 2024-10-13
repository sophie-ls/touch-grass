import type { Metadata } from "next";
import localFont from "next/font/local";
import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themes';

export default function RootLayout(props) {
  const {children} = props;
  return (
    <html lang="en">
      {children}
    </html>
  );
}