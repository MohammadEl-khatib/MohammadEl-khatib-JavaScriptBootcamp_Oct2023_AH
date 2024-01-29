// App.tsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import AdDesigner from './AdDesigner';
import Votes from './Votes';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <AdDesigner />
        <Votes />
      </div>
    </ThemeProvider>
  );
}

export default App;
