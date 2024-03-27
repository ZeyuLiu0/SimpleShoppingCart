import { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
export default function Cart({
  selectItems,
  setSelectedItems,
  isCartOpen,
  toggleCart,
  productsMap,
}) {
  const [total, setTotal] = useState(0);
  const num = selectItems.size;

  useEffect(() => {
    let newTotal = 0;
    for (let [sku, quantity] of selectItems) {
      const product = productsMap.get(sku);
      newTotal += product.price * quantity;
    }
    setTotal(newTotal);
  }, [selectItems]);

  return (
    <>
      <div className="here" onClick={toggleCart}>
        <img className="cart" src="/cart-icon.png"></img>;
        <div className="numberOfItems">{num}</div>
        {isCartOpen &&
          Array.from(selectItems.entries()).map(([sku, quantity]) => {
            return (
              <CartItem
                key={sku}
                sku={sku}
                quantity={quantity}
                num={num}
                productsMap={productsMap}
              />
            );
          })}
        <div className="total">Total: ${total.toFixed(2)}</div>
        <button>Check out </button>
      </div>
    </>
  );
}
