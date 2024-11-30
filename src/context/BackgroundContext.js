// context/BackgroundContext.js
import { createContext, useState, useContext } from 'react';

const BackgroundContext = createContext();

export function useBackground() {
    return useContext(BackgroundContext);
  }

export function BackgroundProvider({ children }) {
  const [background, setBackground] = useState('bg-default');

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      <div className={`layout-container ${background}`} style={{ minHeight: '100vh', width: '100%' }}>
        {children}
      </div>
    </BackgroundContext.Provider>
  );
}


