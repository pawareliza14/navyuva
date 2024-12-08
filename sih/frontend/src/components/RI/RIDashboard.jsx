import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components
import { FaBars, FaCog } from 'react-icons/fa'; // Import the settings icon
import PatentPage from './PatentPage'; // Import PatentPage component
import ResearchInstitutePage from './Profile'; // Import the new ResearchInstitutePage component
import InstituteProjects from './Projects';
import PeoplePage from './PeoplePage';

// Styled components
const DashboardWrapper = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch; /* Ensure panels fill the height */
`;

const Hamburger = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 2000;
  color: #2e1e77;
  background-color: #e0e7ff;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LeftPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh; /* Ensure it spans the entire height */
  background-color: #2e1e77;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999;
  width: 220px;
  overflow-y: auto;
  border-radius: 0; /* Remove any corner rounding */
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.6); /* Add shadow to the right side */
`;

const RightPanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh; /* Ensure it spans the entire height */
  width: 250px;
  background-color: #2e1e77;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 0; /* Remove any corner rounding */
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2); /* Add shadow to the left side */
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 15px 0;
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  color: #ffffff;

  &:hover {
    background-color: #3b2a5e;
  }
  
`;

const SettingsIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 15px;
  border-radius: 50%;
  color: #e0e7ff;
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const MainContent = styled.div`
  // padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  color: #333;
  flex: 1;
  height: 100vh; /* Ensure it takes the full height */
  overflow-y: auto;
  transition: margin-left 0.3s ease;
  width: 1420px;
  scrollbar-width: none;
`;


const MainContentHeading = styled.h1`
  color: #2e1e77;
`;


const Block = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #ffffff;
  color: #2e1e77;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(46, 30, 119, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #e0e7ff;
  }
`;

const BlockHeading = styled.h3`
  margin-bottom: 10px;
  color: #2e1e77;
`;

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <DashboardWrapper>
      <Hamburger onClick={toggleMenu}>
        <FaBars size={24} />
      </Hamburger>

      {isMenuOpen && (
        <LeftPanel>
          <Menu>
            <MenuItem onClick={() => handleMenuClick('research-institutes')}>Research Institutes</MenuItem>
            <MenuItem onClick={() => handleMenuClick('projects')}>Projects</MenuItem>
            <MenuItem onClick={() => handleMenuClick('people')}>People</MenuItem>
            <MenuItem onClick={() => handleMenuClick('patents')}>Patents</MenuItem>
          </Menu>

          <SettingsIcon>
            <FaCog />
          </SettingsIcon>
        </LeftPanel>
      )}

      <MainContent>
        {selectedPage === 'dashboard' && (
          <>
            <MainContentHeading>Welcome to the Dashboard</MainContentHeading>
            <p>Content goes here...</p>
          </>
        )}
        {selectedPage === 'research-institutes' && <ResearchInstitutePage />}
        {selectedPage === 'patents' && <PatentPage />}
        {selectedPage === 'projects' && <InstituteProjects />}
        {selectedPage === 'people' && <PeoplePage />}
      </MainContent>

      <RightPanel>
        <Block>
          <BlockHeading>History</BlockHeading>
          <p>Recent activities will appear here...</p>
        </Block>
        <Block>
          <BlockHeading>Notifications</BlockHeading>
          <p>Latest notifications will appear here...</p>
        </Block>
        <Block>
          <BlockHeading>Achievements</BlockHeading>
          <p>Your milestones and achievements will appear here...</p>
        </Block>
      </RightPanel>
    </DashboardWrapper>
  );
};

export default Dashboard;
