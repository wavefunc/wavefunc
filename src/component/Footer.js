import React from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
   return (
      <div id="footer">
         <div>
            <span>本站使用技術</span>
            <Image src={`${process.env.PUBLIC_URL}/assets/webtech/html5.svg`} />
            <Image src={`${process.env.PUBLIC_URL}/assets/webtech/css3.svg`} />
            <Image src={`${process.env.PUBLIC_URL}/assets/webtech/javascript.svg`} />
            <Image src={`${process.env.PUBLIC_URL}/assets/webtech/react.png`} />
            <Image src={`${process.env.PUBLIC_URL}/assets/webtech/gsap.png`} />
         </div>
         <div>
            <span>我的連繫方式</span>
            <a href="mailto:wavefunc@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='mx-2' /></a>
            <a href="https://www.linkedin.com/in/wavefunc" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='mx-2' /></a>
            <a href="https://github.com/wavefunc" target="_blank"><FontAwesomeIcon icon={faGithub} className='mx-2' /></a>
         </div>
      </div>
   );
}

export default Footer;