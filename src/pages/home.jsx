import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import mexiLogo from "../assets/Mexi-logo.png"

function Home() {

  return (

    <>

      <Navbar />




      <div className="home">

        {/* HERO */}
        <section className="hero">

          <div className="hero-text">

            <p className="hero-badge">
              Trusted Medical Supplies
            </p>

            <h1>
              Your Health,
              <span> Delivered Fast.</span>
            </h1>

            <p>
              Mexi Medicals provides quality
              medical supplies, equipment,
              and healthcare essentials across
              Nigeria.
            </p>

            <div className="hero-buttons">

              <Link
                to="/products"
                className="btn-primary"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="btn-secondary"
              >
                Learn More
              </Link>

            </div>

          </div>

          <div className="hero-image">

            <img
              src="../assets/download.png"
              alt="medical supplies"
            />

          </div>

        </section>

        {/* FEATURES */}
        <section className="features">

          <div className="feature-card">
            🚚 Fast Delivery
            <p>
              Nationwide shipping with
              safe packaging.
            </p>
          </div>

          <div className="feature-card">
            💊 Trusted Products
            <p>
              Certified products from
              reliable manufacturers.
            </p>
          </div>

          <div className="feature-card">
            🏥 Medical Equipment
            <p>
              Everything clinics and homes
              need.
            </p>
          </div>

        </section>

        {/* CTA */}
        <section className="cta">

          <h2>
            Ready to shop quality
            medical products?
          </h2>

          <Link
            to="/products"
            className="btn-primary"
          >
            Browse Products
          </Link>

        </section>

      </div>

    </>
  );
};

export default Home;

