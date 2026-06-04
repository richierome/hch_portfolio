import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-container'>
      <div className='footer-inner'>
        <Link className='footer-brand' to='/'></Link>
        <div className='footer-socials'>
          <a
            className='footer-icon'
            href='https://open.spotify.com/album/4lz9UQTITsaY43bRwsnPtu'
            target='_blank'
            rel='noreferrer'
            aria-label='Spotify'
          >
            <i className='fab fa-spotify' />
          </a>
          {/* <a
            className='footer-icon'
            href='https://www.instagram.com/hell_city_havoc_official/'
            target='_blank'
            rel='noreferrer'
            aria-label='Instagram'
          >
            <i className='fab fa-instagram' />
          </a> */}
          <Link className='footer-icon' to='/secret' aria-label='Secret page'>
            <i className='fas fa-code' />
          </Link>
        </div>
        <small className='website-rights'>&copy; {currentYear} </small>
      </div>
    </footer>
  );
}

export default Footer;
