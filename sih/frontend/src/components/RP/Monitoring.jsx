import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import './Monitoring.css';

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

// Spinner Component for Loading state
const Spinner = () => <div className="spinner">Loading...</div>;

const Monitoring = () => {
  const [projectProfile, setProjectProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulating a delay as if it's fetching from an API
        const dummyData = {
          projectTitle: "Smart City Development Project",
          projectAbstract: "This project aims to design and implement IoT-based solutions to improve the infrastructure, utilities, and urban management of a city.",
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
          progressUpdates: "The project is progressing well, with IoT sensor installation nearing completion.",
          ethicalCompliance: "The project has passed all required ethical reviews and complies with data privacy standards.",
          iprUpdates: "No intellectual property filings yet.",
          teamUpdates: "The team has grown with additional engineers joining.",
          risksAndIssues: "Potential delays due to hardware procurement issues.",
          externalReports: "First external audit will be conducted in Q3 2024.",
          projectImpact: "The project aims to enhance the city's infrastructure, providing better urban services.",
          patents: {
            filed: 3,
            granted: 2,
            pending: 1
          },
          lifecycleMetrics: {
            initiation: {
              projectOverview: "Set project objectives, goals, and define stakeholders.",
              resourcesBudget: { initialBudget: 300000, fundingSecured: true },
              timelineDeadlines: { startDate: "2024-01-01", estimatedEndDate: "2025-01-01" },
            },
            planning: {
              projectTasks: "Break down project into tasks with clear milestones.",
              riskManagement: "Identify risks like hardware delays, resource allocation issues.",
              teamRoles: "Defined roles for team members including research leads."
            },
            execution: {
              progressReporting: "Regular updates of task completion and challenges faced.",
              dataAnalysis: "Data collection is ongoing, with analysis of initial IoT results.",
              ethicsCompliance: "Ethical reviews and regulatory requirements are being adhered to.",
            },
            monitoring: {
              taskMilestoneTracking: "Ensure tasks are completed per the set deadlines.",
              riskManagementTracking: "Regular risk assessments for delays or hardware procurement.",
            },
            closing: {
              deliverables: "Final reports, publications, and patents expected in Q1 2025.",
              evaluation: "Final project impact evaluation will assess urban improvements.",
            }
          }
        };

        setProjectProfile(dummyData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load project data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  // Budget data preparation for Bar chart (Expenditure Categories)
  const budgetData = {
    labels: ['Personnel', 'Travel', 'Supplies', 'Equipment', 'Software Licenses', 'Consultancy'],
    datasets: [
      {
        label: 'Expenditure (₹)',
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

      {/* Milestones */}
      <h2>Milestones</h2>
      <ul>
        {projectProfile.milestones.map((milestone, index) => (
          <li key={index}>
            {milestone.title} - {milestone.status} (Deadline: {milestone.deadline})
          </li>
        ))}
      </ul>

      {/* Project Impact and Updates */}
      <h2>Progress Updates</h2>
      <p>{projectProfile.progressUpdates}</p>

      <h2>Project Impact</h2>
      <p>{projectProfile.projectImpact}</p>

      {/* Ethical Compliance */}
      <h2>Ethical and Regulation Compliance</h2>
      <p>{projectProfile.ethicalCompliance}</p>

      {/* Patents */}
      <h3>Intellectual Property & Patents</h3>
      <p>{projectProfile.iprUpdates}</p>
      <div>
        <p><strong>Filed Patents:</strong> {projectProfile.patents.filed}</p>
        <p><strong>Granted Patents:</strong> {projectProfile.patents.granted}</p>
        <p><strong>Pending Patents:</strong> {projectProfile.patents.pending}</p>
      </div>

      {/* Lifecycle Metrics */}
      <h2>Project Lifecycle Metrics</h2>
      <div className="metrics-section">
        <h3>Initiation</h3>
        <p>{projectProfile.lifecycleMetrics.initiation.projectOverview}</p>
      </div>
      {/* Additional sections can be added similarly */}
    </div>
  );
};

export default Monitoring;
