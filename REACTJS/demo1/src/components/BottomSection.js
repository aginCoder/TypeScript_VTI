import React from 'react';
import './App.css';

const BottomSection = ({ bottomInput, handleBottomInputChange }) => {
  return (
    <div className="bottom-section">
      <input
        type="text"
        placeholder="Enter text..."
        value={bottomInput}
        onChange={handleBottomInputChange}
      />
    </div>
  );
};

export default BottomSection;
