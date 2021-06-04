import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Lax from "../images/gatsby-icon.png"
import '../styles/index.css';
import { Link } from 'gatsby';


function Slider(){
    // {{
    //     display: 'block',
    //     width: '100%',
    //     height: 4,
    //     my: 2,
    //     cursor: 'pointer',
    //     appearance: 'none',
    //     borderRadius: 9999,
    //     color: 'inherit',
    //     bg: 'gray',
    //     ':focus': {
    //       outline: 'none',
    //       color: 'primary',
    //     },
    //     '&::-webkit-slider-thumb': thumb,
    //     '&::-moz-range-thumb': thumb,
    //     '&::-ms-thumb': thumb,
    //   }}    
    return(
        <input 
            className="time-range hours"
            type="range" 
            name="hours" 
            min="0" max="66"
        />
    )
}


function Vedur() {
  const [forecastTime, setForecastTime] = useState(2);
   const [postFix, setPostFix] = useState("0000_001");
  const [clock, setClock] = useState({})
  const baseURL = "v"
//   rain/temp/wind
//   https://vedur.is/photos/thattaspa_igb_island_urk-msl-10uv/210603_0600_001.gif
//   https://vedur.is/photos/thattaspa_igb_island_2t/210603_0600_001.gif
//   https://vedur.is/photos/thattaspa_igb_island_10uv/210603_0600_001.gif
// https://vedur.is/photos/isl_skyjahula2/210603_0600_34.png

  function numToDayName(number){
    switch (number) {
      case 0:
        return "Sunnudagur"
      case 1:
        return "Mánudagur"
      case 2:
        return "Þriðjudagur"
      case 3: 
        return "Miðvikudagur"
      case 4:
        return "Fimmtudagur"
      case 5:
        return "Föstudagur"
      case 6:
        return "Laugardagur"
      default:
        return "Sunnudagur"
    }
  }

  useEffect(() => {
    const date = new Date('2021-06-04T06:00:00')
    date.setHours(date.getHours() + forecastTime)
    var s = date.getSeconds();
    var m = date.getMinutes();
    var h = date.getHours();
    const weekday = date.getDay();
    setClock({
      h: ("0" + h).substr(-2),
      m: ("0" + m).substr(-2),
      s: ("0" + s).substr(-2),
      day: numToDayName(weekday)
    });
    let hours = 1
    if (forecastTime < 10) {
        hours = `0${forecastTime}`;
    } else {
        hours = forecastTime
    }
    setPostFix("0600_0"+hours)
  }, [forecastTime]);

  return (
    <main>
      <Helmet>
        <title>LAX</title>
        <meta property="og:image" content={Lax} />
      </Helmet>
      <div style={{
          display: 'flex'
      }}>
        <div
        style={{
            width: '50%',
            overflow: 'hidden',
            borderRadius: '2rem',
            marginRight: '0.5rem',
            display: 'flex',
            justifyContent: 'center'
        }}>
         <div style={{
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center'
         }}>
             <span className="time">{clock.day}<br/>{clock.h}:{clock.m}</span><span style={{ opacity: '0.5'}}>+{forecastTime}</span>
             
         </div>
        </div>
        <div
        style={{
            width: '50%',
            overflow: 'hidden',
            borderRadius: '2rem'
        }}>
        <img 
            src={"https://vedur.is/photos/thattaspa_igb_su_urk-msl-10uv/210604_"+postFix+".gif"}
            style={{
                maxWidth: '100%',
                margin: '0 auto',
                zIndex: 100
            }}></img>
        </div>        
      </div>
      <div style={{
          display: 'flex'
      }}>
        <div
        style={{
            width: '50%',
            overflow: 'hidden',
            borderRadius: '2rem',
            marginRight: '0.5rem'
        }}>
        <img 
            src={"https://vedur.is/photos/thattaspa_igb_su_2t/210604_"+postFix+".gif"}
            style={{
                maxWidth: '100%',
                margin: '0 auto',
                zIndex: 100
            }}></img>
        </div>
        <div
        style={{
            width: '50%',
            overflow: 'hidden',
            borderRadius: '2rem'
        }}>
        <img 
            src={"https://vedur.is/photos/thattaspa_igb_su_10uv/210604_"+postFix+".gif"}
            style={{
                maxWidth: '100%',
                margin: '0 auto',
                zIndex: 100
            }}></img>
        </div>        
      </div>      
      <div>
      <div className="slider-parent">
      <input 
        style={{width: '80%'}}
        type="range" min="1" max="66" value={forecastTime}
         onChange={({ target: { value: hours } }) => {
                    setForecastTime(parseInt(hours));
                  }}
      />
    </div>
      </div>
    </main>
  );
}

export default Vedur;
