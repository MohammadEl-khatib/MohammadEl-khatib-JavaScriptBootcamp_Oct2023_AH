import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import './AdDesigner.css';

const AdDesigner: React.FC = () => {
  const [flavor, setFlavor] = useState<string>('Strawberry');
  const { isDarkTheme, toggleTheme } = useTheme();
    const [fontSize, setFontSize] = useState<number>(44);
    


  const adStyle = {
    backgroundColor: isDarkTheme ? '#222' : '#fff',
    color: isDarkTheme ? '#fff' : '#000',
    fontSize: `${fontSize}px`,
    padding: '20px',
    border: '3px solid #000',
    margin: '0 auto',
      width: '70%',

    };
    

  return (
    <div className="ad-designer">
      <h2>Ad Designer</h2>
      <div style={adStyle}>
        Vote For {flavor}
          </div>
      <div>
        <p>What to Support</p>
        <button onClick={() => setFlavor('Chocolate')} disabled={flavor === 'Chocolate'}>Chocolate</button>
        <button onClick={() => setFlavor('Vanilla')} disabled={flavor === 'Vanilla'}>Vanilla</button>
        <button onClick={() => setFlavor('Strawberry')} disabled={flavor === 'Strawberry'}>Strawberry</button>
      </div>
      <div>
        <p>Color Theme</p>
        <button onClick={() => setIsDarkTheme(false)} disabled={!isDarkTheme}>Light</button>
        <button onClick={() => setIsDarkTheme(true)} disabled={isDarkTheme}>Dark</button>
      </div>
      <div>
        <p>Font Size</p>
        <button onClick={() => setFontSize(fontSize - 2)} disabled={fontSize <= 20}>Down</button>
        {fontSize}px
        <button onClick={() => setFontSize(fontSize + 2)} disabled={fontSize >= 60}>Up</button>
        
      </div>
    </div>
    
  );
};

export default AdDesigner;

