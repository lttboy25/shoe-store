import React, { useState } from "react";
import Promotion from "../../common/Promotion";
import "./ProductCard.css";
import likeIcon from "../../../assets/icon/heart-like.svg";
import unlikeIcon from "../../../assets/icon/heart-un-like.svg";
import { Link } from "react-router";

function ProductCard({ product }) {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
    console.log(like);
  }

  return (
  
  <Link 
      to={`/cua-hang/${product.slug}`} 
      style={{ textDecoration: "none", color: "inherit" }}
    >
  

    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.thumbnail}
          alt={product.slug}
          className="product-image"
        />

        <button
          onClick={handleLike}
          className="product-like-btn"
        >
          <img
            src={like ? likeIcon : unlikeIcon}
            alt="Like"
            className="product-like-icon"
          />
        </button>
      </div>

      <div className="product-name-wrapper">
        <h5 className="product-name">{product.name}</h5>
      </div>

      <div className="product-price">
        
        {
          product.discountPercent > 0 && (
            <span className="product-original-price">
          {product.originalPrice} đ
        </span>
          )
        }
        <span className="product-sale-price">
          {product.price} đ
        </span>
        {
          product.discountPercent > 0 && (
            <Promotion title={`${product.discountPercent}`} />
          )
        }
      </div>
    </div>
    </Link>
  );
}

export default ProductCard;
