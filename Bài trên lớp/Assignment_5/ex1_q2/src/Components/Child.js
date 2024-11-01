import React, { useState } from 'react';

const Child = ({ onNameChange }) => {
  const [inputName, setInputName] = useState('');

  const handleChange = (e) => {
    const newName = e.target.value; 
    setInputName(newName); 
    onNameChange(newName); 
  };

  return (
    <input 
      type="text" 
      value={inputName} 
      onChange={handleChange} 
      placeholder="Nhập tên của bạn" 
    />
  );
};

export default Child;
