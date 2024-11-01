import React, { useState } from 'react';

function ComponentsTop({ onSendData }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendData = () => {
    onSendData(inputValue);
    setInputValue('');
  };

  return (
    <div className="card mb-3">
      <div className="card-header bg-primary text-white">
        Components_Top
      </div>
      <div className="card-body">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Input something here"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="btn btn-danger" onClick={handleSendData}>
            Sent Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComponentsTop;
