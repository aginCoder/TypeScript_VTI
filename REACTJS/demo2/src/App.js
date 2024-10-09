import React, { useState } from 'react';
import Top from './components/Top'; 
import Bottom from './components/Bottom'; 
import './App.css';

function App() {
  const [topInput, setTopInput] = useState('');
  const [bottomInput, setBottomInput] = useState('');

  const handleTopInputChange = (e) => {
    setTopInput(e.target.value);
  };

  const handleSendClick = () => {
    setBottomInput(topInput);
    setTopInput(''); 
  };

  const handleBottomInputChange = (e) => {
    setBottomInput(e.target.value);
  };

  return (
    <div className="app-container">
      <Top
        topInput={topInput}
        handleTopInputChange={handleTopInputChange}
        handleSendClick={handleSendClick}
      />
      <Bottom
        bottomInput={bottomInput}
        handleBottomInputChange={handleBottomInputChange}
      />
    </div>
  );
};

export default App;
