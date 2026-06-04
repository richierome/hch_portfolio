import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import HeroAbout from '../HeroAbout';
import Footer from '../Footer';

export default function About() {
  return (
    <>
      <main className='about page-shell'>
        <section className='about-hero'>
          <HeroAbout />
        </section>

        <section className='about-content'>
          {/* <p className='section-kicker'>About the band</p> */}
          <h1>Hell City Havoc</h1>
          <p>
            Formed in late 2018 and based out of Riverside, California, 
            Hell City Havoc made their live debut on Halloween night at the world-famous Doll Hut in 
            Anaheim, California. Their first EP was released in 2023, followed by a second EP in 2025. 
            Hell City Havoc is a hard-hitting, high-impact, aggressive punkabilly power trio.
          </p>
          <p>
            The sound is raw, dark, and built to move — a collision of punk energy, rockabilly
             and horror-fueled attitude.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
