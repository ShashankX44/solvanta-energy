import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="hero">

      <Navbar />

      <section className="hero-content">

        <p className="tagline">
          Premium Residential & Commercial Solar Solutions
        </p>

        <h1>
          Power Every Roof.
          <br />
          Empower Every Future.
        </h1>

        <p className="description">
          Modern rooftop solar systems engineered for homes and businesses.
          From consultation and documentation to installation and long-term
          support, we make clean energy simple.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Free Consultation
          </button>

          <button className="secondary-btn">
            <Link to="/solutions">Explore Solutions</Link>
          </button>
        </div>

      </section>

    </div>
  );
}

export default Home;