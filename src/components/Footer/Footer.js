import React from 'react';
import './Footer.css';
import { Button } from '../button/Button'
import { Link } from 'react-router-dom';
import {GrFacebook} from 'react-icons/gr';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { GiGrowth } from 'react-icons/gi';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque?
        </p>
        <p className='footer-subscription-text'>
          Lorem ipsum dolor sit.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/Begin'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Lorem, ipsum.</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Make Perfect Resume </h2>
            <Link to='/'> Video</Link>
            <Link to='/'>Article</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              CvRoll<GiGrowth/>
            </Link>
          </div>
          <small className='website-rights'>Connect to me on my social media accounts :)</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <GrFacebook color="#4267B2"/>
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram color="#bc2a8d"/>
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube color="#FF0000"/>
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter color="	#1DA1F2"/>
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin color="#0e76a8"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;