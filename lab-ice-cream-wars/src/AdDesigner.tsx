import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import Ad from './Ad'; 
import './AdDesigner.css';

const AdDesigner: React.FC = () => {
  const [flavor, setFlavor] = useState<string>('Strawberry');
  const { isDarkTheme } = useTheme(); 
  const [fontSize, setFontSize] = useState<number>(44);

  return (
    <div className="ad-designer">
      <h2>Ad Designer</h2>

      <Ad flavor={flavor} fontSize={fontSize} darkTheme={isDarkTheme} />

      <div>
        <p>What to Support</p>
        <button onClick={() => setFlavor('Chocolate')} disabled={flavor === 'Chocolate'}>Chocolate</button>
        <button onClick={() => setFlavor('Vanilla')} disabled={flavor === 'Vanilla'}>Vanilla</button>
        <button onClick={() => setFlavor('Strawberry')} disabled={flavor === 'Strawberry'}>Strawberry</button>
      </div>

    </div>
  );
};

export default AdDesigner;

