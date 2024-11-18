import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Research Portal</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/startups">Startups</Link></li>
        <li><Link to="/patents">Patents</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
