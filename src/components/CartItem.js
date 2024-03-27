import "./CartItem.css";
export default function CartItem({ sku, quantity, num, productsMap }) {
  const product = productsMap.get(sku);
  return (
    <div className="eachItem">
      <img src={`/static/products/${sku}-1-cart.webp`}></img>
      <div className="info">
        <div>
          <h1 className="itemTitle">{product.title}</h1>
          <h1>{product.availableSizes + "|" + product.style}</h1>
          <h1>quantity:{quantity}</h1>
        </div>
        <div className="price">
          <h1>${product.price}</h1>
        </div>
      </div>
    </div>
  );
}
