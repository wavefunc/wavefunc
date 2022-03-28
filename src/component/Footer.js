import React from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
   return (
      <div id="footer" className='d-flex px-3 justify-content-between align-items-center'>
         <div className='d-inline-flex h-75 align-items-center'>
            <span className='mx-2 fs-6'>本站使用技術</span>
            <Image className='mx-2' height="75%" src={`${process.env.PUBLIC_URL}/assets/webtech/html5.svg`} />
            <Image className='mx-2' height="75%" src={`${process.env.PUBLIC_URL}/assets/webtech/css3.svg`} />
            <Image className='mx-2' height="75%" src={`${process.env.PUBLIC_URL}/assets/webtech/javascript.svg`} />
            <Image className='mx-2' height="75%" src={`${process.env.PUBLIC_URL}/assets/webtech/react.png`} />
            <Image className='mx-2' height="75%" src={`${process.env.PUBLIC_URL}/assets/webtech/gsap.png`} />
         </div>
         <div className='d-inline-flex h-75 align-items-center'>
            <span className='mx-2 fs-6'>我的連繫方式</span>
            <a href="mailto:wavefunc@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='mx-2' /></a>
            <a href="https://www.linkedin.com/in/wavefunc" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='mx-2' /></a>
            <a href="https://github.com/wavefunc" target="_blank"><FontAwesomeIcon icon={faGithub} className='mx-2' /></a>
         </div>
      </div>
   );
}

export default Footer;