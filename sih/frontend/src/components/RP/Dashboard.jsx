import React, { useState } from 'react';
import './Dashboard.css';
import { FaBars, FaCog } from 'react-icons/fa'; // Import the settings icon
import PatentPage from './PatentPage';
import ProjectProfilePage from './Profile.jsx'; // Corrected import

const RPDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('dashboard'); // State to keep track of the current page

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page) => {
    setSelectedPage(page); // Update the page based on the menu selection
  };

  return (
    <div className="dashboard">
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars size={24} />
      </div>

      {/* Left Panel */}
      {isMenuOpen && (
        <div className="left-panel">
          <ul className="menu">
            <li onClick={() => handleMenuClick('research-institutes')}>Research Institutes</li>
            <li onClick={() => handleMenuClick('projects')}>Projects</li>
            <li onClick={() => handleMenuClick('people')}>People</li>
            <li onClick={() => handleMenuClick('patents')}>Patents</li> {/* Clicking this will show PatentPage */}
            <li onClick={() => handleMenuClick('funding')}>Funding</li>
          </ul>

          {/* Settings Icon */}
          <div className="settings-icon">
            <FaCog />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        {selectedPage === 'dashboard' && (
          <>
            <h1>Welcome to the Dashboard</h1>
            <p>Content goes here...</p>
          </>
        )}
        {selectedPage === 'research-institutes' && <ProjectProfilePage />} {/* Display Research Institute page */}
        {selectedPage === 'patents' && <PatentPage />} {/* Display PatentPage when Patents is clicked */}
        {/* Add other conditionals here to show content for Projects, Funding, etc. */}
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="block history">
          <h3>History</h3>
          <p>Recent activities will appear here...</p>
        </div>
        <div className="block notifications">
          <h3>Notifications</h3>
          <p>Latest notifications will appear here...</p>
        </div>
        <div className="block achievements">
          <h3>Achievements</h3>
          <p>Your milestones and achievements will appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default RPDashboard;
