// In App.js
import React from 'react';
import Table from './components/Table';
import './App.css';

const tableData = [
  { id: 1, name: 'Phạm Gia Ân', value: 'Dev' },
  { id: 2, name: 'Đào Thị Tố Uyên', value: 'Test' },
  { id: 3, name: 'Đào Minh Tú', value: 'Digital Marketing' },
];

function App() {
  return (
    <>
      <div className="container">
        <Table data={tableData} />
      </div>
    </>
  );
}

export default App;
