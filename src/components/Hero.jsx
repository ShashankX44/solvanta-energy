import { Link } from "react-router-dom";

function Hero() {
  return (
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
        Solvanta Energy delivers premium solar power solutions for homes,
        businesses and industries. From consultation and government
        documentation to installation and lifetime support, we help you
        embrace clean energy with confidence.
      </p>

      <div className="hero-buttons">

        <Link to="/contact" className="primary-btn">
          Get Free Consultation
        </Link>

        <Link to="/solutions" className="secondary-btn">
          Explore Solutions
        </Link>

      </div>

    </section>
  );
}

export default Hero;