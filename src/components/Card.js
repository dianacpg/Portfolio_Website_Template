import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';



function Card() {
  return (
  <>
    <div className='cards-container'>
            <div className='wrapper'>
            <Link to='/outdoor' className='image'>
              <img src={process.env.PUBLIC_URL + '/images/Quarteira_1.jpeg'} alt='colection' className='image__img' />
              <div className='image__overlay'>
              <div className='image__tittle'>OUTDOOR</div>
              </div>
            </Link>
            </div>
            <div className='wrapper'>
            <Link to='/indoor' className='image'>
              <img src={process.env.PUBLIC_URL + '/images/nomada1.jpg'} alt='colection' className='image__img' />
              <div className='image__overlay'>
              <div className='image__tittle'>INDOOR</div>
              </div>
            </Link>
            </div>
            <div className='wrapper'>
            <Link to='/outdoor' className='image'>
              <img src={process.env.PUBLIC_URL + '/images/others3.jpg'} alt='colection' className='image__img' />
              <div className='image__overlay'>
              <div className='image__tittle'>INDOOR</div>
              </div>
            </Link>
            </div>
            <div className='wrapper'>
            <Link to='/indoor' className='image'>
              <img src={process.env.PUBLIC_URL + '/images/enchufada6.jpg'} alt='colection' className='image__img' />
              <div className='image__overlay'>
              <div className='image__tittle'>INDOOR</div>
              </div>
            </Link>
            </div>
            <div className='wrapper'>
            <Link to='/indoor' className='image'>
              <img src={process.env.PUBLIC_URL + '/images/alentejo2.jpg'} alt='colection' className='image__img'  />
              <div className='image__overlay'>
              <div className='image__tittle'>OUTDOOR</div>
              </div>
            </Link>
            </div>
            <div className='wrapper'>
            <Link to='/indoor' className='image'>
              <img src={process.env.PUBLIC_URL + '/images/outdoorothers1.jpg'} alt='colection' className='image__img' />
              <div className='image__overlay'>
              <div className='image__tittle'>OUTDOOR</div>
              </div>
            </Link>
            </div>
             <div className='wrapper'>
            <Link to='/indoor' className='image'>
              <img src={process.env.PUBLIC_URL + '/images/reborned1.jpg'} alt='colection' className='image__img' />
              <div className='image__overlay'>
              <div className='image__tittle'>OUTDOOR</div>
              </div>
            </Link>
            </div>
   </div>
  </>
  );
}


export default Card;
