import React from 'react';

const Bottom = ({ bottomInput, handleBottomInputChange }) => {
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

export default Bottom;
