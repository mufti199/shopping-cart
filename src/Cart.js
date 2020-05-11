import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ initialItems }) {
  const initialState = JSON.parse(window.localStorage.getItem("items"));
  const [items, setItems] = useState(initialState || initialItems);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const grandTotal = items
    .reduce((total, item) => {
      return total + item.qty * item.price;
    }, 0)
    .toFixed(2);

  return (
    <div className="Cart">
      <div className="Cart-title">
        <h1>Shopping Cart</h1>
      </div>
      <div>
        <div className="headers">
          <div>Name</div> <div>Price</div> <div>Quantity</div> <div>Total</div>
        </div>
        {items.map((item) => (
          <CartItem key={item.id} updateQty={updateQty} {...item} />
        ))}
      </div>
      <h2>Grand Total: ${grandTotal} </h2>
    </div>
  );
}

export default Cart;
