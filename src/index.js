import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

// Use createRoot to render your app
const root = createRoot(rootElement);
root.render(<App />);
