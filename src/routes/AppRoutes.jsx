import React from 'react'
import Home from '../pages/Home/Home.jsx'
import { Routes, Route } from "react-router";
import Product from '../pages/Product/Product.jsx'
import CartPage from '../pages/Cart/CartPage.jsx';
export default function AppRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/best-sellers' element={<Product />} />
          <Route path='/cart-page' element={<CartPage/>} />
    </Routes>
    </div>
  )
}
