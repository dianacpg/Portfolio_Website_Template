import React from 'react';
import './Home.css';
import Card from './Card';
import Contact from './Contact';


function Home () {
  return (
  <>
    <div id='background'>
    <div className= 'blanckspace'><p> </p></div>
    <div className='bgsections'>
    < Card />
    < Contact />
    </div>
    </div>
  </>
  );
}


export default Home;
