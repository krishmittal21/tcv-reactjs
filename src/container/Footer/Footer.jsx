import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">DC Chowk, Sector 9, Rohini, Delhi 110085</p>
        <p className="p__opensans">+919999670308</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.tcv} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
        <a href="https://www.facebook.com/thechocolatevilla/" target="_blank" rel="noopener noreferrer">
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/thechocolatevillaindia/?hl=en" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 The Chocolate Villa. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
