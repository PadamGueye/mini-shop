import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';

import AllProduct from './pages/products/AllProduct';
import Product from './pages/products/Product';
import CreateProduct from './pages/products/CreateProduct';
import UpdateProduct from './pages/products/UpdateProduct';
import ErrorProduct from './pages/products/ErrorProduct'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route  path='/' element={<Home />} />
              <Route  path='/products' element={<AllProduct />} />
              <Route  path='/products/createProduct' element={<CreateProduct />} />            
              <Route  path='/products/product/:id' element={<Product />} />
              <Route  path='/products/updateProduct/:id' element={<UpdateProduct />} />
              <Route path='/products/*' element={<ErrorProduct  />} />
        </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
