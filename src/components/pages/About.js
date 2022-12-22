import React from 'react';
import '../../App.css'
import HeroAbout from '../HeroAbout';
// import HeroSection from '../HeroSection';


export default function About(){
    return (
        <>
    
        <div className='about'>
            <HeroAbout/>
            {/* <HeroSection/> */}
            
        <p className='about-title'>
            Formed and based out of Riverside, California.
            <br/>
            <br/> 
            Hell City Havoc is a hard hitting, high impact aggresive output punkabilly power trio.
        </p>
        </div>
        </>
    
    )
}
   