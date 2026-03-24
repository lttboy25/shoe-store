import React from 'react'
import Home from '../pages/Home/Home.jsx'
import { Routes, Route } from "react-router";
import Product from '../pages/Product/Product.jsx'
import ProductDetail from '../pages/ProductDetail/ProductDetail.jsx';
export default function AppRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cua-hang' element={<Product />} />
          
          <Route path='/cua-hang/:id' element={<ProductDetail />}/>
    </Routes>
    </div>
  )
}
