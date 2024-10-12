import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { ReactNode } from 'react';
//import Header from './components/Header';
import Footer from './components/Footer';

// Define the props interface
interface LayoutProps {
  children: ReactNode;  // Define the type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
          
          {children}
          <Footer />
      </body>
    </html>
  );
};

export default Layout;