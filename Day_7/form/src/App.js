import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentsTop from './components/ComponentsTop.js';
import ComponentsBot from './components/ComponentsBot.js';

function App() {
  const [data, setData] = useState('');

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="container mt-5">
      <ComponentsTop onSendData={handleDataChange} />
      <ComponentsBot data={data} />
    </div>
  );
}

export default App;
