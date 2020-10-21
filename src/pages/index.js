import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Lax from "../images/gatsby-icon.png"
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
    //   window.location = 'https://connect.garmin.com/modern/course/44427275?fbclid=IwAR0G-ZExdpYiI8EAD7agoN-u1XzdNhfhBsD3uxv1VKp_uE1L07FtdXkVAEc';
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>edda.run</title>
      </Helmet>
      <img 
        src={Lax}
        style={{width: '100%'}}></img>
      <h1>30 km fyrir 30 ár</h1>

      <p>Vinsamlegast bíðið..</p>
    </main>
  );
}

export default Index;
