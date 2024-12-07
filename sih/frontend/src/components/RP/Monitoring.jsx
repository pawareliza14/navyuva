// import React, { useState, useEffect } from "react";
// import './Profile.css'; // Ensure the CSS file is linked
// import { Line, Bar, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// // Register all necessary Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// const Monitoring = () => {
//   const [projectProfile, setProjectProfile] = useState(null);
//   const [error, setError] = useState(null);

//   // Fetch project profile data from backend API
//   useEffect(() => {
//     fetch('http://localhost:5000/api/project-profiles') // API endpoint
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error(`Error ${response.status}: ${response.statusText}`);
//         }
//       })
//       .then((data) => {
//         // Check if the response contains the expected message and valid data
//         if (data.message === "Project profiles fetched successfully" && Array.isArray(data.data) && data.data.length > 0) {
//           setProjectProfile(data.data[0]); // Use the first profile from the data array
//         } else {
//           throw new Error('No valid project profile data found');
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching project profile data:", error);
//         setError(`Failed to load data. Error: ${error.message}`);
//       });
//   }, []);

//   // Helper function to handle potential empty arrays
//   const getArrayOrEmpty = (array) => Array.isArray(array) ? array : [];

//   // Handle loading and error states
//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!projectProfile) {
//     return <div>Loading...</div>;
//   }

//   // Graph Data Preparation for Budget Expenditure (Bar Chart)
//   const budgetData = {
//     labels: ['Personnel', 'Travel', 'Supplies', 'Equipment'],
//     datasets: [
//       {
//         label: 'Budget Expenditure ($)',
//         data: [
//           projectProfile.expenditureCategories?.personnel || 0,
//           projectProfile.expenditureCategories?.travel || 0,
//           projectProfile.expenditureCategories?.supplies || 0,
//           projectProfile.expenditureCategories?.equipment || 0
//         ],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Graph Data Preparation for Milestone Completion (Pie Chart)
//   const milestonesCompleted = getArrayOrEmpty(projectProfile.milestones).filter(milestone => milestone.status === 'Completed').length;
//   const milestonesRemaining = getArrayOrEmpty(projectProfile.milestones).length - milestonesCompleted;

//   const milestonesData = {
//     labels: ['Completed', 'Remaining'],
//     datasets: [
//       {
//         data: [milestonesCompleted, milestonesRemaining],
//         backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
//         hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)'],
//       },
//     ],
//   };

//   // Graph Data for Progress Updates (Line Chart)
//   const progressData = {
//     labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
//     datasets: [
//       {
//         label: 'Progress (%)',
//         data: [30, 50, 70, 100], // Example data, replace with real progress data
//         borderColor: 'rgba(255, 159, 64, 1)',
//         backgroundColor: 'rgba(255, 159, 64, 0.2)',
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="project-profile-page">
//       <h1>{projectProfile.projectTitle || "Untitled Project"}</h1>
//       <p><strong>Project Abstract:</strong> {projectProfile.projectAbstract || "No abstract available"}</p>

//       {/* Milestones Section */}
//       <h2>Milestones</h2>
//       <ul>
//         {getArrayOrEmpty(projectProfile.milestones).length > 0 ? (
//           getArrayOrEmpty(projectProfile.milestones).map((milestone, index) => (
//             <li key={index}>{milestone.title || "Untitled milestone"}</li>
//           ))
//         ) : (
//           <p>No milestones available</p>
//         )}
//       </ul>

//       {/* Progress Updates Section */}
//       <h2>Progress Updates</h2>
//       <p>{projectProfile.progressUpdates || "No progress updates available."}</p>
      
//       {/* Budget Tracking Graph (Bar Chart) */}
//       <h2>Project Budget Expenditure</h2>
//       <div>
//         <Bar data={budgetData} options={{ responsive: true }} />
//       </div>

//       {/* Milestones Completion Graph (Pie Chart) */}
//       <h2>Milestones Completion</h2>
//       <div>
//         <Pie data={milestonesData} options={{ responsive: true }} />
//       </div>

//       {/* Progress Graph (Line Chart) */}
//       <h2>Project Progress</h2>
//       <div>
//         <Line data={progressData} options={{ responsive: true }} />
//       </div>

//       {/* Ethical Compliance, IPR Updates, etc. */}
//       <h2>Ethical and Regulatory Compliance</h2>
//       <p>{projectProfile.ethicalCompliance || "No ethical compliance information available"}</p>

//       <h2>Intellectual Property Rights Updates</h2>
//       <p>{projectProfile.iprUpdates || "No IPR updates available"}</p>

//       <h2>Team Updates</h2>
//       <p>{projectProfile.teamUpdates || "No team updates available"}</p>

//       <h2>Risks & Issues</h2>
//       <p>{projectProfile.risksAndIssues || "No risks and issues reported"}</p>

//       <h2>External Reports</h2>
//       <p>{projectProfile.externalReports || "No external reports available"}</p>

//       <h2>Project Impact</h2>
//       <p>{projectProfile.projectImpact || "No project impact information available"}</p>
//     </div>
//   );
// };

// export default Monitoring;

import React, { useState, useEffect } from "react";
import './Monitoring.css'; // Ensure the CSS file is linked
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Register all necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Monitoring = () => {
  const [projectProfile, setProjectProfile] = useState(null);
  const [error, setError] = useState(null);

  // Simulate API call with dummy data using setTimeout
  useEffect(() => {
    setTimeout(() => {
      const dummyData = {
        projectTitle: "My Real Estate Project",
        projectAbstract: "This project involves developing a real estate web platform where users can search, filter, and view properties on a live map.",
        milestones: [
          { title: "Market Research", status: "Completed" },
          { title: "UI/UX Design", status: "Completed" },
          { title: "Backend Development", status: "Ongoing" },
          { title: "Frontend Integration", status: "Pending" }
        ],
        expenditureCategories: {
          personnel: 7500,
          travel: 1000,
          supplies: 1500,
          equipment: 3000,
        },
        progressUpdates: "Project is on track with backend development underway. The UI is fully designed and the next stage will be frontend integration.",
        ethicalCompliance: "All ethical standards have been met. No issues found.",
        iprUpdates: "No intellectual property claims at this stage.",
        teamUpdates: "The team has expanded with a new full-stack developer joining the project.",
        risksAndIssues: "Risk of delay in frontend development due to team expansion and training.",
        externalReports: "No external audits or reports yet.",
        projectImpact: "This project is expected to streamline property searches, providing an all-in-one platform for buyers and sellers."
      };

      // Set the dummy data after the delay
      setProjectProfile(dummyData);
    }, 1000); // Simulates a 1-second delay
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
          projectProfile.expenditureCategories?.personnel || 0,
          projectProfile.expenditureCategories?.travel || 0,
          projectProfile.expenditureCategories?.supplies || 0,
          projectProfile.expenditureCategories?.equipment || 0
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Graph Data Preparation for Milestone Completion (Pie Chart)
  const milestonesCompleted = getArrayOrEmpty(projectProfile.milestones).filter(milestone => milestone.status === 'Completed').length;
  const milestonesRemaining = getArrayOrEmpty(projectProfile.milestones).length - milestonesCompleted;

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
      <h1 className="page-title">{projectProfile.projectTitle || "Untitled Project"}</h1>
      <p className="project-abstract"><strong>Project Abstract:</strong> {projectProfile.projectAbstract || "No abstract available"}</p>

      <div className="content-container">
        {/* Milestones Section */}
        <div className="section milestones-section">
          <h2>Milestones</h2>
          <ul>
            {getArrayOrEmpty(projectProfile.milestones).length > 0 ? (
              getArrayOrEmpty(projectProfile.milestones).map((milestone, index) => (
                <li key={index}>{milestone.title || "Untitled milestone"} - {milestone.status}</li>
              ))
            ) : (
              <p>No milestones available</p>
            )}
          </ul>
        </div>

        {/* Progress Updates Section */}
        <div className="section">
          <h2>Progress Updates</h2>
          <p>{projectProfile.progressUpdates || "No progress updates available."}</p>
        </div>
      </div>

      <div className="content-container">
        {/* Budget Tracking Graph (Bar Chart) */}
        <div className="chart-section">
          <h2>Project Budget Expenditure</h2>
          <div className="chart-container">
            <Bar data={budgetData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Milestones Completion Graph (Pie Chart) */}
        <div className="chart-section">
          <h2>Milestones Completion</h2>
          <div className="chart-container">
            <Pie data={milestonesData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Progress Graph (Line Chart) */}
        <div className="chart-section">
          <h2>Project Progress</h2>
          <div className="chart-container">
            <Line data={progressData} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      <div className="content-container">
        {/* Ethical Compliance, IPR Updates, etc. */}
        <div className="section">
          <h2>Ethical and Regulatory Compliance</h2>
          <p>{projectProfile.ethicalCompliance || "No ethical compliance information available"}</p>
        </div>

        <div className="section">
          <h2>Intellectual Property Rights Updates</h2>
          <p>{projectProfile.iprUpdates || "No IPR updates available"}</p>
        </div>

        <div className="section">
          <h2>Team Updates</h2>
          <p>{projectProfile.teamUpdates || "No team updates available"}</p>
        </div>

        <div className="section">
          <h2>Risks & Issues</h2>
          <p>{projectProfile.risksAndIssues || "No risks and issues reported"}</p>
        </div>

        <div className="section">
          <h2>External Reports</h2>
          <p>{projectProfile.externalReports || "No external reports available"}</p>
        </div>

        <div className="section">
          <h2>Project Impact</h2>
          <p>{projectProfile.projectImpact || "No project impact information available"}</p>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
