import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { navigates } from '../../constants';
import './Sidebar.css';
import NavLink from '../NavLink';
import useViewport from '../../hooks/useViewport';
export default function SideBar({ handleCloseMenu }) {
  const deviceWidth = useViewport().width;

  return (
    <nav className="sidebar" onClick={(e) => e.stopPropagation()}>
      <ul>
        {navigates.map((ele, idx) => (
          <NavLink href={ele.link} title={ele.title} key={idx} isActive={idx === 0} />
        ))}
      </ul>
      {deviceWidth <= 768 && (
        <span className="close-menu" onClick={handleCloseMenu}>
          <AiOutlineClose size={24} />
        </span>
      )}
    </nav>
  );
}
