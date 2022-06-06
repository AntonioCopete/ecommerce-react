import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AuthContextProvider>
    <CartContextProvider>
      <Router>
        <App />
      </Router>
    </CartContextProvider>
  </AuthContextProvider>
);
