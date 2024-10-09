import React, { useState } from 'react';
import './App.css';

function App() {
  const [topInput, setTopInput] = useState('');
  const [bottomInput, setBottomInput] = useState('');

  const handleTopInputChange = (e) => {
    setTopInput(e.target.value);
  };

  const handleBottomInputChange = (e) => {
    setBottomInput(e.target.value);
  };

  const handleSendClick = () => {
    console.log('Sending:', topInput);
  };

  return (
    <div className="app-container">
      <div className="top-section">
        <input
          type="text"
          placeholder="Enter text..."
          value={topInput}
          onChange={handleTopInputChange}
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
      <div className="bottom-section">
        <input
          type="text"
          placeholder="Enter text..."
          value={bottomInput}
          onChange={handleBottomInputChange}
        />
      </div>
    </div>
  );
};

export default App;
