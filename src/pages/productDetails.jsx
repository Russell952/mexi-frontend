import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

import API from "../services/api";

import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    async function fetchProduct() {

      try {

        const res = await API.get(`/products/${id}`);

        setProduct(res.data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchProduct();

  }, [id]);

  if(!product){

    return <h2>Loading...</h2>;

  }

  return (

    <>

      <Navbar />

      <section className="featured">

        <div className="product-details">

          <img
            src={product.image}
            alt={product.name}
          />

          <div>

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <h3>₦{product.price}</h3>

            <button
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>

          </div>

        </div>

      </section>

    </>

  );

}

export default ProductDetails;