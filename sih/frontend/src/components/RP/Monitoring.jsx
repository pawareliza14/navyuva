import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Registering required ChartJS components
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

  // Simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      const dummyData = {
        projectTitle: "Smart City Development Project",
        projectAbstract: "This project aims to design and implement IoT-based solutions to improve the infrastructure, utilities, and urban management of a city. It will focus on smart transportation, waste management, and energy efficiency.",
        milestones: [
          { title: "Market Research", status: "Completed", deadline: "2024-03-01" },
          { title: "UI/UX Design", status: "Completed", deadline: "2024-05-15" },
          { title: "IoT Sensor Installation", status: "Ongoing", deadline: "2024-08-01" },
          { title: "Smart City Platform Launch", status: "Pending", deadline: "2025-01-01" }
        ],
        expenditureCategories: {
          personnel: 120000,
          travel: 8000,
          supplies: 15000,
          equipment: 30000,
          softwareLicenses: 20000,
          consultancy: 50000
        },
        totalBudget: 300000,
        budgetUsed: 190000,
        progressUpdates: "The project is progressing well, with IoT sensor installation nearing completion. The UI/UX design was successfully completed and is now integrated with the backend system.",
        ethicalCompliance: "The project has passed all required ethical reviews and complies with the regulatory standards for data privacy and security.",
        iprUpdates: "There are no intellectual property filings yet, but discussions are underway for potential patents related to IoT-based solutions.",
        teamUpdates: "The team has grown, with additional engineers and software developers joining to speed up the deployment phase.",
        risksAndIssues: "There is a potential risk of delays due to hardware procurement issues, which might impact the IoT sensor installation timeline.",
        externalReports: "The first external audit will be conducted in Q3 2024.",
        projectImpact: "The project aims to enhance the city's infrastructure, providing better urban services and improving quality of life for residents. Long-term impacts include reduced traffic congestion and improved waste management systems.",
        patents: {
          filed: 3,
          granted: 2,
          pending: 1
        }
      };

      setProjectProfile(dummyData);
    }, 1000); // Simulate 1-second API call delay
  }, []);

  // Handling empty arrays safely
  const getArrayOrEmpty = (array) => Array.isArray(array) ? array : [];

  if (!projectProfile) {
    return <div>Loading...</div>;
  }

  // Budget data preparation for Bar chart (Expenditure Categories)
  const budgetData = {
    labels: ['Personnel', 'Travel', 'Supplies', 'Equipment', 'Software Licenses', 'Consultancy'],
    datasets: [
      {
        label: 'Expenditure ($)',
        data: [
          projectProfile.expenditureCategories.personnel,
          projectProfile.expenditureCategories.travel,
          projectProfile.expenditureCategories.supplies,
          projectProfile.expenditureCategories.equipment,
          projectProfile.expenditureCategories.softwareLicenses,
          projectProfile.expenditureCategories.consultancy
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Budget usage vs. remaining data for Pie chart
  const budgetUsageData = {
    labels: ['Used', 'Remaining'],
    datasets: [
      {
        data: [projectProfile.budgetUsed, projectProfile.totalBudget - projectProfile.budgetUsed],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)'],
      },
    ],
  };

  // Progress data for Line chart (Example - Replace with real data)
  const progressData = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [
      {
        label: 'Progress (%)',
        data: [25, 50, 75, 100], // Example progress over time
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

      {/* Budget Breakdown (Bar Chart) */}
      <div className="chart-section">
        <h2>Expenditure by Category</h2>
        <Bar data={budgetData} options={{ responsive: true }} />
      </div>

      {/* Budget Usage Overview (Pie Chart) */}
      <div className="chart-section">
        <h2>Budget Usage vs Remaining</h2>
        <Pie data={budgetUsageData} options={{ responsive: true }} />
      </div>

      {/* Progress Over Time (Line Chart) */}
      <div className="chart-section">
        <h2>Project Progress</h2>
        <Line data={progressData} options={{ responsive: true }} />
      </div>

      {/* Other Project Information */}
      <h2>Milestones</h2>
      <ul>
        {getArrayOrEmpty(projectProfile.milestones).map((milestone, index) => (
          <li key={index}>{milestone.title} - {milestone.status} (Deadline: {milestone.deadline})</li>
        ))}
      </ul>

      <h2>Progress Updates</h2>
      <p>{projectProfile.progressUpdates}</p>

      <h2>Project Impact</h2>
      <p>{projectProfile.projectImpact}</p>

      {/* Ethical and Regulation Compliance */}
      <div className="compliance-section">
        <h2>Ethical and Regulation Compliance</h2>
        <p>{projectProfile.ethicalCompliance}</p>
        
        {/* IP and Patent Status */}
        <h3>Intellectual Property & Patents</h3>
        <p>{projectProfile.iprUpdates}</p>
        <div className="patent-status">
          <p><strong>Filed Patents:</strong> {projectProfile.patents.filed}</p>
          <p><strong>Granted Patents:</strong> {projectProfile.patents.granted}</p>
          <p><strong>Pending Patents:</strong> {projectProfile.patents.pending}</p>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
