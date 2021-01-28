import React from 'react';
import './About.css';


function About () {
  return (
  <>

    <div className='subtitle'>
      <div className='right_side'>
      <p> from: </p>
      <h2> Patagonia, <strong>Chile</strong> </h2>
      <ul>
        <li>-41° 48' 36.54" S</li>
        <li>-68° 54' 22.57" W</li>
      </ul>
      </div>
      <div className='left_side'>
      <p> living in:</p>

        <h2> Lisbon, Portugal </h2>
        <ul>
          <li>38° 43' 0.01" N </li>
          <li>-9° 07' 59.99" W</li>
        </ul>
      </div>
    </div>
    <h1>ABOUT</h1>
    <div className='about_text'>
    <p>Ian Yurisch Cancino aka “ELIANYURI” (b. 1986) is an artisan and a self-taught artist, grown and raised in PATAGONIA, more specifically in a working village called Cerro Sombrero, in the Isla Grande  de Tierra del Fuego, Chile. Being enchanted and fascinated with fire, he has used artificial light as his main tool, integrating one of the manageable aspects of this element. Having studied Communication and Digital Art Direction in Santiago de Chile, He showed from a young age a passion for creation, construction and mastery of different materials, as a way to let his creativity and imagination run free.</p>
    <p> </p>
    <p>Lives in Lisbon since 2011, where he chose to leave behind a job in his training area to pursue the unbeaten track, where he would find light as a means of communication.</p>
    <p> </p>
    <p>Known for his neon-lighting style, portable DJ stands and a captivating way to express ideas, he starts a new journey as a visual artist in 2020.</p>
    </div>
  </>
  );
}

export default About;
