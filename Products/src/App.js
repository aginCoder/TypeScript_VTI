import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListComponent from './Components/ProductListComponent';
import AddProductComponent from './Components/AddProductComponent';
import UpdateProductComponent from './Components/UpdateProductComponent';

function App() {
  return (
      <Router>
          <div className="container">
              <Routes>
                  <Route path="/" element={<ProductListComponent />} />
                  <Route path="/products" element={<ProductListComponent />} />
                  <Route path="/add-product" element={<AddProductComponent />} />
                  <Route path="/update-product/:id" element={<UpdateProductComponent />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;