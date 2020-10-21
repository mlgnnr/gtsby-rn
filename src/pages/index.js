import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>edda.run</title>
      </Helmet>
      <h1>30 km fyrir 30 ár</h1>
      <h2>í boði edda.run</h2>
      <div>
        <iframe src='https://connect.garmin.com/modern/course/embed/44427275' width='465' height='548' frameborder='0'></iframe>
      </div>
    </main>
  );
}

export default Index;
