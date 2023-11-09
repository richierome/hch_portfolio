import React from 'react';
import '../App.css';
import Bat from './bat/Bat';

import { Button } from './Button';
import './HeroSection.css';




function HeroSection(){
    return (
        <>
        <Bat/>
        <div className='hero-container'>
            
        
            <img className='wolf-image' src="/images/wolf_1.png" alt='wolf'/>
            
         </div>
         </>
    )
}

export default HeroSection;