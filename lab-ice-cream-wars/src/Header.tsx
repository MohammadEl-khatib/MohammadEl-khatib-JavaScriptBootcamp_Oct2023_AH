import React from 'react';
import './Header.css';

interface HeaderProps {
  user: string;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="header">
      <h1>Ice Cream Wars</h1>
      <span style={{ float: 'right' }}>Welcome, {user}</span>
    </header>
  );
}

export default Header;
