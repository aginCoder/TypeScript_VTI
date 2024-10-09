import './App.css';
import React from 'react';
import { ComponentOne, ComponentTwo, ComponentThree } from './components/MyComponents';

const App = () => {
  return (
    <div className='myApp'>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </div>
  );
};

export default App;

