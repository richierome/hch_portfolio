import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const CustomLink = (props) => {
  const {children, className, path, href, target} = props
  if (href) {
      return (
          <a className={className} href={href} target={target ? target : '_self'}>
              {children}
          </a>
      )
  }
  return (
      <Link className={className} to={path}>
          {children}
      </Link>
  )
}



function Footer(props){
    const currentYear = new Date().getFullYear()
    return (
        <div className='footer-container'>
          <div class='social-media-wrap'>
                <CustomLink class='website-rights'  path={props.path} href={props.href} target={props.target}
                href='https://www.instagram.com/hell_city_havoc_official/'
                target='_blank'
                aria-label='Instagram'
                >
                <i class='fab fa-instagram' />
              </CustomLink> 
        </div>
        <div class='social-media-wrap'>
                <CustomLink class='website-rights'  path={props.path} href={props.href} target={props.target}
                href='
                
                https://giphy.com/gifs/owRSsSHHoVYFa/tile'
                target='_blank'
                aria-label='Spotify'
                >
                <i class='fab fa-spotify' />
              </CustomLink> 
        </div>
        <br/>
        <br/>
        <small class='website-rights'>&copy;{currentYear}</small>
      </div>

    );
}
export default Footer;