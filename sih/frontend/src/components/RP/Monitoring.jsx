import React, { useState, useEffect } from "react";
import './Profile.css'; // Ensure the CSS file is linked
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ProjectProfilePage = () => {
  const [projectProfile, setProjectProfile] = useState(null);
  const [error, setError] = useState(null);

  // Fetch project profile data from backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/project-profiles') // API endpoint
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

  // Graph Data Preparation for Budget Expenditure (Bar Chart)
  const budgetData = {
    labels: ['Personnel', 'Travel', 'Supplies', 'Equipment'],
    datasets: [
      {
        label: 'Budget Expenditure ($)',
        data: [
          projectProfile.expenditureCategories.personnel,
          projectProfile.expenditureCategories.travel,
          projectProfile.expenditureCategories.supplies,
          projectProfile.expenditureCategories.equipment
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Graph Data Preparation for Milestone Completion (Pie Chart)
  const milestonesCompleted = projectProfile.milestones.filter(milestone => milestone.status === 'Completed').length;
  const milestonesRemaining = projectProfile.milestones.length - milestonesCompleted;

  const milestonesData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [milestonesCompleted, milestonesRemaining],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)'],
      },
    ],
  };

  // Graph Data for Progress Updates (Line Chart)
  const progressData = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [
      {
        label: 'Progress (%)',
        data: [30, 50, 70, 100], // Example data, replace with real progress data
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="project-profile-page">
      <h1>{projectProfile.projectTitle}</h1>
      <p><strong>Project Abstract:</strong> {projectProfile.projectAbstract}</p>

      {/* Milestones Section */}
      <h2>Milestones</h2>
      <ul>
        {getArrayOrEmpty(projectProfile.milestones).map((milestone, index) => (
          <li key={index}>{milestone}</li>
        ))}
      </ul>

      {/* Progress Updates Section */}
      <h2>Progress Updates</h2>
      <p>{projectProfile.progressUpdates}</p>
      
      {/* Budget Tracking Graph (Bar Chart) */}
      <h2>Project Budget Expenditure</h2>
      <div>
        <Bar data={budgetData} options={{ responsive: true }} />
      </div>

      {/* Milestones Completion Graph (Pie Chart) */}
      <h2>Milestones Completion</h2>
      <div>
        <Pie data={milestonesData} options={{ responsive: true }} />
      </div>

      {/* Progress Graph (Line Chart) */}
      <h2>Project Progress</h2>
      <div>
        <Line data={progressData} options={{ responsive: true }} />
      </div>

      {/* Ethical Compliance, IPR Updates, etc. */}
      <h2>Ethical and Regulatory Compliance</h2>
      <p>{projectProfile.ethicalCompliance}</p>

      <h2>Intellectual Property Rights Updates</h2>
      <p>{projectProfile.iprUpdates}</p>

      <h2>Team Updates</h2>
      <p>{projectProfile.teamUpdates}</p>

      <h2>Risks & Issues</h2>
      <p>{projectProfile.risksAndIssues}</p>

      <h2>External Reports</h2>
      <p>{projectProfile.externalReports}</p>

      <h2>Project Impact</h2>
      <p>{projectProfile.projectImpact}</p>
    </div>
  );
};

export default ProjectProfilePage;
