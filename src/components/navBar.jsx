import { Link, useLocation } from "react-router-dom";

import { useContext } from "react";

import {
  CartContext
} from "../context/CartContext";

import {
  AuthContext
} from "../context/AuthContext";

import mexiLogo from "../assets/Mexi-logo.png"

function Navbar() {
  const location = useLocation();

  const { cart } =
    useContext(CartContext);

  const { user, logout } =
    useContext(AuthContext);

  const cartCount = cart.reduce(

    (total, item) =>

      total + item.quantity,

    0

  );

   const users = JSON.parse(localStorage.getItem("user"));

    const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
    { name: "Register", path: "/register"},
    { name: "Login", path: "/login" },
  ];

    if (users?.role === "admin") {
    links.push({
      name: "Admin",
      path: "/admin",
    });
  }

  return (
    <nav className="navbar">
      
      <div className="top-logo">
      
            <img
              src={mexiLogo}
              alt="Mexi Logo" 
              className="logo"
            />
      
          </div>

      <div className="nav-links">
        {links
          .filter(link => link.path !== location.pathname)
          .map(link => (
            <Link key={link.path} to={link.path}>
              {link.name}
            </Link>
          ))}
      </div>
    </nav>
  );

}

export default Navbar;