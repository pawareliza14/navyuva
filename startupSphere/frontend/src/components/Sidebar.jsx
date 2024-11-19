import React from "react";
import { Link } from "react-router-dom";
import "../styles/Slidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Quick Links</h2>
      <ul>
        <li><Link to="/research">Research Projects</Link></li>
        <li><Link to="/startups">Startups</Link></li>
        <li><Link to="/patents">Patents</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
