import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">

      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">☀</span>

          <div className="logo-text">
            <h2>SOLVANTA</h2>
            <p>Energy Pvt. Ltd.</p>
          </div>
        </div>

        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="right-nav">
          <span className="phone">📞 +91-7093132598</span>

          <button className="quote-btn">
            Get Quote
          </button>
        </div>

      </nav>

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