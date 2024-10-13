'use client';

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
    const url = window.location.href; // Get the current page URL
    const message = "If you're looking to build new connections, check out this amazing website - " + url + '!'; // Custom message to share
  
    return (
      <footer>
        <p>© 2024 Touch Grass</p>
        <div>
          <h4>Share this page:</h4>
          <FacebookShareButton url={url} hashtag={message}>
            <FacebookIcon size={45} round />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={message}>
            <TwitterIcon size={45} round />
          </TwitterShareButton>
          <RedditShareButton url={url} title={message}>
            <RedditIcon size={45} round/>
          </RedditShareButton>
        </div>
      </footer>
    );
  };
  
  export default Footer;