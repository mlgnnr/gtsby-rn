import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Lax from "../images/gatsby-icon.png"
import RoutePNG from "../images/route.png"
import Elevation from "../images/elevation.png"
import '../styles/index.css';
import { Link } from 'gatsby';


function Route() {

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
            overflow: 'hidden',
            borderRadius: '2rem',
            marginBottom: '0.5rem'
        }}>
        <img 
            src={Elevation}
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
            overflow: 'hidden',
            borderRadius: '2rem',
            marginBottom: '0.5rem'
        }}>
        <img 
            src={RoutePNG}
            style={{
                maxWidth: '100%',
                margin: '0 auto',
                zIndex: 100
            }}></img>
        </div>    
      </div>    
    </main>
  );
}

export default Route;
