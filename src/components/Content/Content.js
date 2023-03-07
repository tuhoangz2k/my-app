import React from 'react';
import images from '../../assets/images';
import { banner, items } from '../../constants';
import './Content.css';
import Item from '../Item';
export default function Content() {
  return (
    <div className="content">
      <div className="content-container">
        <div className="logo-wap">
          <div className="logo-container">
            <img className="image" src={images.LogoImage} alt="logo" />
          </div>
        </div>
        <div className="banner">
          <div className="banner-container">
            <h3>{banner.title}</h3>
            <p>{banner.describe}</p>
          </div>
        </div>
        <div className="items-wrap">
          {items.map((item, idx) => (
            <Item
              image={item.image}
              title={item.title}
              description={item.describe}
              key={idx}
            />
          ))}
        </div>
      </div>
      <footer>
        <span>Copyright © 2021</span>
      </footer>
    </div>
  );
}
