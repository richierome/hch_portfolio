import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import '../HeroSection.css';
import SecretSection from '../SecretSection';

function Secret() {
  const [codeLines, setCodeLines] = useState([]);
  const secretRef = useRef(null);

  const titles = [
    'function EP(){H311*C!TY*H^V0C}',
    'INVOCATION',
    'HELL CITY',
    'SHALLOW GRAVE',
    'GOTHIC QUARTER',
    'DEAD CATS',
    'SILVER SCREEN SCREAMS',
    'DEATH BY FIRE',
    'HELL CITY HAVOC',
    'const generateHell = (I.E.) => {H311*C!TY*H^V0C}',
    'const generateHell = (RiverSide) => {H311*C!TY*H^V0C}',
    'I.E.',
    'D3C3MB3R C0M!NG F!R3',
    '!NV0CAT!ON',
    'H311 C!TY',
    'SHA11OW GRAV3',
    'G0TH!C QUART3R',
    'D3AD CATS',
    'S!LV3R SCR33N SCR3AMS',
    'D3ATH BY F!RE',
    'H311 C!TY HAV0C',
    '666_PSYCHOBILLY_666',
    'EMPIRE',
    '3MP!R3',
    'DEMON OF',
    'HONEYMOON',
    'DEATH STRIKES',
    'TAINTED HEARTS',
    'HOUNDS OF HELL',
    'SWEET 16',
    'LET IT DIE',

  ];

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}<>/';

  const generateRandomCodeLine = () => {
    if (Math.random() < 0.35) {
      return titles[Math.floor(Math.random() * titles.length)];
    }

    let line = '';

    for (let i = 0; i < 55; i++) {
      line += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return line;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newLines = Array.from({ length: 2 }, () => generateRandomCodeLine());

      setCodeLines((prevLines) => {
        const updatedLines = [...prevLines, ...newLines];

        // Keep enough lines to force the whole page content upward
        return updatedLines.slice(-400);
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (secretRef.current) {
      secretRef.current.scrollTop = secretRef.current.scrollHeight;
    }
  }, [codeLines]);

  return (
    <div className='secret-head' ref={secretRef}>
      <div className='secret-feed'>
        <SecretSection />
        <div className='terminal-command'>
            <span className='prompt'>666</span>&nbsp;

            <span className='command'>
              --System_Engaged--/--Code_Hell_Executed-- 666
            </span>

            <div className='terminal-warning'>
              /--You're_Fucked--/
            </div>

          </div>
       
        <div className='code-stream'>
          {codeLines.map((line, index) => (
            <div className='code-line' key={`${line}-${index}`}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Secret;