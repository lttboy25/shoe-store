import React from "react";
import Home from "../pages/Home/Home.jsx";
import { Routes, Route } from "react-router";
import Product from '../pages/Product/Product.jsx'
import ProductDetail from '../pages/ProductDetail/ProductDetail.jsx';
import Checkout from '../pages/Checkout/Checkout.jsx';
import CartPage from '../pages/Cart/CartPage.jsx';
import LoginForm from '../components/section/auth/LoginForm.jsx';
import RegisterForm from '../components/section/auth/RegisterForm.jsx';
export default function AppRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cua-hang' element={<Product />} />
          
          <Route path='/cua-hang/:id' element={<ProductDetail />}/>
          <Route path="/thanh-toan" element={<Checkout />} />
          <Route path="/gio-hang" element={<CartPage />} />
          <Route path="/dang-nhap" element={<LoginForm />} />
        <Route path="/dang-ky" element={<RegisterForm />} />
    </Routes>
    </div>
  );
}
