import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import "./MainLayout.css";

export default function MainLayout({ props, children }) {
  return (
    <div className="main-layout">
      <div className="layout-content">
        <Header />
        {props}
        {children}
      </div>
      <Footer />
    </div>
  );
}
