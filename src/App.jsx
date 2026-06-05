import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OrderSuccess from "./pages/OrderSuccess";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminRoute from "./components/AdminRoute";

import Dashboard
from "../../Admin/admin/Dashboard";

import AdminProducts
from "../../Admin/admin/Products";

import Upload
from "../../Admin/admin/Upload";

import Orders
from "../../Admin/admin/Orders";

import Analytics
from "../../Admin/admin/Analytics";

import Settings
from "../../Admin/admin/Settings";

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/success" element={<OrderSuccess />} />

        <Route
          path="/admin"
          element={
            user?.role === "admin"
              ? <Dashboard />
              : <Navigate to="/" />
          }
        />


        <Route
          path="/admin/products"
          element={<AdminProducts />}
        />

        <Route
          path="/admin/upload"
          element={<Upload />}
        />

        <Route
          path="/admin/orders"
          element={<Orders />}
        />

        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
    
  );

}

export default App;