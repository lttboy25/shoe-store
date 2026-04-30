import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../../pages/Cart/CartModal.jsx";
import products from "../../data/products.js";
import { getCartItems } from "../../utils/cartStorage";
import { notify } from "../../utils/notify";
import AuthContext from "../../context/AuthContext.jsx";
import "./Header.css";

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
    },
  ]),
);

const Header = () => {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [cartItems, setCartItems] = useState(() => getCartItems());
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentAccount, isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setShowProfileModal(false);
    setMobileMenuOpen(false);
    notify("Đã đăng xuất", "success");
    navigate("/dang-nhap");
  };

  const searchSuggestions = useMemo(() => {
    const keyword = searchValue.trim().toLowerCase();
    if (!keyword) return [];

    return products
      .filter((product) => {
        const name = String(product.name ?? "").toLowerCase();
        const brand = String(product.brand ?? "").toLowerCase();
        return name.includes(keyword) || brand.includes(keyword);
      })
      .slice(0, 5);
  }, [searchValue]);

  useEffect(() => {
    const syncCart = () => setCartItems(getCartItems());

    window.addEventListener("storage", syncCart);
    window.addEventListener("cart:updated", syncCart);

    const handleClickOutside = (e) => {
      if (
        showProfileModal &&
        e.target.closest &&
        !e.target.closest("button[title='Tài khoản']")
      ) {
        setShowProfileModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("storage", syncCart);
      window.removeEventListener("cart:updated", syncCart);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showProfileModal]);

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchValue.trim();

    if (!keyword) {
      navigate("/cua-hang");
      return;
    }

    navigate(`/cua-hang?search=${encodeURIComponent(keyword)}`);
  };

  const openSearchResult = (keyword) => {
    const value = String(keyword ?? "").trim();
    if (!value) return;
    setSearchValue(value);
    setIsSearchFocused(false);
    navigate(`/cua-hang?search=${encodeURIComponent(value)}`);
    setMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <img
              src="/logo.svg"
              alt="Logo"
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <Link to="/cua-hang" className="nav-link">
              Cửa hàng
            </Link>
            <Link to="/cua-hang-do-nam" className="nav-link">
              Nam
            </Link>
            <Link to="/cua-hang-do-nu" className="nav-link">
              Nữ
            </Link>
            <Link to="/yeu-thich" className="nav-link">
              Yêu thích
            </Link>
            <Link to="/ve-chung-toi" className="nav-link">
              Về chúng tôi
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="search-form desktop-search">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => {
                setTimeout(() => setIsSearchFocused(false), 150);
              }}
              placeholder="Tìm sản phẩm..."
              className="search-input"
            />
            <button type="submit" className="search-btn" aria-label="Tìm kiếm">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {isSearchFocused && searchSuggestions.length > 0 && (
              <div className="search-suggestions">
                {searchSuggestions.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => openSearchResult(product.name)}
                    className="suggestion-item"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="suggestion-image"
                    />
                    <div className="suggestion-content">
                      <div className="suggestion-name">
                        {product.name}
                      </div>
                      <div className="suggestion-brand">
                        {product.brand}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </form>

          {/* Right Actions */}
          <div className="header-actions">
            {/* Search Icon Mobile */}
            <button className="action-btn mobile-search-btn" aria-label="Tìm kiếm">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* User Account */}
            <div className="account-wrapper">
              {isAuthenticated ? (
                <div className="profile-menu">
                  <button
                    onClick={() => setShowProfileModal(!showProfileModal)}
                    className="action-btn"
                    title="Tài khoản"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </button>

                  {showProfileModal && (
                    <div className="profile-modal">
                      {/* Profile Header */}
                      <div className="profile-header">
                        {currentAccount?.avatar ? (
                          <img
                            src={currentAccount.avatar}
                            alt={currentAccount.name || currentAccount.username}
                            className="profile-avatar"
                          />
                        ) : (
                          <div className="profile-avatar-placeholder">
                            {currentAccount?.name?.[0]?.toUpperCase() ||
                              currentAccount?.username?.[0]?.toUpperCase() ||
                              "U"}
                          </div>
                        )}
                        <div className="profile-info">
                          <p className="profile-name">
                            {currentAccount?.name ||
                              currentAccount?.username ||
                              "Khách hàng"}
                          </p>
                          <p className="profile-email">
                            {currentAccount?.email || ""}
                          </p>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="profile-menu-items">
                        <button
                          onClick={() => {
                            navigate("/profile");
                            setShowProfileModal(false);
                          }}
                          className="profile-menu-item"
                        >
                          Hồ sơ cá nhân
                        </button>

                        <button
                          onClick={handleLogout}
                          className="profile-menu-item logout-btn"
                        >
                          Đăng xuất
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/dang-nhap" className="login-btn">
                  Đăng nhập
                </Link>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="action-btn cart-btn"
              aria-label="Giỏ hàng"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span className="cart-badge">
                {cartItems.length}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-btn"
              aria-label="Menu"
            >
              <span className={`hamburger-icon ${mobileMenuOpen ? "active" : ""}`}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mobile-menu">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mobile-search-form">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsSearchFocused(false), 150);
                }}
                placeholder="Tìm sản phẩm..."
                className="search-input"
              />
              <button type="submit" className="search-btn" aria-label="Tìm kiếm">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </form>

            {isSearchFocused && searchSuggestions.length > 0 && (
              <div className="mobile-search-suggestions">
                {searchSuggestions.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => openSearchResult(product.name)}
                    className="suggestion-item"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="suggestion-image"
                    />
                    <div className="suggestion-content">
                      <div className="suggestion-name">
                        {product.name}
                      </div>
                      <div className="suggestion-brand">
                        {product.brand}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="mobile-menu-content">
              <Link to="/cua-hang" className="mobile-menu-link" onClick={handleNavClick}>
                Cửa hàng
              </Link>
              <Link to="/cua-hang-do-nam" className="mobile-menu-link" onClick={handleNavClick}>
                Nam
              </Link>
              <Link to="/cua-hang-do-nu" className="mobile-menu-link" onClick={handleNavClick}>
                Nữ
              </Link>
              <Link to="/yeu-thich" className="mobile-menu-link" onClick={handleNavClick}>
                Yêu thích
              </Link>
              <Link to="/ve-chung-toi" className="mobile-menu-link" onClick={handleNavClick}>
                Về chúng tôi
              </Link>

              {isAuthenticated && (
                <>
                  <div className="mobile-menu-divider"></div>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      handleNavClick();
                    }}
                    className="mobile-menu-link"
                  >
                    Hồ sơ cá nhân
                  </button>
                  <button
                    onClick={handleLogout}
                    className="mobile-menu-link logout-link"
                  >
                    Đăng xuất
                  </button>
                </>
              )}
            </div>
          </nav>
        )}
      </header>

      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        productsMap={PRODUCTS_MAP}
      />
    </>
  );
};

export default Header;
