import { useState } from "react";
const StateInFbc = () => {
  // console.log(useState); //[undefined,f]

  let [state, setState] = useState("Hello");
  console.log(state);

  function changeData() {
    setState("Bye");
  }
  return (
    <div>
      <h1>Learn States in FBC</h1>
      <h2>{state}</h2>
      <button onClick={changeData}>Click me</button>
    </div>
  );
};

export default StateInFbc;
