import { useState } from "react";
import data from "../products.json";
import Product from "./Product";
import "./Products.css";
import Size from "./Size";
export default function Products({
  selectedSizes,
  selectItems,
  setSelectedItems,
}) {
  const [products, setProducts] = useState(data.data.products);

  const filteredProducts =
    selectedSizes.length > 0
      ? products.filter((item) => {
          for (const size of selectedSizes) {
            if (!item.availableSizes.includes(size)) {
              return false;
            }
          }
          return true;
        })
      : products;

  const itemNumber = filteredProducts.length;
  return (
    <div className="productsSection">
      <div>{itemNumber} product(s) found</div>
      <div className="productContainer">
        {filteredProducts.map((product) => {
          return (
            <div key={product.id} className="productItem">
              <Product
                product={product}
                selectItems={selectItems}
                setSelectedItems={setSelectedItems}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
