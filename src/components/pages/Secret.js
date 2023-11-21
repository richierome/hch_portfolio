import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../HeroSection.css';
import SecretSection from '../SecretSection';

function Secret() {
  const [code, setCode] = useState('');

  const generateRandomCode = (length) => {
    const titles = [
      'INVOCATION', 'HELL CITY', 'SHALLOW GRAVE', 'GOTHIC QUARTER',
      'DEAD CATS', 'SILVER SCREEN SCREAMS', 'DEATH BY FIRE'
    ];

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      if (Math.random() < 0.4) {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        result += `${randomTitle}\n`;
      } else {
        result += generateRandomCodeLine(10, characters, charactersLength) + '\n';
      }
    }
    return result;
  };

  const generateRandomCodeLine = (lineLength, characters, charactersLength) => {
    let line = '';
    for (let i = 0; i < lineLength; i++) {
      line += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return line;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newCode = generateRandomCode(10);
      setCode((prevCode) => prevCode + newCode);
    }, 400); // Adjust the interval time (in milliseconds) here

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='secret-head'>
        {/* <HeroAbout/> */}
        <SecretSection />
        <div className='terminal'>
          <div className='terminal-text'>
            <span className='prompt'>666</span>&nbsp;
            <span className='command'>System Engaged /Generate Hell/ You're Fucked/</span>
            <span className='prompt'>666</span>&nbsp;
            <br />
            <span>{code}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secret;
