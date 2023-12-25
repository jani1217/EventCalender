import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/upcoming-events" className="nav-link">Upcoming Events</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </div>
      <div className="auth-links">
        <div className="auth-dropdown">
          <span className="dropdown-trigger">Clubs</span>
          <div className="dropdown-content">
            <Link to="/ieee" className="dropdown-item">IEEE</Link>
            <Link to="/gdsc" className="dropdown-item">GDSC</Link>
          </div>
        </div>
      </div>
      <div className="auth-links">
        <div className="auth-dropdown">
          <span className="dropdown-trigger">Login/Signup</span>
          <div className="dropdown-content">
            <Link to="/login" className="dropdown-item">Login</Link>
            <Link to="/signup" className="dropdown-item">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
