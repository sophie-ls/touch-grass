import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Layout from './layout';

const HomePage: React.FC = () => {
  return (
      <Layout>
          <h1>Welcome to My Website</h1>
          <p>This is the homepage content.</p>
      </Layout>
  );
};

export default HomePage;
