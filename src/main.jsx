import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/global.css";
import "./styles/admin.css";
import "./styles/responsive.css";

import CartProvider from "./context/CartContext";

import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <AuthProvider>

      <CartProvider>

        <App />

      </CartProvider>

    </AuthProvider>

  </React.StrictMode>

);