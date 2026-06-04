import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <section className='cards' aria-label='Hell City Havoc highlights'>
      {/* <div className='section-heading'>
        <p className='section-kicker'>Loud. Dark. Fast.</p>
        <h2>Built for the pit, made for the night.</h2>
        <p>
          Explore the band, listen to the latest release, and connect with Hell City Havoc online.
        </p>
      </div> */}

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/wolf_v.png'
              text='Tales'
              path='/about'
            />
            <CardItem
              src='images/atom.png'
              text='Info & Merch'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cards;
