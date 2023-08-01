import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
const SpecialMenu = () => (
  
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Classic Cakes</p>
        <div className="app__specialMenu_menu_items">
          {data.cakes.map((cake, index) => (
            <MenuItem key={cake.title + index} title={cake.title} price={cake.price} tags={cake.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.offer} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Best Sellers</p>
        <div className="app__specialMenu_menu_items">
          {data.cakes2.map((cakes2, index) => (
            <MenuItem key={cakes2.title + index} title={cakes2.title} price={cakes2.price} tags={cakes2.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <a href="https://drive.google.com/file/d/1retkhHcHscbOStSTz_aKxVeU0WeAf1Kd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <button type="button" className="custom__button">View More</button>
      </a>
    </div>
  </div>
);

export default SpecialMenu;
