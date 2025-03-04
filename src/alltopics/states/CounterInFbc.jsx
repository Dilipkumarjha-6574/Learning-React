import { useState } from "react";

const CounterInFbc = () => {
  let [count, setCount] = useState(0);
  let [cart, setCart] = useState("Add To Cart");
  //! For Increment
  let increment = () => {
    setCount(count + 1);
  };
  //! For Decrement
  let decrement = () => {
    setCount(count - 1);
  };
  //! For Reset
  let reset = () => {
    setCount(0);
  };
  //! Add To Cart
  function updateCartBtn() {
    setCart("Go To Cart");
  }
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateCartBtn}>{cart}</button>
    </div>
  );
};
export default CounterInFbc;
