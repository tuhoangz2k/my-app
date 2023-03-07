import React from 'react';
import './Item.css';
export default function Item({ image, description, title }) {
  return (
    <div className="item">
      <h4>{title}</h4>

      <div className="item-des">
        <img src={image} alt="" className="" />
        <p>{description}</p>
      </div>
    </div>
  );
}
