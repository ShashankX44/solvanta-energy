import { Link, NavLink } from "react-router-dom";

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

        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active-nav" : undefined
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? "active-nav" : undefined
            }
          >
            Solutions
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active-nav" : undefined
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              isActive ? "active-nav" : undefined
            }
          >
            Calculator
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-nav" : undefined
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-nav" : undefined
            }
          >
            Contact
          </NavLink>
        </li>

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