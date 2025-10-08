// src/components/layout/Sidebar/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; 
import { IoHomeOutline, IoBookOutline, IoFlashOutline, IoLayersOutline, IoMailOutline } from 'react-icons/io5';


interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Skills', path: '/skills' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const getIconForPath = (path: string) => {
    switch (path) {
        case '/':
            return <IoHomeOutline />;
        case '/education':
            return <IoBookOutline />;
        case '/skills':
            return <IoFlashOutline />;
        case '/gallery':
            return <IoLayersOutline />;
        case '/contact':
            return <IoMailOutline />;
        default:
            return null;
    }
}

const Sidebar: React.FC = () => {
  const location = useLocation(); 

  return (
    <div className="sidebar-container">
      <div className="profile-section">
        <div className="profile-initials">SS</div>
        <p className="profile-name">Shaik Sumayya</p>
        <p className="profile-title">QA Engineer</p>
      </div>

      <nav className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">
                {getIconForPath(item.path)}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;