import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
};

export default ThemeToggle;
