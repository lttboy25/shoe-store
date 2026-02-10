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
import products from "./data/products";
import LoginForm from "./components/section/auth/LoginForm";
import RegisterForm from "./components/section/auth/RegisterForm";
import Header from "./components/layout/Header";
import HomeHero from "./components/section/home/HomeHero";
import ProductGrid from "./components/product/ProductGrid/ProductGrid";
import ProductSizeCart from "./components/product/ProductSize/ProductSizeCart";
import ProductSizeDetail from "./components/product/ProductSize/ProductSizeDetail";
import ProductQuantityCart from "./components/product/ProductQuantity/ProductQuantityCart";
import ProductQuantityDetail from "./components/product/ProductQuantity/ProductQuantityDetail";
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";


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

  const cld = new Cloudinary({
      cloud: {
        cloudName: 'shoe-store-ptgdud'
      }
    });

  const hinhDemo = cld.image('bitis-ez-lift-xanh-duong_opycff');
  hinhDemo.resize(fill().width(250).height(250));

  return (
    <>
    <div style={{backgroundColor:"red"}}>

    <img
  src="https://res.cloudinary.com/shoe-store-ptgdud/image/upload/v1770641740/bitis-ez-lift-xanh-duong_opycff.jpg"
  alt="Biti's EZ Lift"
  width={250}
  loading="lazy"
/>
    </div>
      <ProductSizeDetail/>
      <ProductQuantityDetail/>
      <br />
      <ProductSizeCart/>
      <ProductQuantityCart/>
      {isLogin ? (
        <h2>Xin chào {user} </h2>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      <RegisterForm
        onRegister={(data) => {
          console.log("Thông tin đăng ký", data);
        }}
      />
      <Header />
      <HomeHero />
      <h1 style={{ marginBottom: "55px" }}>App test</h1>
      
      <ProductGrid list={products} quantity={2}/>


      <Breadcrumb
        items={[
          { label: "Home", href: "#" },
          { label: "Components", href: "#" },
          { label: "Test", active: true },
        ]}
      />
      <button
        style={{ marginBottom: "30px" }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </button>
      <Modal
        onClose={() => setIsOpen(false)}
        title={"Đây là test modal"}
        isOpen={isOpen}
        children={
          <div>
            <p>Đây là body bên trong modal</p>

            <Checkbox
              id="agree"
              label="Tôi đồng ý điều khoản"
              checked={agreeModal}
              onChange={setAgreeModal}
            />
          </div>
        }
        footer={
          <div>
            <button>Save</button>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        }
      />
      <div style={{ marginBottom: "30px" }}>
        <h2>Loading</h2>
        <Spinner />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2>Button</h2>
        <Button
          title="Đây là nút test"
          variant="light"
          width={400}
          height={100}
          image={logo}
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2>Loading</h2>
        <Input labelTitle={"Test nhập"} errorTitle={"Vui lòng nhập"} />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2>Checkbox</h2>
        <Checkbox
          id="active"
          label="Kích hoạt"
          checked={activeOutside}
          onChange={setActiveOutside}
        />
      </div>
      <Popup></Popup>
      <Rating></Rating>

      <div style={{ marginBottom: "30px" }}>
        <h2>Dropdown</h2>
        <Dropdown
          label="Chọn size giày"
          value={size}
          onChange={setSize}
          placeholder="Chọn size"
          options={[
            { value: "39", label: "Size 39" },
            { value: "40", label: "Size 40" },
            { value: "41", label: "Size 41" },
            { value: "42", label: "Size 42" },
          ]}
        />
        <p>Size đã chọn: {size}</p>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2>Promotion test</h2>
        <Promotion title="25" />
      </div>
    </>
  );
}

export default App;
