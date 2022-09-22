import React from "react";
import ReactDOM from "react-dom/client";
import Event from "./Event";
import Ref from "./Ref";
import Loop from "./Loop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <hr />
    <Loop />
  </React.StrictMode>
);
