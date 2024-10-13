import styles from "./page.module.css";
import Header from '../components/Header';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import * as React from 'react';

export default function HomePage () {
  return (
      <div >
        <LandingHeader />
        <Footer />
      </div>
  );
}