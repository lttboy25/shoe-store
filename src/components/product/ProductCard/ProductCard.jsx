import React, { useState } from "react";
import Promotion from "../../common/Promotion";
import "./ProductCard.css";
import likeIcon from "../../../assets/icon/heart-like.svg";
import unlikeIcon from "../../../assets/icon/heart-un-like.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../../../hooks/useFavorites";
import { useCart } from "../../../hooks/useCart";
import { notify } from "../../../utils/notify";
import { setBuyNowItem } from "../../../utils/cartStorage";
import { formatPrice } from "../../../utils/formatPrice";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { isFavorited, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();
  const [isLikeHovered, setIsLikeHovered] = useState(false);

  const favorited = isFavorited(product.id);

  function handleLike(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
    notify(
      favorited ? "Đã xóa khỏi yêu thích" : "Đã thêm vào yêu thích",
      "success",
    );
  }

  function handleBuyNow(e) {
    e.preventDefault();
    e.stopPropagation();
    // Add to buy now and navigate to checkout
    setBuyNowItem({
      pid: product.id,
      size: "",
      qty: 1,
    });
    navigate("/thanh-toan");
  }

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      thumbnail: product.thumbnail,
      slug: product.slug,
      quantity: 1,
    });
    notify("Đã thêm vào giỏ hàng", "success");
  }

  return (
    <Link
      to={`/cua-hang/${product.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
      className="product-card-link"
    >
      <div className={`product-card ${isLikeHovered ? "like-hovering" : ""}`}>
        <div className="product-image-wrapper">
          <img
            src={product.thumbnail}
            alt={product.slug}
            className="product-image"
          />

          <div className="product-hover-overlay">
            <button
              className="product-action-btn buy-now-btn"
              onClick={handleBuyNow}
              title="Mua ngay"
            >
              <svg viewBox="0 0 24 24" className="action-icon">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 10h18" />
                <circle cx="12" cy="14" r="2" />
              </svg>
            </button>
            <button
              className="product-action-btn add-cart-btn"
              onClick={handleAddToCart}
              title="Thêm vào giỏ hàng"
            >
              <svg viewBox="0 0 24 24" className="action-icon">
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
                <path d="M3 4h2l2 10h11l2-6H7" />
                <path d="M13 7v4m-2-2h4" />
              </svg>
            </button>
          </div>

          <button
            onClick={handleLike}
            onMouseEnter={() => setIsLikeHovered(true)}
            onMouseLeave={() => setIsLikeHovered(false)}
            className="product-like-btn"
            title={favorited ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích"}
          >
            <img
              src={favorited ? likeIcon : unlikeIcon}
              alt="Like"
              className="product-like-icon"
            />
          </button>
        </div>

        <div className="product-name-wrapper">
          <h5 className="product-name">{product.name}</h5>
        </div>

        <div className="product-price">
          {product.discountPercent > 0 && (
            <span className="product-original-price">
              {formatPrice(product.originalPrice)} đ
            </span>
          )}
          <span className="product-sale-price">
            {formatPrice(product.price)} đ
          </span>
          {product.discountPercent > 0 && (
            <Promotion title={`${product.discountPercent}`} />
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
