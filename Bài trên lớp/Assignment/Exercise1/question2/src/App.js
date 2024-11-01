// App.js
import React from 'react';
import MyComponent from './Components/MyComponent';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </div>
  );
};

export default App;