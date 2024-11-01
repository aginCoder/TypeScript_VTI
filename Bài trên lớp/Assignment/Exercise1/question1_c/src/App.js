import React from 'react';
import './App.css'; // Đảm bảo tạo file App.css

const ComponentA = () => {
    return <div className="component component-a">Đây là Component A</div>;
};

const ComponentB = () => {
    return <div className="component component-b">Đây là Component B</div>;
};

const ComponentC = () => {
    return <div className="component component-c">Đây là Component C</div>;
};

const App = () => {
    return (
        <div className="app">
            <h1>Render Ba Component Khác Nhau</h1>
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
    );
};

export default App;
