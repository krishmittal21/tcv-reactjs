import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome to The Chocolate Villa" />
      <h1 className="app__header-h1">Where Sweet Dreams Come True!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Whether you crave rich, velvety truffles or crave a fluffy, cocoa-infused cake, our bakery is a sanctuary of heavenly delights. Each confection is meticulously handcrafted with love and a sprinkle of magic, ensuring every bite is a moment to savor.</p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
