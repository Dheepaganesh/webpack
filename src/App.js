import React from "react";
import image from "../src/icons/react.png";
import laugh from "../src/icons/laugh.svg";

const App = () => {
  return (
    <div>
      <h1>React App using Webpack and Yarn</h1>
      <p>Image</p>
      <img src={image} alt="" />
      <p>SVG</p>
      <img src={laugh} alt="" />
    </div>
  );
};

export default App;
