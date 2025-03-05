import { useState } from "react";
import Nav from "./Nav";

const Cart = () => {
  let [items, setItems] = useState(0);

  let addItems = () => {
    setItems(items + 1);
  };
  return (
    <div>
      <Nav props={items}/>
      <h1>Cart Components {items}</h1>
      <button onClick={addItems}>add to cart</button>
    </div>
  );
};

export default Cart;
