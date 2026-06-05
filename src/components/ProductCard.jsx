import { Link } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (

    <div className="product-card">

      <Link to={`/product/${product._id}`}>

        <img
          src={product.image}
          alt={product.name}
        />

      </Link>

      <h3>{product.name}</h3>

      <p>₦{product.price}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>

    </div>

  );

}

export default ProductCard;