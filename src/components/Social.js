import React from 'react';
import './Social.css';
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



function Social(props){
    
    return (
        <div className='social-container'>
          <div class='social-ig-media-wrap'>
                <CustomLink class='website-rights'  path={props.path} href={props.href} target={props.target}
                href='https://www.instagram.com/hell_city_havoc_official/'
                target='_blank'
                aria-label='Instagram'
                >
                <i class=' ig-icon fab fa-instagram' />
              </CustomLink> 
        </div>
       
      </div>

    );
}
export default Social;