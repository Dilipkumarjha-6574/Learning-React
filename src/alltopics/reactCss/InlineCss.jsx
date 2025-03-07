import React from "react";

const InlineCss = () => {
  let headdingCSS = {
    backgroundColor: "red",
    color: "white",
  };
  return (
    <div>
      <h1 style={headdingCSS}>Inline Css Example 1</h1>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Inline Css Example 2
      </h1>
    </div>
  );
};

export default InlineCss;
