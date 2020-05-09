import React from "react";
import "./App.css";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Cakes", price: 2, qty: 1 },
  { id: 2, name: "Cookies", price: 0.5, qty: 5 },
  { id: 3, name: "Puddings", price: 1.25, qty: 2 },
];

function App() {
  return (
    <div>
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
