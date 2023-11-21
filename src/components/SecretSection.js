import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function SecretSection() {
  return (
    <div className='hero-container'>
      <div className='content'>
        <iframe
          src="https://giphy.com/embed/gQDazMXigdtD2"
          width="400"
          height="600"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Secret Giphy"
        ></iframe>
        <p>
          This is SecretSection
        </p>
      </div>
    </div>
  );
}

export default SecretSection;
