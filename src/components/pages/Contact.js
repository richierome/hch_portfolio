import React, { useRef } from 'react';
import '../../App.css';
import Social from '../Social';
import '../Social.css';
import Footer from '../Footer';

export default function Contact() {
  const merchRef = useRef(null);

  const merchItems = [
    '/images/EP2.png',
    '/images/EP1.png',
    '/images/harlot.png',
    '/images/taint.png',
     '/images/wolfblack.png',
    '/images/havoc.png',
    '/images/razn.png',
    '/images/work.png',
    


  ];

  const scrollLeft = () => {
  if (merchRef.current) {
    const item = merchRef.current.querySelector('.merch-photo');
    const gap = 20;

    if (item) {
      merchRef.current.scrollBy({
        left: -(item.offsetWidth + gap),
        behavior: 'smooth'
      });
    }
  }
};

const scrollRight = () => {
  if (merchRef.current) {
    const item = merchRef.current.querySelector('.merch-photo');
    const gap = 20;

    if (item) {
      merchRef.current.scrollBy({
        left: item.offsetWidth + gap,
        behavior: 'smooth'
      });
    }
  }
};

  return (
    <>
      <main className='contact page-shell'>
        <section className='contact-panel merch-panel'>
          <p className='section-kicker'>Merch</p>
          <h2 className='title-link'>Records & Shirts</h2>

          <div className='merch-carousel-wrapper'>
            <button
              className='carousel-btn'
              onClick={scrollLeft}
            >
              ◀
            </button>

            <div
              className='merch-slider'
              ref={merchRef}
            >
              {merchItems.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Hell City Havoc merch ${index + 1}`}
                  className='merch-photo'
                />
              ))}
            </div>

            <button
              className='carousel-btn'
              onClick={scrollRight}
            >
              ▶
            </button>
          </div>
        </section>

        <section className='contact-panel'>
          <p className='section-kicker'>Connect</p>
          <h2 className='title-link'>
            hell_city_havoc_official
          </h2>

          <p className='contact-copy'>
            Follow the band for music, shows,
            releases, and merch. Send DM for merch and record orders.
          </p>

          <Social />
        </section>
      </main>

      <Footer />
    </>
  );
}