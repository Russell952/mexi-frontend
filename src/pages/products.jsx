import { useEffect, useState } from "react";

import Navbar from "../components/navBar";
import ProductCard from "../components/ProductCard";

import API from "../services/api";


const Products = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await API.get("/products");

      setProducts(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  const categories = [
    "all",
    ...new Set(
      products
        .map((p) => p.category)
        .filter(Boolean)
    ),
  ];

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <>
    <Navbar />
    <div className="products-page">

      <h2>
        Our Products
      </h2>

      <div className="shop-toolbar">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>

      </div>

      <div className="product-grid">

        {filteredProducts.map(
          (product) => (

            <div
              key={product._id}
              className="product-card"
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>
                {product.name}
              </h3>

              <p>
                ₦{product.price}
              </p>

              <button>
                Add to Cart
              </button>

            </div>
          )
        )}

      </div>

    </div>
  </>
  );
};

export default Products;