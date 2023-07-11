import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MyAppProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyAppProvider>
      <App />
    </MyAppProvider>
  </React.StrictMode>
);
