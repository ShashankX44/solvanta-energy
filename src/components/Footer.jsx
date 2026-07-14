import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>SOLVANTA</h2>
          <p>Energy Pvt. Ltd.</p>

          <span>
            Delivering premium solar energy solutions for homes,
            businesses and industries across India.
          </span>
        </div>

        <div className="footer-links">

          <div>
            <h4>Company</h4>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h4>Solutions</h4>

            <Link to="/solutions">Residential</Link>
            <Link to="/solutions">Commercial</Link>
            <Link to="/solutions">Industrial</Link>
          </div>

          <div>
            <h4>Contact</h4>

            <p>+91 70931 32598</p>
            <p>info@solvantaenergy.com</p>
            <p>Andhra Pradesh, India</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Solvanta Energy Pvt. Ltd. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;