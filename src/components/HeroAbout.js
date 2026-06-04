import React, { useState, useEffect } from 'react';
import '../App.css';
import './HeroSection.css';

function HeroAbout() {
  const images = [
    '/images/rich.png',
    '/images/joe.png',
    '/images/dave.png',
    '/images/band.png'
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero-container about-hero'>
      <div className='about-carousel'>
        <img
          key={images[current]}
          src={images[current]}
          alt='Hell City Havoc'
          className='carousel-image'
        />
      </div>
    </div>
  );
}

export default HeroAbout;