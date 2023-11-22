import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../HeroSection.css';
import SecretSection from '../SecretSection';

function Secret() {
  const [code, setCode] = useState('');

  const generateRandomCode = (length) => {
    const titles = [
    'function EP(){H311*C!TY*H^V0C}', 'INVOCATION', 'HELL CITY', 'SHALLOW GRAVE', 'GOTHIC QUARTER',
      'DEAD CATS', 'SILVER SCREEN SCREAMS', 'DEATH BY FIRE', 'HELL CITY HAVOC','const generateHell = (I.E.) => {H311*C!TY*H^V0C}'
      ,'const generateHell = (RiverSide) => {H311*C!TY*H^V0C}', 'I.E.', 'D3C3MB3R C0M!NG F!R3',
      '!NV0CAT!ON', 'H311 C!TY', 'SHA11OW GRAV3', 'G0TH!C QUART3R',
      'D3AD CATS', 'S!LV3R SCR33N SCR3AMS', 'D3ATH BY F!RE', 'H311 C!TY HAV0C','666_PSYCHOBILLY_666','EMPIRE','3MP!R3'
      
    ];

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}<>/';
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
    }, 700); // Adjust the interval time (in milliseconds) here

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
            <span className='command'>--System_Engaged--/--Code_Hell_Executed--/--You're_Fucked--/</span>
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
