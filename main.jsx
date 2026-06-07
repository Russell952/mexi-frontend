import React from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App";

import "./styles/global.css";
import "./styles/admin.css";
import "./styles/responsive.css";

import CartProvider from "./src/context/CartContext";

import AuthProvider from "./src/context/AuthContext";

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