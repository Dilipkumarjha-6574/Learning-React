import React from "react";

const PropsChild3 = ({ getDataFromChild }) => {
  let val = "Hii Parent";

  function btnHandle() {
    getDataFromChild(val);
  }
  return (
    <div>
      <h1>Props Child3 Component</h1>
      <button onClick={btnHandle}>Send Data From Child </button>
    </div>
  );
};

export default PropsChild3;
