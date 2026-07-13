import { Link } from "react-router-dom";

function Navbar() {
  return (
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
        <span className="phone">📞 +91 70931 32598</span>

        <Link to="/contact" className="quote-btn">
          Get Quote
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;