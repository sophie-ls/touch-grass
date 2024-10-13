import styles from "./page.module.css";
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { roboto, pixelify_Sans } from './fonts';
import Button from '@mui/material/Button';

export default function HomePage () {
  return (
      <div>
        <LandingHeader />
        <main>
          <div style={{display: "flex", alignItems: "center", marginTop: "60px"}}>
            <img
              src="../images/join-now.jpeg"
              alt="join now"
              style={{height: 320, width: 500, borderRadius: 20, marginLeft: 80, marginRight: 80, 
                      objectFit: "cover", boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.35)",
                      border: "1px solid #71986C"}}
              
            />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <p className={roboto.className} style={{fontSize: 22, color: "#4A4459", width: 580, lineHeight: "2.2"}}>
                <span className={pixelify_Sans.className} style={{fontSize: 50, color: "#4AA55E", lineHeight: "0"}}>TOUCH GRASS</span> helps break the "Seattle Freeze" 
                by making it less stressful and more accessible to form strong friendships. Meet like-minded people and get to know your local communities.
                Let's thaw the freeze together!
              </p>
              <Button variant="contained" href="#" sx={{height: 56, width: 120, fontSize: 20}}>
                  Join now
              </Button>
            </div>
          </div>
          <div>
            
          </div>
        </main>
        <Footer />
      </div>
  );
}