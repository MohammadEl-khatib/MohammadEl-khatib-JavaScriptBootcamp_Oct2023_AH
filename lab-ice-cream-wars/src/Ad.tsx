import React from 'react';

interface AdProps {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

const Ad: React.FC<AdProps> = ({ flavor, fontSize, darkTheme }) => {
  const adStyle = {
    color: darkTheme ? '#fff' : '#000',
    backgroundColor: darkTheme ? '#222' : '#fff',
    fontSize: `${fontSize}px`,
    padding: '20px',
    border: '3px solid #000',
    margin: '0 auto',
    width: '70%',
  };

  return (
    <div style={adStyle}>
      Vote For {flavor}
    </div>
  );
};

export default Ad;
