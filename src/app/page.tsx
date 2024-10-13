import styles from "./page.module.css";
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import * as React from 'react';
import { roboto, pixelify_Sans } from './fonts';
import Button from '@mui/material/Button';
import EventCard from '../components/EventCard';

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
              <p className={roboto.className} style={{fontSize: 22, color: "#4A4459", width: 580, lineHeight: "2.2", letterSpacing: 0.5}}>
                <span className={pixelify_Sans.className} style={{fontSize: 50, color: "#4AA55E", lineHeight: "0"}}>TOUCH GRASS</span> helps break the "Seattle Freeze" 
                by making it less stressful and more accessible to form strong friendships. Meet like-minded people and get to know your local communities.
                Let's thaw the freeze together!
              </p>
              <Button variant="contained" href="#" sx={{height: 56, width: 120, fontSize: 20}}>
                  Join now
              </Button>
            </div>
          </div>
          <div style={{marginLeft: 80, marginTop: 120}}>
            <div className={roboto.className} style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <h1 style={{color: "#527E4C", fontSize: 30}}>Events</h1>
              <Button sx={{height: 40, fontSize: 18, marginRight: 3}}>
                View more
              </Button>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
              <EventCard name="Georgetown Morgue" src="../images/georgetown-morgue.jpg" date="THURS, October 31 @ 7:00 PM" />
              <EventCard name="Seattle Asian Art Museum" src="../images/seattle-asian-art.jpg" date="WED, October 23 @ 7:00 PM" />
              <EventCard name="UW Vendor Fair" src="../images/vendor-fair.jpeg" date="FRI, October 25 @ 6:00 PM" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}