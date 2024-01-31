import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Ad from './Ad';
import AdDesigner from './AdDesigner';
import Votes from './Votes';
import ThemeToggle from './ThemeToggle'; 
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header user="Chirpus" />
        <ThemeToggle /> 
        <Ad flavor="Vanilla" fontSize={24} darkTheme={false} />
        <Ad flavor="Chocolate" fontSize={30} darkTheme={true} />
        <Ad flavor="Strawberry" fontSize={28} darkTheme={false} />
        <AdDesigner />
        <Votes />
      </div>
    </ThemeProvider>
  );
}

export default App;
