import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import * as React from 'react';
import { roboto, pixelify_Sans } from './fonts';
import Button from '@mui/material/Button';
import EventCard from '../components/EventCard';
import Image from 'next/image'

export default function HomePage () {
  return (
      <div>
        <LandingHeader />
        <main className={roboto.className}>
          <div style={{display: "flex", alignItems: "center", marginTop: "60px"}}>
            <Image
              src="/images/join-now.jpeg"
              alt="join now"
              height="320"
              width="500"
              style={{ borderRadius: 20, marginLeft: 80, marginRight: 70, 
                      objectFit: "cover", boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.35)",
                      border: "1px solid #71986C"}}
              
            />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <p style={{fontSize: 22, color: "#4A4459", width: 550, lineHeight: "2.2", letterSpacing: 0.5}}>
                <span className={pixelify_Sans.className} style={{fontSize: 50, color: "#4AA55E", lineHeight: "0"}}>TOUCH GRASS</span> helps break the &quot;Seattle Freeze&quot;
                by making friendship-building less stressful and intimidating. Meet like-minded people and get to know your local communities.
                Let&#39;s thaw the freeze together!
              </p>
              <Button variant="contained" href="#" sx={{height: 56, width: 120, fontSize: 20}}>
                  Join now
              </Button>
            </div>
          </div>
          <div style={{marginLeft: 80, marginTop: 80}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <h1 style={{color: "#527E4C", fontSize: 30}}>Upcoming Events</h1>
              <Button sx={{height: 40, fontSize: 18, marginRight: 5}}>
                View more
              </Button>
            </div>
            <div style={{display: "flex"}}>
              <EventCard name="Seattle Asian Art Museum" src="/images/seattle-asian-art.jpg" date="WED, October 23 @ 7:00 PM" tag="Culture" tag2="Educational"/>
              <EventCard name="UW Vendor Fair" src="/images/vendor-fair.jpeg" date="FRI, October 25 @ 6:00 PM" tag="UW-Affiliated" tag2="Holiday"/>
              <EventCard name="Georgetown Morgue" src="/images/georgetown-morgue.jpg" date="THURS, October 31 @ 7:00 PM" tag="Fun" tag2="Holiday"/>
            </div> 
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 60}}>
              <h1 style={{color: "#527E4C", fontSize: 30}}>Suggested Events</h1>
              <Button sx={{height: 40, fontSize: 18, marginRight: 5}}>
                View more
              </Button>
            </div>
            <div style={{display: "flex"}}>
              <EventCard name="Make Classic Japanese Ramen-Cooking Class by Classpop!™" src="/images/ramen.jpg" date="TUE, OCT 15 2024 @ 07:00 pm" tag="Cooking" tag2="Culture"/>
              <EventCard name="Thursday Evening Tennis" src="/images/tennis.jpg" date="THURS, OCT 24 2024 @ 6:00 PM" tag="Sport" tag2="Casual"/>
              <EventCard name="SiM Presents SPOOKY NIGHT! Halloween Party & Interactive Showcase" src="/images/SiM.png" date="FRI, OCT 25 2024 @ 7:00 PM" tag="Party" tag2="Holiday" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}