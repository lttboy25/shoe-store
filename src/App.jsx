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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [agreeModal, setAgreeModal] = useState(false);
  const [activeOutside, setActiveOutside] = useState(false);
  const [testValue, setTestValue] = useState("");

  return (
    <>
      <h1 style={{ marginBottom: "55px" }}>App test</h1>
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
        <h2>Dropdown test</h2>
        <Dropdown
          label="Dropdown demo"
          value={testValue}
          onChange={setTestValue}
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
          ]}
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2>Promotion test</h2>
        <Promotion
          title="Khuyến mãi test"
          description="Giảm giá cho đơn hàng hôm nay"
          discount={20}
          code="TEST20"
          onApply={() => alert("Áp dụng khuyến mãi")}
        />
      </div>
    </>
  );
}

export default App;
