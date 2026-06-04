import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className='hero-container'>
      <div className='hero-bg-glow hero-bg-glow--red' />
      <div className='hero-bg-glow hero-bg-glow--gold' />

      <div className='hero-content'>
        {/* <p className='eyebrow'>Riverside, California</p> */}
        <img className='hch_new' src='/images/hch_new.png' alt='Hell City Havoc logo' />
        {/* <h1 className='hero-title'>Punkabilly power trio with teeth.</h1>
        <p className='hero-copy'>Hard hitting, high impact, and built for loud rooms.</p> */}
        {/* <div className='hero-actions'>
          <Link className='hero-button hero-button--primary' to='/about'>Enter the Havoc</Link>
          <Link className='hero-button hero-button--ghost' to='/contact'>Follow the band</Link>
        </div> */}
      </div>

      {/* <div className='scroll-cue' aria-hidden='true'>Scroll</div> */}
    </section>
  );
}

export default HeroSection;
