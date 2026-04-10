import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom"; // ✅ thêm dòng này
import MainLayout from "../../components/layout/MainLayout";
import HeaderLine from "../../components/common/HeaderLine";
import Dropdown from "../../components/common/Dropdown";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import products from "../../data/products";

const SORT_OPTIONS = [
  { value: "default", label: "Mặc định" },
  { value: "price_asc", label: "Giá: Thấp → Cao" },
  { value: "price_desc", label: "Giá: Cao → Thấp" },
  { value: "name_asc", label: "Tên: A → Z" },
  { value: "discount", label: "Khuyến mãi nhiều nhất" },
];

export default function Product() {
  const [sortValue, setSortValue] = useState("");

  const location = useLocation(); // ✅ lấy URL
  const params = new URLSearchParams(location.search);
  const keyword = params.get("search") || "";
  const removeVietnameseTones = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  // 🔍 lọc + sort luôn trong đây
  const finalProducts = useMemo(() => {
    let list = [...products];

    const value = removeVietnameseTones(
      decodeURIComponent(keyword).toLowerCase().trim(),
    );

    // filter
    if (value) {
      list = list.filter((p) =>
        removeVietnameseTones(p.name.toLowerCase()).includes(value),
      );
    }

    // sort (⚠️ nhớ clone)
    switch (sortValue) {
      case "price_asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price_desc":
        return [...list].sort((a, b) => b.price - a.price);
      case "name_asc":
        return [...list].sort((a, b) => a.name.localeCompare(b.name, "vi"));
      case "discount":
        return [...list].sort((a, b) => b.discountPercent - a.discountPercent);
      default:
        return list;
    }
  }, [sortValue, keyword]);

  return (
    <MainLayout
      props={
        <div>
          <HeaderLine title="Cửa hàng" />

          {/* 👉 Hiện keyword */}
          {keyword && (
            <p
              style={{ maxWidth: 1200, margin: "10px auto", padding: "0 16px" }}
            >
              Kết quả tìm kiếm cho: <b>{keyword}</b>
            </p>
          )}

          {/* Sort bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 12,
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 16px 16px",
            }}
          >
            <span style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>
              Sắp xếp theo:
            </span>
            <Dropdown
              options={SORT_OPTIONS}
              value={sortValue}
              onChange={setSortValue}
              placeholder="Chọn tiêu chí"
            />
          </div>

          {/* Product grid */}
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
            <ProductGrid list={finalProducts} />
          </div>

          {/* 👉 Không có kết quả */}
          {keyword && finalProducts.length === 0 && (
            <p style={{ textAlign: "center", marginTop: 20 }}>
              Không tìm thấy sản phẩm nào
            </p>
          )}
        </div>
      }
    />
  );
}
