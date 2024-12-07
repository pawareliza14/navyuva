import React, { useState, useEffect } from "react";
import './Profile.css'; // Ensure the CSS file is linked

const ProjectProfilePage = () => {
  const [projectProfile, setProjectProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/project-profiles') // Replace with your actual API endpoint
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      })
      .then((data) => {
        // Check if the response contains the expected message and valid data
        if (data.message === "Project profiles fetched successfully" && Array.isArray(data.data) && data.data.length > 0) {
          setProjectProfile(data.data[0]); // Use the first profile from the data array
        } else {
          throw new Error('No valid project profile data found');
        }
      })
      .catch((error) => {
        console.error("Error fetching project profile data:", error);
        setError(`Failed to load data. Error: ${error.message}`);
      });
  }, []);

  // Helper function to handle potential empty arrays
  const getArrayOrEmpty = (array) => Array.isArray(array) ? array : [];

  // Handle loading and error states
  if (error) {
    return <div>{error}</div>;
  }

  if (!projectProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-profile-page">
      <h1>{projectProfile.projectTitle}</h1>
      <p><strong>Project Abstract:</strong> {projectProfile.projectAbstract}</p>

      {/* Basic Details Section */}
      <h2>Project Details</h2>
      <div className="grid">
        <div className="card">
          <p><strong>Principal Investigator:</strong> {projectProfile.principalInvestigator.name} ({projectProfile.principalInvestigator.designation})</p>
          <p><strong>Contact:</strong> {projectProfile.principalInvestigator.contactDetails}</p>
          <p><strong>Funding Agency:</strong> {projectProfile.fundingAgency.name}</p>
          <p><strong>Funding Details:</strong> {projectProfile.fundingAgency.details}</p>
          <p><strong>Project Category:</strong> {projectProfile.projectCategory}</p>
          <p><strong>Start Date:</strong> {new Date(projectProfile.startDate).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(projectProfile.endDate).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Budget Section */}
      <h2>Project Budget</h2>
      <div className="grid">
        <div className="card">
          <p><strong>Total Budget:</strong> ${projectProfile.projectBudget.total}</p>
          <p><strong>Personnel Budget:</strong> ${projectProfile.projectBudget.breakdown.personnel}</p>
          <p><strong>Equipment Budget:</strong> ${projectProfile.projectBudget.breakdown.equipment}</p>
          <p><strong>Research Expenses:</strong> ${projectProfile.projectBudget.breakdown.researchExpenses}</p>
        </div>
      </div>

      {/* Ethical Approval Section */}
      <h2>Ethical Approval</h2>
      <div className="grid">
        <div className="card">
          <p><strong>Status:</strong> {projectProfile.ethicalApproval.status}</p>
          <p><strong>Details:</strong> {projectProfile.ethicalApproval.details}</p>
        </div>
      </div>

      {/* Intellectual Property Rights Section */}
      <h2>Intellectual Property Rights</h2>
      <div className="grid">
        <div className="card">
          <p><strong>Status:</strong> {projectProfile.intellectualPropertyRights.status}</p>
          <p><strong>Details:</strong> {projectProfile.intellectualPropertyRights.details}</p>
        </div>
      </div>

      {/* Institutional Approval Section */}
      <h2>Institutional Approval</h2>
      <div className="grid">
        <div className="card">
          <p><strong>Status:</strong> {projectProfile.institutionalApproval.status}</p>
          <p><strong>Details:</strong> {projectProfile.institutionalApproval.details}</p>
        </div>
      </div>

      {/* Co-Investigators Section */}
      <h2>Co-Investigators</h2>
      <div className="grid">
        <div className="card">
          <ul>
            {getArrayOrEmpty(projectProfile.coInvestigators).map((coInvestigator, index) => (
              <li key={index}>
                <strong>{coInvestigator.name}</strong> - {coInvestigator.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectProfilePage;
