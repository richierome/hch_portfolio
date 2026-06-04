import React from 'react';
import './Social.css';

function Social() {
  return (
    <div className='social-container'>
      <a
        className='social-button'
        href='https://www.instagram.com/hell_city_havoc_official/'
        target='_blank'
        rel='noreferrer'
        aria-label='Instagram'
      >
        <i className='ig-icon fab fa-instagram' />
        <span>Instagram</span>
      </a>
    </div>
  );
}

export default Social;
