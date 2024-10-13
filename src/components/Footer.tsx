'use client';

import styles from "../app/page.module.css";
import React from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
  } from "react-share";

  const Footer: React.FC = () => {
    const url = ""; // Get the current page URL
    const message = "If you're looking to build new connections, check out this amazing website - " + url + '!'; // Custom message to share
  
    return (
      <footer className={styles.footer}>
        <div>
          <br></br>
          <p className={styles.thanks}>THANK YOU FOR VISITING!</p>
          <br></br>
          <h4 className={styles.subtext}>Share this page:</h4>
          <FacebookShareButton url={url} hashtag={message} className={styles.social}>
            <FacebookIcon size={45} round />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={message} className={styles.social}>
            <TwitterIcon size={45} round />
          </TwitterShareButton>
          <RedditShareButton url={url} title={message} className={styles.social}>
            <RedditIcon size={45} round/>
          </RedditShareButton>
        </div>
      </footer>
    );
  };
  
  export default Footer;