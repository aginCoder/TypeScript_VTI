import React from 'react';

const Top = ({ topInput, handleTopInputChange, handleSendClick }) => {
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

export default Top;
