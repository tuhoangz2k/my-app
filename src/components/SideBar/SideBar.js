import React from 'react';
import { navigates } from '../../constants';
import './Sidebar.css';
import NavLink from '../NavLink';
export default function SideBar() {
  return (
    <nav className="sidebar">
      <ul>
        {navigates.map((ele, idx) => (
          <NavLink href={ele.link} title={ele.title} key={idx} isActive={idx === 0} />
        ))}
      </ul>
    </nav>
  );
}
