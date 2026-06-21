import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Login from "./pages/login";
import Register from "./pages/register";
import OrderSuccess from "./pages/orderSuccess";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminRoute from "./components/AdminRoute";

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

      </Routes>

    </BrowserRouter>
    
  );

}

export default App;