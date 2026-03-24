import React from "react";
import Home from "../pages/Home/Home.jsx";
import { Routes, Route } from "react-router";
import Product from "../pages/Product/Product.jsx";
import LoginForm from "../components/section/auth/LoginForm.jsx";
import RegisterForm from "../components/section/auth/RegisterForm.jsx";
export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-sellers" element={<Product />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}
