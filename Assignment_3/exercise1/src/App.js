import './App.css';
import React from 'react';

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement('h1', null, 'Hello World'),
    React.createElement('p', null, 'My first paragraph')
  );
}

export default App;
