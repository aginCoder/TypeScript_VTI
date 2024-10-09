import React from 'react';
import './App.css';

const TopSection = ({ topInput, handleTopInputChange, handleSendClick }) => {
  return (
    <div className="top-section">
      <input
        type="text"
        placeholder="Enter text..."
        value={topInput}
        onChange={handleTopInputChange}
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default TopSection;
