import React from 'react';
import './App.css'; 

const ComponentA = () => {
    return <div className="component component-a">Đây là Component A</div>;
};

const ComponentB = () => {
    return <div className="component component-b">Đây là Component B</div>;
};

const ComponentC = () => {
    return <div className="component component-c">Đây là Component C</div>;
};

const ComponentD = () => {
  return <div className="component component-c">Đây là Component D</div>;
};

const ComponentE = () => {
  return <div className="component component-c">Đây là Component E</div>;
};

const App = () => {
  return (
      <div className="app">
          <header><ComponentA /></header>
          <main><ComponentB /></main>
          <section className="layout">
              <div className="sidebar">
                  <aside><ComponentC /></aside>
              </div>
              <div className="sidebar1">
                  <nav><ComponentD /></nav>
              </div>
          </section>
          <footer><ComponentE /></footer>
      </div>
  );
};


export default App;
