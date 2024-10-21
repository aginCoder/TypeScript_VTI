import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import Route from './Components/Route';


function App() {
  return (
    <div className="App">
      {/* Menu */}
      <Menu/>
      {/* Content */}
      <Route/>
      
    </div>
  );
}

export default App;
