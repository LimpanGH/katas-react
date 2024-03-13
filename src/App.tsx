// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css';
import { PropsView } from './Props/Props';
import { HooksView } from './Hooks/Hooks';

export const App = () => {
  // Knappar för att visa olika komponenter
  const [view, setView] = useState<'props' | 'hooks' | 'kata'>('props');
  
  // State-hantering för knapp som uppdaterar count i dom och consolen
  const [currentValue, setHello] = useState(3);
  console.log(currentValue);
  const handleHello = () => {
    setHello((prev) => prev + 1);
    console.log(currentValue);
  };
  return ( 
    <>
      <button onClick={() => setView('props')}>props</button>
      <button onClick={() => setView('hooks')}>hooks</button>
      {/* <button onClick={() => setView('kata')}>kata</button> */}
      
      {/* Knapp som uppdaterar count i dom och consolen */}
      <button onClick={handleHello}>helllo: {currentValue}</button>

      {view === 'props' && <PropsView />}
      {view === 'hooks' && <HooksView />}
      {/* {view === 'kata' && <Kata />} */}
    </>
  );
};

