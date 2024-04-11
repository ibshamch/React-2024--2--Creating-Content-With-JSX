/*
1- Import React and ReactDOM Libraries 
2- Get a reference to div with id "root"
3- Tell React to take control of that component 
4- Create a component 
5- Show the component on screen 
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
