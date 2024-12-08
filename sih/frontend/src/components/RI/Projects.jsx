import React from 'react';
import './InstituteProjects.css';

// Example list of projects
const projects = [
  {
    title: 'AI in Healthcare',
    principalInvestigator: 'Dr. Ayesha Khan',
    startDate: '2023-01-01',
    endDate: '2025-12-31',
    category: 'Artificial Intelligence',
  },
  {
    title: 'Sustainable Energy Solutions',
    principalInvestigator: 'Dr. Ravi Patel',
    startDate: '2022-06-15',
    endDate: '2024-06-15',
    category: 'Renewable Energy',
  },
  {
    title: 'Robotics for Industrial Automation',
    principalInvestigator: 'Dr. Mitesh Desai',
    startDate: '2021-08-01',
    endDate: '2023-08-01',
    category: 'Robotics',
  },
  {
    title: 'Blockchain for Finance',
    principalInvestigator: 'Dr. Neha Singh',
    startDate: '2023-05-01',
    endDate: '2026-05-01',
    category: 'Blockchain',
  },
  {
    title: 'Quantum Computing for Optimization',
    principalInvestigator: 'Dr. Sameer Gupta',
    startDate: '2022-09-15',
    endDate: '2024-09-15',
    category: 'Quantum Computing',
  },
  {
    title: 'AI in Healthcare',
    principalInvestigator: 'Dr. Ayesha Khan',
    startDate: '2023-01-01',
    endDate: '2025-12-31',
    category: 'Artificial Intelligence',
  },
  {
    title: 'Sustainable Energy Solutions',
    principalInvestigator: 'Dr. Ravi Patel',
    startDate: '2022-06-15',
    endDate: '2024-06-15',
    category: 'Renewable Energy',
  },
  {
    title: 'Robotics for Industrial Automation',
    principalInvestigator: 'Dr. Mitesh Desai',
    startDate: '2021-08-01',
    endDate: '2023-08-01',
    category: 'Robotics',
  },
  {
    title: 'Blockchain for Finance',
    principalInvestigator: 'Dr. Neha Singh',
    startDate: '2023-05-01',
    endDate: '2026-05-01',
    category: 'Blockchain',
  },
  {
    title: 'Quantum Computing for Optimization',
    principalInvestigator: 'Dr. Sameer Gupta',
    startDate: '2022-09-15',
    endDate: '2024-09-15',
    category: 'Quantum Computing',
  },
];

const HeroSection = () => {
  const handleKnowMoreClick = (title) => {
    alert(`You clicked the "Know More" button for ${title}`);
    // Redirect or show more details for the specific project here
  };

  return (
    <div>
    <div className='header'>
      <h2>Welcome to [Institute Name]</h2>
      <p>
        We are committed to cutting-edge research in diverse fields, from artificial intelligence to sustainability. Our projects aim to drive innovation and address global challenges.
      </p>
      <button className="know-more-button" onClick={() => handleKnowMoreClick()}>
        Know More
      </button>
    </div>
    
    
    

      {/* Latest Projects Section */}
      <div className="latest-projects">
        <h3>Latest Research Projects</h3>
        <div className="projects-table">
          <div className="table-header" >
            <div className="table-cell">Project Title</div>
            <div className="table-cell">Principal Investigator</div>
            <div className="table-cell">Start Date</div>
            <div className="table-cell">End Date</div>
            <div className="table-cell">Category</div>
            <div className="table-cell">Actions</div>
          </div>
          {projects.map((project, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{project.title}</div>
              <div className="table-cell">{project.principalInvestigator}</div>
              <div className="table-cell">{project.startDate}</div>
              <div className="table-cell">{project.endDate}</div>
              <div className="table-cell">{project.category}</div>
              <div className="table-cell">
                <button className="know-more-button" onClick={() => handleKnowMoreClick(project.title)}>
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default HeroSection;
