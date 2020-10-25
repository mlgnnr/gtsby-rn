import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Lax from "../images/gatsby-icon.png"
import Hlaup from "../images/laxinn.jpg"
import Kort from "../images/laxmap.jpg"
import '../styles/index.css';
import { Link } from 'gatsby';

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('2020-10-25T09:00:00').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div>
      <div 
        className='countdown-wrapper'
        style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
        <div className='time-section'>
          <div className='time'>{state.days || '0'}</div>
          <small className="time-text">
              {(state.days > 0) ? "dagur" : "dagar" }
              </small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.hours || '00'}</div>
          <small className="time-text">klst</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.minutes || '00'}</div>
          <small className="time-text">mín</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.seconds || '00'}</div>
          <small className="time-text">sek</small>
        </div>
      </div>
    </div>
  );
};

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
        <title>AfmælisLAX hlaupið</title>
        <meta property="og:image" content={Lax} />
      </Helmet>
      <div>
          <Countdown />
      </div>
        <div
            style={{
                maxWidth: '100%',
                borderRadius: '40px',
                height: '45px'
            }}>
            <a 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'inherit'
                }}
                href="">
                <span style={{marginRight: '10px'}}>LAX í beinni</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>         
            </a>
        </div>
      <img 
        src={Hlaup}
        style={{
            maxWidth: '100%',
            maxHeight: '250px',
            borderRadius: '40px',
            margin: '0 auto'}}></img>      
      <img 
        src={Lax}
        style={{
            maxWidth: '100%',
            maxHeight: '250px',
            margin: '0 auto',
            marginTop: '-50px',
            zIndex: 100
        }}></img>
      <img 
        src={Kort}
        style={{
            maxWidth: '330px',
            margin: '0 auto',            
            borderRadius: '40px',
            marginTop: '-25px'
        }}></img>
        <div
            style={{
                maxWidth: '100%',
                borderRadius: '40px',
                height: '45px'
            }}>
            <a 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'inherit'
                }}
                href="https://connect.garmin.com/modern/course/44427275">
                <span style={{marginRight: '10px'}}>Hlaupakort</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>         
            </a>
        </div>

    </main>
  );
}

export default Index;
