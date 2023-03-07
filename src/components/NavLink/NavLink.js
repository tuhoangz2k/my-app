import React from 'react';
import './NavLink.css';
export default function NavLink({ title = '', href = '#', isActive = false }) {
  return (
    <li className={`sidebar-nav ${isActive && 'active'}`}>
      <a href={href}>{title}</a>
    </li>
  );
}
