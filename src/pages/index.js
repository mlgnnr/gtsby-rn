import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Lax from "../images/gatsby-icon.png"
import Background from "../images/hlaupalax.png"
import Hlaup from "../images/laxinn.jpg"
import Kort from "../images/laxmap.jpg"
import Crew from "../images/hlaupacrew.jpg"
import '../styles/index.css';
import { Link } from 'gatsby';
import Laxlink from "../comp/link";

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

  var d = new Date();
  var offset = d.getTimezoneOffset();
  console.log("OFFSET:", offset)
  if (offset !== 0){
    hours = hours + (Math.sqrt(offset*offset)/60)
  } else {
    console.log("UTC 0")
  }
  days = `${days}`;
  if (numbersToAddZeroTo.includes(hours)) {
    hours = `0${hours}`;
  } 
  if (numbersToAddZeroTo.includes(minutes)) {
    minutes = `0${minutes}`;
  } 
  if (numbersToAddZeroTo.includes(seconds)) {
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
      var d = new Date();
      var offset = d.getTimezoneOffset();
      if (offset !== 0){
        hours = hours + (Math.sqrt(offset*offset)/60)
      } else {
        console.log("UTC 0")
      }
      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } 
      if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } 
      if (numbersToAddZeroTo.includes(seconds)) {
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
        <Countdown />
        <img 
        src={Background}
        style={{
            maxWidth: '100%',
            maxHeight: '250px',
            margin: '0 auto',
            marginTop: '-50px',
            zIndex: 100
        }}></img>             
        <Laxlink 
          title={"Tímataka"}
          internal={false}
          url={"https://timataka.net/hengillultra2021/urslit/?race=1&cat=f"}>
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </svg>  
        </Laxlink>
        <Laxlink
          title={"Hlaupaleiðin"}
          url="/route"
          internal={true}
        >
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/></svg></Laxlink>        
        <Laxlink
          title={"Veðurspá"}
          url="/vedur"
          internal={true}
        >
<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>        </Laxlink>

    </main>
  );
}

export default Index;
