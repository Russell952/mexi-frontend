import { useContext } from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cart,
    removeItem,
    increaseQty,
    decreaseQty
  } = useContext(CartContext);

  const total = cart.reduce(

    (sum, item) =>

      sum + item.price * item.quantity,

    0

);

console.log(useContext(CartContext));

  return (

    <>

      <Navbar />

      <section className="featured">

        <h2>
          Your Shopping Cart
        </h2>

        {cart.length === 0 ? (

          <h3>
            Your cart is empty
          </h3>

        ) : (

          <div className="product-grid">

            {cart.map(item => (

              <div
                className="product-card"
                key={item._id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h3>{item.name}</h3>

                <p>₦{item.price}</p>

                <div className="qty-controls">

                  <button
                    onClick={() => decreaseQty(item._id)}
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item._id)}
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

        <h2>
          Total: ₦{total}
        </h2>

        {cart.length > 0 && (

          <Link
            to="/checkout"
            className="shop-btn"
          >
            Proceed To Checkout
          </Link>

        )}

      </section>

    </>

  );

}

export default Cart;