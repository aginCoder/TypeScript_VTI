import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [name, setName] = useState('');

  const handleNameChange = (childName) => {
    setName(childName);
  };

  return (
    <div>
      <Child onNameChange={handleNameChange} />
      <h1>Hello {name}</h1>
    </div>
  );
};

export default Parent;
