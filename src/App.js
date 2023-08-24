import React from "react";
import image from "./icons/react.png";
import laugh from "./icons/laugh.svg";

function App() {
  return (
    <div>
      <h1>React App using Webpack and Yarn</h1>
      <p>Image</p>
      <img src={image} alt="" />
      <p>SVG</p>
      <img src={laugh} alt="" />
    </div>
  );
}

export default App;
