import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "../../pages/Cart/CartModal.jsx";
import products from "../../data/products.js";

const iconBtn = { background: 'none', border: 'none', cursor: 'pointer', padding: '4px' };

const PRODUCTS_MAP = Object.fromEntries(
  products.map((p) => [
    p.id,
    {
      id: p.id,
      name: p.name,
      brand: p.brand,
      price: Number(p.price),
      originalPrice: Number(p.originalPrice),
      discountPercent: p.discountPercent,
      thumbnail: p.thumbnail,
      sizes: p.variants?.[0]?.sizes?.map((s) => s.size) ?? [],
    }
  ])
);

const TEST_CART = products.slice(0, 3).map((p) => ({
  cid: p.id + "_test",
  pid: p.id,
  size: p.variants?.[0]?.sizes?.[0]?.size ?? "",
  qty: 1,
}));

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <header style={{
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
        padding: '12px 24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Left: Logo + Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            {/* Logo */}
            <Link to="/">
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ccc',
                borderRadius: '50%'
              }}></div>
            </Link>

            {/* Menu */}
            <nav style={{ display: 'flex', gap: '32px' }}>
              <Link
                to="/cua-hang"
                style={{
                  color: '#333',
                  fontSize: '13px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  textTransform: 'uppercase'
                }}
              >
                Cửa hàng
              </Link>
              <Link
                to="/men"
                style={{
                  color: '#333',
                  fontSize: '13px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  textTransform: 'uppercase'
                }}>NAM</Link>
              <Link
                to="/women"
                style={{
                  color: '#333',
                  fontSize: '13px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  textTransform: 'uppercase'
                }}>NỮ</Link>
              <Link
                to="/accessories"
                style={{
                  color: '#333',
                  fontSize: '13px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  textTransform: 'uppercase'
                }}
              >
                PHỤ KIỆN
              </Link>
            </nav>
          </div>

          {/* Right: Search + Icons */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '0 16px', gap: '16px' }}>
            {/* Search */}
            <input
              type="text"
              style={{
                width: '300px',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />

            {/* Search Icon */}
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* User Icon */}
            <Link to={"/dang-nhap"}>
            
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
            </Link>

            {/* Cart Icon */}
            {/* Cart → mở modal */}
            <button onClick={() => setCartOpen(true)} style={{ ...iconBtn, position: 'relative' }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              {/* Badge */}
              <span style={{ position: 'absolute', top: -4, right: -4, background: '#e53935', color: '#fff', fontSize: 10, fontWeight: 800, width: 16, height: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {TEST_CART.length}
              </span>
            </button>


          </div>
        </div>
      </header>
          <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={TEST_CART}
        productsMap={PRODUCTS_MAP}
      />
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideInRight { from { transform: translateX(100%) } to { transform: translateX(0) } }
      `}</style>
    </>
  );
};

export default Header;
