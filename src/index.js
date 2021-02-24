import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./module.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
