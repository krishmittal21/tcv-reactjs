import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">DC Chowk, Sector 9, Rohini, Delhi 110085</p>
        <p className="p__opensans">and</p>
        <p className="p__opensans">ShivNadar University</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 10:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 10:00 pm</p>
      </div>
      <a href="https://www.google.com/maps/dir//the+chocolate+villa/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d0167fce01b89:0xdcffaf919a7911dd?sa=X&ved=2ahUKEwjog6b6t6yAAxVqdPUHHf5AA24Q9Rd6BAhJEAA&ved=2ahUKEwjog6b6t6yAAxVqdPUHHf5AA24Q9Rd6BAhYEAQ" target="_blank" rel="noopener noreferrer">
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
