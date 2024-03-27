import Products from "./Products";
import Size from "./Size";
import "./Main.css";
import Cart from "./Cart";
import { useState } from "react";
import data from "../products.json";
export default function Main() {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectItems, setSelectedItems] = useState(new Map());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productsMap = new Map(
    data.data.products.map((item) => [item.sku, item])
  );
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="viewport">
      <div className="left">
        <Size
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
      </div>
      <div className="right">
        <Products
          selectedSizes={selectedSizes}
          selectItems={selectItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
      <div className="cart">
        <Cart
          selectItems={selectItems}
          setSelectedItems={setSelectedItems}
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
          productsMap={productsMap}
        />
      </div>
    </div>
  );
}
