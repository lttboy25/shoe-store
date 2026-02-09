import { useState, useCallback } from "react";
import ProductCard from "../ProductCard/ProductCard";
import InfinitePagination from "../../common/InfinitePagination";
import "./ProductGrid.css";

const ITEMS_PER_LOAD = 4;

export default function ProductGrid({ list = [], quantity = list.length }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const hasMore = visibleCount < list.length && visibleCount < quantity;

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
      setIsLoading(false);
    }, 600);
  }, [isLoading, hasMore]);

  const displayProduct = list.slice(0, Math.min(visibleCount, quantity));

  return (
    <>
      <div className="product-grid-wrapper">
        <div className="product-grid">
          {displayProduct.map((item, index) => (
            <ProductCard key={item.id || index} product={item} />
          ))}
        </div>
      </div>

      <InfinitePagination
        hasMore={hasMore}
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
      />
    </>
  );
}
