import "./Product.css";
import { useState } from "react";

export default function Product({ product, selectItems, setSelectedItems }) {
  const [currentPicture, setCurrentPicture] = useState(
    `/static/products/${product.sku}-1-product.webp`
  );

  function handleEnter() {
    setCurrentPicture(`/static/products/${product.sku}-2-product.webp`);
  }
  function handleLeave() {
    setCurrentPicture(`/static/products/${product.sku}-1-product.webp`);
  }

  function handleAdd() {
    setSelectedItems((prev) => {
      const newMap = new Map(prev);
      const num = newMap.get(product.sku) || 0;
      newMap.set(product.sku, num + 1);
      return newMap;
    });
  }
  return (
    <>
      <div className="singleProduct">
        <img
          src={currentPicture}
          alt={product.title}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        ></img>
        <h3 className="itemTitle">{product.title}</h3>
        <h3 className="line"></h3>
        <h4>$ {product.price ? product.price.toFixed(2) : "0.00"}</h4>
        <button onClick={handleAdd}>Add to cart</button>
      </div>
    </>
  );
}
