// import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

let div = document.getElementById("root");

createRoot(div).render(
  // App() //! We can call the App function as like function call in js
  // <App></App> //! In xml we can also call as like this and this is called component call to App function(present in App.jsx file)
  <App /> //! We can also call our function like this from xml
);

//! Fragment are used to wrap other elements as a parent element without a creating an extra node
// <Fragment>
//   <h1>Hello React</h1>
//   <h2>Hii EveryOne</h2>
// </Fragment>
// way-> 1 :- <></>
// way-> 2 :- <Fragment></Fragment>
