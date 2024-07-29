import React, { useState } from 'react';

function App() {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const getRandomPosition = () => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    return { top: `${top}%`, left: `${left}%` };
  };

  const moveButterfly = () => {
    setPosition(getRandomPosition());
  };

  const appStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#f0f8ff',
  };

  const butterflyStyle = {
    position: 'absolute',
    transition: 'top 0.5s ease, left 0.5s ease',
    fontSize: '5rem', // Increased size
    cursor: 'pointer',
    top: position.top,
    left: position.left,
  };

  return (
    <div style={appStyle}>
      <div 
        style={butterflyStyle}
        onMouseEnter={moveButterfly}
        onClick={moveButterfly}
      >
        🦋
      </div>
    </div>
  );
}

export default App;
