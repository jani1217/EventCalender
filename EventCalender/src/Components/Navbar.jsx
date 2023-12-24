// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="nav-links">
      <Link to="/">Home</Link>
        <Link to="/upcoming-events">Upcoming Events</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        
      </div>
      <div className="auth-links">
        <div className="auth-dropdown">
          <span>Clubs</span>
          <div className="dropdown-content">
            <Link to="/ieee">IEEE</Link>
            <Link to="/gdsc">GDSC</Link>
          </div>
        </div>
      </div>
      <div className="auth-links">
        <div className="auth-dropdown">
          <span>Login/Signup</span>
          <div className="dropdown-content">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
