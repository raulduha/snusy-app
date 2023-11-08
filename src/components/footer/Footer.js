import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading' style={{ color: '#000000' }}>
          Contáctanos! al +56 9 5689 9114
        </p>
        <p className='footer-subscription-text' style={{ color: '#000000' }}>
          {/* Tu texto de suscripción aquí */}
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              style={{ color: '#000000' }}  // Asegúrate de que el texto dentro del input también sea negro
            />
            {/* Botón personalizado */}
            <button className='btn btn--outline' style={{ color: '#000000' }}>Subscribe</button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 style={{ color: '#000000' }}>About Us</h2>
            <Link to='/sign-up' style={{ color: '#000000' }}>How it works</Link>
            <Link to='/' style={{ color: '#000000' }}>Testimonials</Link>
            <Link to='/' style={{ color: '#000000' }}>Careers</Link>
            <Link to='/' style={{ color: '#000000' }}>Investors</Link>
            <Link to='/' style={{ color: '#000000' }}>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2 style={{ color: '#000000' }}>Contact Us</h2>
            <Link to='/' style={{ color: '#000000' }}>Contact</Link>
            <Link to='/' style={{ color: '#000000' }}>Support</Link>
            <Link to='/' style={{ color: '#000000' }}>Destinations</Link>
            <Link to='/' style={{ color: '#000000' }}>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 style={{ color: '#000000' }}>Videos</h2>
            <Link to='/' style={{ color: '#000000' }}>Submit Video</Link>
            <Link to='/' style={{ color: '#000000' }}>Ambassadors</Link>
            <Link to='/' style={{ color: '#000000' }}>Agency</Link>
            <Link to='/' style={{ color: '#000000' }}>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2 style={{ color: '#000000' }}>Social Media</h2>
            <Link to='/' style={{ color: '#000000' }}>Instagram</Link>
            <Link to='/' style={{ color: '#000000' }}>Facebook</Link>
            <Link to='/' style={{ color: '#000000' }}>Youtube</Link>
            <Link to='/' style={{ color: '#000000' }}>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <Link to='/' className='social-logo' style={{ color: '#000000' }}>
            SNUSYLAB.cl
            <i className='fab fa-teamspeak' />
          </Link>
          <small className='website-rights' style={{ color: '#000000' }}>Snusy proyect © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
              style={{ color: '#000000' }}
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              style={{ color: '#000000' }}
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
              style={{ color: '#000000' }}
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
              style={{ color: '#000000' }}
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              style={{ color: '#000000' }}
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
