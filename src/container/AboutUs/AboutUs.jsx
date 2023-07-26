import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.t} alt="tcv" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The Chocolate Villa is a whimsical bakery haven, where the enchanting aroma of cocoa and the artistry of confections combine to create a euphoric experience for dessert lovers. With an array of delectable treats and a touch of magic in every bite, we invite you to embark on an unforgettable journey of sweet indulgence.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_t flex__center">
        <img src={images.t} alt="about_t" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded in 2013, The Chocolate Villa started as a small family-run patisserie in the heart of Delhi. Through passion, dedication, and a commitment to culinary excellence, it blossomed into the beloved chocolate paradise it is today. Over the years, its delectable creations and warm hospitality have won the hearts of chocolate enthusiasts far and wide, making it a destination for those seeking pure bliss in every sweet morsel.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
