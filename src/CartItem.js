import React from "react";
import "./CartItem.css";

function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => updateQty(id, qty + 1);
  const subtractOne = () => updateQty(id, qty - 1);
  return (
    <div className="Cart-item">
      <div>Name: {name}</div>
      <div>Price: ${price}</div>
      <div>
        <button onClick={subtractOne} disabled={qty === 1}>
          -
        </button>{" "}
        Qty: {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>Sub-Total: ${qty * price} </div>
    </div>
  );
}

export default CartItem;
