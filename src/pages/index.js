import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Lax from "../images/gatsby-icon.png"
import Hlaup from "../images/laxinn.jpg"
import Kort from "../images/laxmap.jpg"
import Crew from "../images/hlaupacrew.jpg"
import '../styles/index.css';
import { Link } from 'gatsby';

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('2021-06-04T22:00:00').getTime());
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
  const [state, setState] = useState({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
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
              {(state.days == 1) ? "dagur" : "dagar" }
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
        <title>LAX</title>
        <meta property="og:image" content={Lax} />
      </Helmet>
      <img 
        src={Lax}
        style={{
            maxWidth: '100%',
            maxHeight: '250px',
            margin: '0 auto',
            marginTop: '-50px',
            zIndex: 100
        }}></img>
        <Countdown />

    </main>
  );
}

export default Index;
