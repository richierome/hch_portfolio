import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(){
    return(
        <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/razn_hell.jpg'
                text='HELL CITY HAVOC'
                label='About'
                path='/about'
              />
              <CardItem
                src='images/hch_atom.png'
                text='INFO & NEWS '
                label='Info '
                path='/contact'
              />
            </ul>
            {/* <ul className='cards__items'>
              <CardItem
                src='images/wolf.png'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/contact'
              />
              <CardItem
                src='images/wolf.png'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/wolf.png'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul> */}
          </div>
        </div>
      </div>

    )
}

export default Cards;