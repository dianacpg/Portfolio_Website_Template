import React from 'react';
import './Home.css';
import Card from './Card';
import Contact from './Contact';


function Home () {
  return (
  <>
    <div className='background'>
    <img src={process.env.PUBLIC_URL + '/images/reborned2.webp'} alt='colection' className='image__img' />
    </div>
    < Card />
    < Contact />
  </>
  );
}


export default Home;
