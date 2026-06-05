import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {

    const existingItem = cart.find(
      item => item._id === product._id
    );

    if(existingItem){

      setCart(
        cart.map(item =>

          item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item

        )
      );

    } else {

      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);

    }

  };

  // Remove item
  const removeItem = (id) => {

    setCart(
      cart.filter(item => item._id !== id)
    );

  };

  // Increase quantity
  const increaseQty = (id) => {

    setCart(
      cart.map(item =>

        item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item

      )
    );

  };

  // Decrease quantity
  const decreaseQty = (id) => {

    setCart(
      cart.map(item =>

        item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item

      )
    );

  };

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQty,
        decreaseQty
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;