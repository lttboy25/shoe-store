import React, { useState } from "react";
import "./App.css";
import Modal from "./components/common/Modal";
import Spinner from "./components/common/Spinner";
import Button from "./components/common/Button";
import logo from "./assets/img/test.png";
import Input from "./components/common/Input";
import Breadcrumb from "./components/common/Breadcrumb";
import Checkbox from "./components/common/Checkbox";
import Popup from "./components/common/Popup";
import Rating from "./components/common/Rating";
import Dropdown from "./components/common/Dropdown";
import Promotion from "./components/common/Promotion";
import LoginForm from "./components/section/auth/LoginForm";
import RegisterForm from "./components/section/auth/RegisterForm";
import Header from "./components/layout/Header";
import HomeHero from "./components/section/home/HomeHero";
import ProductGrid from "./components/product/ProductGrid/ProductGrid";
import ProductSizeCart from "./components/product/ProductSize/ProductSizeCart";
import ProductSizeDetail from "./components/product/ProductSize/ProductSizeDetail";
import ProductQuantityCart from "./components/product/ProductQuantity/ProductQuantityCart";
import ProductQuantityDetail from "./components/product/ProductQuantity/ProductQuantityDetail";

import products from "./data/products.js";

import Home from "./pages/Home/Home.jsx";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [agreeModal, setAgreeModal] = useState(false);
  const [activeOutside, setActiveOutside] = useState(false);
  const [size, setSize] = useState("");
  //test login, RegisterForm
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const account = {
    username: "admin",
    password: "12345",
  };
  const handleLogin = (username, password) => {
    if (username === account.username && password === account.password) {
      setIsLogin(true);
      setUser(username);
    } else {
      alert("Sai username hoặc password!");
    }
  };


  return (
    <>
      <Home />
    </>
  );
}

export default App;
