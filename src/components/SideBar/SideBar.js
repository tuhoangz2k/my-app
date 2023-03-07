import React from 'react';
import { navigates } from '../../constants';
import './Sidebar.css';
export default function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        {navigates.map((ele, idx) => (
          <li className={`sidebar-nav ${idx === 0 && 'active'}`} key={idx}>
            <a href={ele?.link}>{ele?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
